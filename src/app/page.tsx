import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tighter">
          UI/UX Designer & Product Strategist
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          I design intuitive, beautiful, and user-centric digital experiences
          that solve real-world problems.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#case-studies">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <section id="case-studies" className="space-y-20 md:space-y-28">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Studies</h2>
            <p className="text-muted-foreground mt-2">A closer look at my design process and project outcomes.</p>
        </div>
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div
              className={cn(
                "relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group",
                index % 2 === 1 && "md:order-last"
              )}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="creative work"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-4 w-fit">{project.category}</Badge>
              <h3 className="text-3xl font-headline font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <Button asChild className="w-fit">
                <Link href={`/projects/${project.id}`}>
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
