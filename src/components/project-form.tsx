'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { ClickableImage } from './clickable-image';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { suggestKeywords } from '@/ai/flows/ai-project-tagging';
import { Badge } from './ui/badge';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  imageUrl: z.string().url({ message: 'Please upload a valid image.' }),
  tags: z.array(z.string()).min(1, { message: 'At least one tag is required.' }),
});

export function ProjectForm() {
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isTagging, setIsTagging] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      imageUrl: '',
      tags: [],
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUri = reader.result as string;
        setImagePreview(dataUri);
        form.setValue('imageUrl', dataUri);
        setIsTagging(true);
        try {
          const result = await suggestKeywords({ photoDataUri: dataUri });
          const newTags = Array.from(new Set([...form.getValues('tags'), ...result.keywords]));
          form.setValue('tags', newTags);
          toast({
            title: "AI Magic!",
            description: "Suggested tags have been added.",
          });
        } catch (error) {
          console.error("Error suggesting keywords:", error);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Could not get AI tag suggestions.",
          });
        } finally {
            setIsTagging(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Project Submitted!',
      description: 'Your new project has been added (to the console).',
    });
  }

  const tags = form.watch('tags');

  const toggleTag = (tag: string) => {
    const currentTags = form.getValues('tags');
    const newTags = currentTags.includes(tag)
        ? currentTags.filter(t => t !== tag)
        : [...currentTags, tag];
    form.setValue('tags', newTags);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Modern E-commerce Platform" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your project"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
            <FormLabel>Project Image</FormLabel>
            <FormControl>
                <Input type="file" accept="image/*" onChange={handleImageChange} />
            </FormControl>
            <FormDescription>
                Upload a high-quality image of your project. This will be used to generate tags.
            </FormDescription>
            {imagePreview && (
                <div className="mt-4 relative aspect-video w-full max-w-sm">
                    <ClickableImage src={imagePreview} alt="Project preview" fill className="rounded-md object-cover" />
                </div>
            )}
            <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="tags"
          render={() => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                Tags 
                {isTagging && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
              </FormLabel>
              <FormDescription>
                Click tags to add or remove them.
              </FormDescription>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Badge 
                        key={tag} 
                        variant="default"
                        className="cursor-pointer"
                        onClick={() => toggleTag(tag)}
                    >
                        {tag}
                    </Badge>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isTagging}>
            {isTagging ? 'Generating tags...' : 'Submit Project'}
        </Button>
      </form>
    </Form>
  );
}
