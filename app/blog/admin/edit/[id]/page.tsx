import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";
import PostForm from "../../_components/PostForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#f0ede6] px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="text-xs tracking-[0.3em] text-neutral-500 mb-2">JOURNAL</div>
            <h1 className="text-3xl font-light text-neutral-900">Edit Post</h1>
          </div>
          <Link
            href="/blog/admin"
            className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← ALL POSTS
          </Link>
        </div>
        <PostForm post={post as BlogPost} />
      </div>
    </main>
  );
}
