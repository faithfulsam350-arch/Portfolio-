import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

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
    <div className="container mx-auto px-4 py-12 md:py-16">
        <Button asChild variant="ghost" className="mb-8">
            <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <div className="aspect-[16/9] relative mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover rounded-lg shadow-lg"
              data-ai-hint="creative work"
            />
          </div>
          {/* Add more images in a carousel or grid if available */}
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">{project.title}</h1>
          <Badge variant="secondary" className="mb-4">{project.category}</Badge>
          <p className="text-muted-foreground text-lg mb-6">{project.longDescription}</p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  Live Site <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.caseStudyUrl && (
              <Button asChild variant="secondary">
                <Link href={project.caseStudyUrl} target="_blank">
                  Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
