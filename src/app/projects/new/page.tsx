import { ProjectForm } from "@/components/project-form";

export default function NewProjectPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold mb-2">Create a New Project</h1>
            <p className="text-lg text-muted-foreground">
                Add your latest work to the portfolio. Upload an image to get AI-powered tag suggestions.
            </p>
        </div>
        <ProjectForm />
      </div>
    </div>
  );
}
