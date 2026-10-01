import { notFound } from "next/navigation";
import { blogPosts } from "@/data";
import { loadBlogContent } from "@/lib/content-loader";
import { ContentRenderer } from "@/components/content-renderer";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClickableImage } from "@/components/clickable-image";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Load the HTML content for this blog post
  const blogContent = await loadBlogContent(post.content);

  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
        <article className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
            <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden shadow-lg">
                <ClickableImage
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint="blog abstract"
                />
            </div>
            <ContentRenderer 
                content={blogContent}
                className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-headings:font-headline"
            />
        </article>
    </div>
  );
}
