import Link from "next/link";
import Image from "next/image";
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

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, category, cover_image, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f0ede6]">
        {/* Hero */}
        <div className="bg-neutral-900 text-white pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs tracking-[0.3em] mb-6 text-neutral-400">JOURNAL</div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Stories from Rwanda.
            </h1>
            <p className="mt-6 text-sm text-neutral-300 max-w-md leading-relaxed">
              Photography, people and the work we do between journeys.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          {error && (
            <p className="text-sm text-red-500">
              Could not load posts. Check your Supabase credentials.
            </p>
          )}

          {!error && posts && posts.length === 0 && (
            <p className="text-sm text-neutral-500">No posts published yet.</p>
          )}

          {posts && posts.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(posts as BlogPost[]).map((post) => {
                const imgSrc =
                  post.cover_image ||
                  fallbackImages[post.slug] ||
                  defaultFallback;
                const isExternal = imgSrc.startsWith("https://");

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white block hover:shadow-md transition-shadow"
                  >
                    {/* Cover image — always shown */}
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-200">
                      {isExternal ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imgSrc}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <Image
                          src={imgSrc}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      <div className="text-xs tracking-[0.2em] text-neutral-400 mb-3">
                        {post.category?.toUpperCase()} &nbsp;·&nbsp;{" "}
                        {new Date(post.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <h2 className="text-xl font-light text-neutral-800 mb-2 group-hover:opacity-70 transition-opacity">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-4 text-xs tracking-[0.15em] text-neutral-800">
                        READ →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
