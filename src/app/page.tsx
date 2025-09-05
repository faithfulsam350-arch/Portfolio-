
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ClickableImage } from "@/components/clickable-image";

export default function Home() {
  const featuredProjects = projects.filter(p => p.published).slice(0, 5);

  return (
    <div className="container mx-auto px-6 md:px-[100px]">
      <section className="py-20 md:py-32 text-center">
        <div className="flex flex-col items-center">
            
                <Badge variant="default" className="mb-4">UI/UX Designer & Product Designer</Badge>
            
            
                <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 tracking-tighter">
                Faithful Samuel
                </h1>
            
            
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                I design intuitive, beautiful, and user-centric digital experiences
                that solve real-world problems and drive business growth.
                </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
                <Button asChild size="lg">
                  <Link href="#case-studies">View My Work</Link>
                </Button>
              
              
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get in Touch <MoveRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              
            </div>
          </div>
      </section>

      <section id="case-studies" className="py-12 md:py-24 space-y-20 md:space-y-28">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Case Studies</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">A closer look at my design process and how I've helped translate complex problems into clean, user-friendly solutions.</p>
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
              <ClickableImage
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.id === '2' ? 'finance website' : 'creative work'}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4 w-fit">{project.category}</Badge>
              <h3 className="text-3xl font-headline font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
               <div className="w-fit">
                    <Button asChild>
                        <Link href={`/projects/${project.id}`}>
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
               </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 md:py-32 text-center">
        
            <Card className="bg-card/50">
            <CardContent className="p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Thank You!</h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Thanks for stopping by. If you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            </CardContent>
            </Card>
        
      </section>
    </div>
  );
}
