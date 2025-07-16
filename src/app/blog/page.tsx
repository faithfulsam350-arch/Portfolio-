import { blogPosts } from "@/lib/data";
import { BlogPostCard } from "@/components/blog-post-card";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">From the Blog</h1>
        <p className="text-lg text-muted-foreground">
          My thoughts on design, development, and everything in between.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
