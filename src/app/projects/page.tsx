import { Button } from "@/components/ui/button";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/lib/data";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 md:px-[100px] py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-headline font-bold mb-2">My Work</h1>
          <p className="text-lg text-muted-foreground">
            A selection of projects that I'm proud of.
          </p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Project
          </Link>
        </Button>
      </div>

      <ProjectGallery projects={projects} />
    </div>
  );
}
