
'use client';

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { cn } from "@/lib/utils";
import parse, { domToReact, Element } from 'html-react-parser';
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import { ImageLightbox } from "@/components/image-lightbox";

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    // Add click listeners to images within the parsed HTML
    const contentArea = document.getElementById('project-content');
    if (contentArea) {
      const images = contentArea.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
          setLightboxImage(img.src);
        });
      }
    }
  }, [project]);


  if (!project) {
    notFound();
  }

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const parsedDescription = parse(project.longDescription, {
    replace: (domNode) => {
        if(domNode instanceof Element && domNode.attribs) {
            // Animate only the top-level divs containing an image or video
            const hasMediaChild = domNode.children.some(
                (child) => child instanceof Element && (child.name === 'img' || child.name === 'video')
            );
            if(domNode.name === 'div' && hasMediaChild) {
                 return <AnimateOnScroll variant="grow">{domToReact(domNode.children as any)}</AnimateOnScroll>
            }
        }
    }
  });

  const heroImage = project.heroImageUrl || project.imageUrl;

  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
        <ImageLightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
        <ScrollAnimation variant="grow">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </ScrollAnimation>
        
        <article className="max-w-4xl mx-auto">
            <ScrollAnimation>
               <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">{project.title}</h1>
               <Badge variant="secondary" className="mb-8">{project.category}</Badge>
            </ScrollAnimation>

            <ScrollAnimation variant="grow">
              <div className="aspect-[4/3] relative mb-8 rounded-lg overflow-hidden shadow-2xl cursor-pointer" onClick={() => setLightboxImage(heroImage)}>
                <Image
                  src={heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                  className="object-cover rounded-lg"
                  data-ai-hint="creative work"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div
                  id="project-content"
                  className="prose prose-lg dark:prose-invert max-w-none prose-p:text-justify prose-p:text-foreground/80 prose-headings:text-foreground prose-headings:font-headline prose-h2:text-4xl prose-h3:text-3xl"
              >
                {parsedDescription}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay="200" className="mt-12">
                <Card>
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-headline font-bold mb-4">Project Details</h2>
                        
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3 text-lg">Technologies & Skills</h3>
                            <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.liveUrl && (
                                <Button asChild className="w-full">
                                    <Link href={project.liveUrl} target="_blank">
                                    Live Site <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                            {project.caseStudyUrl && (
                                <Button asChild variant="secondary" className="w-full">
                                    <Link href={project.caseStudyUrl} target="_blank">
                                    Case Study <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </ScrollAnimation>
        </article>

       <section className="py-20 md:py-24 text-center">
        <ScrollAnimation>
            <Card className="bg-card/50 max-w-4xl mx-auto">
            <CardContent className="p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Thank You!</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Thanks for viewing this case study. If you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
                 <ScrollAnimation variant="grow" className="mt-8" delay="600">
                    <Button asChild size="lg">
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </ScrollAnimation>
            </CardContent>
            </Card>
        </ScrollAnimation>
      </section>

      <div className="border-t pt-8 max-w-4xl mx-auto">
        <ScrollAnimation>
            <div className={cn("flex justify-between items-center", !previousProject && "justify-end")}>
                {previousProject && (
                <Button asChild variant="outline">
                    <Link href={`/projects/${previousProject.id}`} className="flex items-center gap-4">
                        <ArrowLeft className="h-5 w-5" />
                        <div className="text-left">
                            <div className="text-xs text-muted-foreground">Previous Project</div>
                            <div className="font-semibold truncate max-w-[150px] md:max-w-xs">{previousProject.title}</div>
                        </div>
                    </Link>
                </Button>
                )}

                {nextProject && (
                <Button asChild variant="outline">
                    <Link href={`/projects/${nextProject.id}`} className="flex items-center gap-4">
                         <div className="text-right">
                            <div className="text-xs text-muted-foreground">Next Project</div>
                            <div className="font-semibold truncate max-w-[150px] md:max-w-xs">{nextProject.title}</div>
                        </div>
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </Button>
                )}
            </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
