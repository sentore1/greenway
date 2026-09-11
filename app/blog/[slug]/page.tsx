import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase, BlogPost } from "@/lib/supabase";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const revalidate = 0;

const fallbackImages: Record<string, string> = {
  "umubyeyi-mwiza": "/images/blog/Umubyeyi Mwiza.jpeg",
  "green-steps-rwanda": "/images/blog/Green Steps Rwanda.jpeg",
  "inararibonye-girls-education-trust":
    "/images/blog/Inararibonye Girls' Education Trust — keeping girls in secondary school across three provinces..jpeg",
};

const defaultFallback = "/images/herosectoin.jpg";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!post) notFound();

  const p = post as BlogPost;

  const imgSrc =
    p.cover_image ||
    fallbackImages[p.slug] ||
    defaultFallback;

  function renderBody(text: string) {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xs tracking-[0.3em] text-neutral-500 mt-10 mb-3">
            {line.replace("## ", "").toUpperCase()}
          </h2>
        );
      }
      if (line.trim() === "") return <div key={i} className="h-3" />;
      return (
        <p key={i} className="text-base leading-relaxed text-neutral-700">
          {line}
        </p>
      );
    });
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero image — always shown */}
        <div className="relative h-72 md:h-[480px] w-full bg-neutral-900 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={p.title}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <article className="max-w-2xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="text-xs tracking-[0.2em] text-neutral-400 mb-8">
            <Link href="/blog" className="hover:text-neutral-700 transition-colors">
              JOURNAL
            </Link>{" "}
            / {p.category?.toUpperCase()}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-light leading-tight text-neutral-900 mb-4">
            {p.title}
          </h1>

          <div className="text-xs text-neutral-400 mb-10">
            {new Date(p.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          {/* Excerpt */}
          {p.excerpt && (
            <p className="text-lg font-light text-neutral-600 leading-relaxed mb-10 border-l-2 border-neutral-300 pl-5">
              {p.excerpt}
            </p>
          )}

          {/* Body */}
          <div className="space-y-1">{renderBody(p.body)}</div>

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <Link
              href="/blog"
              className="text-xs tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ← BACK TO JOURNAL
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
