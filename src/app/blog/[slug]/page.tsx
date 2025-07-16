import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
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
                <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint="blog abstract"
                />
            </div>
            <div
                className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-headings:font-headline"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    </div>
  );
}
