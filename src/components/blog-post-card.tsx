import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="aspect-[16/9] relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-lg"
            data-ai-hint="blog abstract"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-6">
        <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
        <div className="text-xs text-muted-foreground flex items-center mb-2">
            <Calendar className="h-3 w-3 mr-1.5" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <CardDescription>{post.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
