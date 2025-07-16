import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
    return projects.map((project) => ({
      id: project.id,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-[100px] py-12 md:py-16">
        <ScrollAnimation variant="grow">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </ScrollAnimation>
      <div className="grid lg:grid-cols-5 gap-x-12 gap-y-8">
        <div className="lg:col-span-3">
            <ScrollAnimation variant="grow">
              <div className="aspect-[16/9] relative mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  data-ai-hint="creative work"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
               <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">{project.title}</h1>
               <Badge variant="secondary" className="mb-8">{project.category}</Badge>
              <div
                  className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-foreground prose-headings:font-headline prose-h2:text-4xl prose-h3:text-3xl"
                  dangerouslySetInnerHTML={{ __html: project.longDescription }}
                />
            </ScrollAnimation>
        </div>
        <aside className="lg:col-span-2 lg:sticky top-24 self-start">
            <ScrollAnimation delay="200">
                <div className="bg-card border rounded-lg p-6">
                    <h2 className="text-2xl font-headline font-bold mb-4">Project Details</h2>
                    
                    <div className="mb-6">
                        <h3 className="font-semibold mb-3 text-lg">Technologies & Skills</h3>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {project.liveUrl && (
                        <ScrollAnimation variant="grow" className="w-full" delay="400">
                            <Button asChild className="w-full">
                                <Link href={project.liveUrl} target="_blank">
                                Live Site <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </ScrollAnimation>
                        )}
                        {project.caseStudyUrl && (
                        <ScrollAnimation variant="grow" className="w-full" delay="400">
                            <Button asChild variant="secondary" className="w-full">
                                <Link href={project.caseStudyUrl} target="_blank">
                                Case Study <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </ScrollAnimation>
                        )}
                    </div>
                </div>
            </ScrollAnimation>
        </aside>
      </div>
    </div>
  );
}
