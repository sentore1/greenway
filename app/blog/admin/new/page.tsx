import Link from "next/link";
import PostForm from "../_components/PostForm";

export default function NewPostPage() {
  return (
    <main className="min-h-screen bg-[#f0ede6] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] text-neutral-500 mb-2">JOURNAL</div>
            <h1 className="text-3xl font-light text-neutral-900">New Post</h1>
          </div>
          <Link
            href="/blog/admin"
            className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← ALL POSTS
          </Link>
        </div>
        <PostForm />
      </div>
    </main>
  );
}
