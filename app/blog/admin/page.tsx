"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function fetchPosts() {
    setLoading(true);
    const { data } = await supabase
      .from("blog_posts")
      .select("id, title, slug, category, published, created_at")
      .order("created_at", { ascending: false });
    setPosts((data as BlogPost[]) ?? []);
    setLoading(false);
  }

  useEffect(() => { fetchPosts(); }, []);

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setDeletingId(post.id);
    await supabase.from("blog_posts").delete().eq("id", post.id);
    await fetchPosts();
    setDeletingId(null);
  }

  async function togglePublished(post: BlogPost) {
    await supabase
      .from("blog_posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    await fetchPosts();
  }

  return (
    <main className="min-h-screen bg-[#f0ede6] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] text-neutral-500 mb-2">JOURNAL</div>
            <h1 className="text-3xl font-light text-neutral-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ← VIEW BLOG
            </Link>
            <Link
              href="/blog/admin/new"
              className="bg-neutral-900 text-white px-6 py-3 text-xs tracking-[0.2em] hover:bg-neutral-700 transition-colors"
            >
              + NEW POST
            </Link>
          </div>
        </div>

        {/* Posts table */}
        {loading ? (
          <p className="text-sm text-neutral-500">Loading…</p>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-neutral-300">
            <p className="text-sm text-neutral-500 mb-4">No posts yet.</p>
            <Link
              href="/blog/admin/new"
              className="text-xs tracking-[0.2em] text-neutral-800 underline"
            >
              CREATE YOUR FIRST POST →
            </Link>
          </div>
        ) : (
          <div className="bg-white divide-y divide-neutral-100">
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-neutral-100">
              <div className="col-span-5 text-xs tracking-[0.2em] text-neutral-500">TITLE</div>
              <div className="col-span-2 text-xs tracking-[0.2em] text-neutral-500">CATEGORY</div>
              <div className="col-span-2 text-xs tracking-[0.2em] text-neutral-500">STATUS</div>
              <div className="col-span-3 text-xs tracking-[0.2em] text-neutral-500 text-right">ACTIONS</div>
            </div>

            {posts.map((post) => (
              <div key={post.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-neutral-50 transition-colors">
                {/* Title + date */}
                <div className="col-span-5">
                  <p className="text-sm font-light text-neutral-800 truncate">{post.title}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {new Date(post.created_at).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </p>
                </div>

                {/* Category */}
                <div className="col-span-2">
                  <span className="text-xs tracking-[0.1em] text-neutral-500">
                    {post.category}
                  </span>
                </div>

                {/* Published toggle */}
                <div className="col-span-2">
                  <button
                    onClick={() => togglePublished(post)}
                    className={`text-xs tracking-[0.1em] px-3 py-1 rounded-full transition-colors ${
                      post.published
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300"
                    }`}
                  >
                    {post.published ? "PUBLISHED" : "DRAFT"}
                  </button>
                </div>

                {/* Actions */}
                <div className="col-span-3 flex items-center justify-end gap-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-xs tracking-[0.1em] text-neutral-400 hover:text-neutral-700 transition-colors"
                  >
                    VIEW
                  </Link>
                  <Link
                    href={`/blog/admin/edit/${post.id}`}
                    className="text-xs tracking-[0.1em] text-neutral-700 hover:text-neutral-900 underline transition-colors"
                  >
                    EDIT
                  </Link>
                  <button
                    onClick={() => handleDelete(post)}
                    disabled={deletingId === post.id}
                    className="text-xs tracking-[0.1em] text-red-500 hover:text-red-700 transition-colors disabled:opacity-40"
                  >
                    {deletingId === post.id ? "…" : "DELETE"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
