"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  cover_image: string;   // final public URL stored in DB
  category: string;
  published: boolean;
};

const empty: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  cover_image: "",
  category: "Impact",
  published: false,
};

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function AdminPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  // Image upload state
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setForm((prev) => ({ ...prev, title, slug: toSlug(title) }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setUploadStatus("idle");
    // Clear any previously uploaded URL so user knows they need to upload
    setForm((prev) => ({ ...prev, cover_image: "" }));
  }

  async function handleUpload() {
    if (!imageFile) return;
    setUploadStatus("uploading");

    const ext = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}-${toSlug(imageFile.name.replace(/\.[^.]+$/, ""))}.${ext}`;

    const { error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, imageFile, { upsert: false });

    if (error) {
      setUploadStatus("error");
      setMessage(`Image upload failed: ${error.message}`);
      return;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
    setForm((prev) => ({ ...prev, cover_image: data.publicUrl }));
    setUploadStatus("done");
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setMessage("");

    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim(),
      excerpt: form.excerpt.trim() || null,
      body: form.body.trim(),
      cover_image: form.cover_image.trim() || null,
      category: form.category,
      published: form.published,
    };

    const { error } = await supabase.from("blog_posts").insert([payload]);

    if (error) {
      setStatus("error");
      setMessage(error.message);
    } else {
      setStatus("ok");
      setMessage("Post saved successfully!");
      setForm(empty);
      setImageFile(null);
      setImagePreview("");
      setUploadStatus("idle");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-neutral-300 pb-2 focus:outline-none focus:border-neutral-800 text-sm text-neutral-800 placeholder-neutral-400 transition-colors";

  const labelClass = "block text-xs tracking-[0.2em] text-neutral-500 mb-2";

  return (
    <main className="min-h-screen bg-[#f0ede6] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] text-neutral-500 mb-2">JOURNAL</div>
            <h1 className="text-3xl font-light text-neutral-900">New Post</h1>
          </div>
          <Link
            href="/blog"
            className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← VIEW BLOG
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label className={labelClass}>TITLE *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleTitleChange}
              placeholder="Post title"
              required
              className={inputClass}
            />
          </div>

          {/* Slug */}
          <div>
            <label className={labelClass}>SLUG *</label>
            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="auto-generated-from-title"
              required
              className={inputClass}
            />
          </div>

          {/* Category */}
          <div>
            <label className={labelClass}>CATEGORY</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Impact">Impact</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Culture">Culture</option>
              <option value="Photography">Photography</option>
              <option value="Journal">Journal</option>
            </select>
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelClass}>EXCERPT</label>
            <input
              type="text"
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="One-line summary shown on the blog listing"
              className={inputClass}
            />
          </div>

          {/* Cover image upload */}
          <div className="space-y-4">
            <label className={labelClass}>COVER IMAGE</label>

            {/* Preview */}
            {imagePreview && (
              <div className="relative w-full h-48 bg-neutral-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                {uploadStatus === "done" && (
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1">
                    ✓ UPLOADED
                  </div>
                )}
              </div>
            )}

            {/* File input + upload button */}
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="border border-neutral-400 px-4 py-2 text-xs tracking-[0.15em] text-neutral-600 hover:border-neutral-800 hover:text-neutral-800 transition-colors"
              >
                {imageFile ? "CHANGE IMAGE" : "CHOOSE IMAGE"}
              </button>

              {imageFile && uploadStatus !== "done" && (
                <button
                  type="button"
                  onClick={handleUpload}
                  disabled={uploadStatus === "uploading"}
                  className="bg-neutral-800 text-white px-4 py-2 text-xs tracking-[0.15em] hover:bg-neutral-600 transition-colors disabled:opacity-50"
                >
                  {uploadStatus === "uploading" ? "UPLOADING…" : "UPLOAD →"}
                </button>
              )}

              {uploadStatus === "error" && (
                <span className="text-xs text-red-500">Upload failed</span>
              )}
            </div>

            {imageFile && (
              <p className="text-xs text-neutral-400">{imageFile.name}</p>
            )}

            {/* Fallback: paste a URL manually */}
            {!imageFile && (
              <input
                type="url"
                name="cover_image"
                value={form.cover_image}
                onChange={handleChange}
                placeholder="Or paste an image URL (https://…)"
                className={inputClass}
              />
            )}

            {uploadStatus === "done" && (
              <p className="text-xs text-green-700 truncate">
                Stored at: {form.cover_image}
              </p>
            )}
          </div>

          {/* Body */}
          <div>
            <label className={labelClass}>
              BODY *{" "}
              <span className="normal-case font-normal text-neutral-400">
                (use ## for headings, blank lines for paragraphs)
              </span>
            </label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              required
              rows={12}
              placeholder={`## The Organisation\n\nWrite your story here.\n\n## Our Role\n\nDescribe your involvement.\n\n## The Impact\n\nShare the outcome.`}
              className="w-full bg-white border border-neutral-300 p-4 focus:outline-none focus:border-neutral-800 text-sm text-neutral-800 placeholder-neutral-400 transition-colors leading-relaxed resize-y"
            />
          </div>

          {/* Publish toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="published"
              checked={form.published}
              onChange={handleChange}
              className="w-4 h-4 accent-neutral-800"
            />
            <span className="text-xs tracking-[0.2em] text-neutral-600">
              PUBLISH IMMEDIATELY
            </span>
          </label>

          {/* Status messages */}
          {status === "ok" && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3">
              {message}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "saving"}
            className="bg-neutral-900 text-white px-8 py-4 text-xs tracking-[0.2em] hover:bg-neutral-700 transition-colors disabled:opacity-50"
          >
            {status === "saving" ? "SAVING…" : "SAVE POST →"}
          </button>
        </form>
      </div>
    </main>
  );
}
