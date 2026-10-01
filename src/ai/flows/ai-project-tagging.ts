'use server';

/**
 * @fileOverview An AI tool to suggest keywords for describing projects based on uploaded images.
 *
 * - suggestKeywords - A function that handles the keyword suggestion process.
 * - SuggestKeywordsInput - The input type for the suggestKeywords function.
 * - SuggestKeywordsOutput - The return type for the suggestKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestKeywordsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the project, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestKeywordsInput = z.infer<typeof SuggestKeywordsInputSchema>;

const SuggestKeywordsOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe('An array of keywords that describe the project.'),
});
export type SuggestKeywordsOutput = z.infer<typeof SuggestKeywordsOutputSchema>;

export async function suggestKeywords(input: SuggestKeywordsInput): Promise<SuggestKeywordsOutput> {
  return suggestKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestKeywordsPrompt',
  input: {schema: SuggestKeywordsInputSchema},
  output: {schema: SuggestKeywordsOutputSchema},
  prompt: `You are an expert in identifying relevant keywords for creative projects based on images.

  Based on the following image of a project, suggest a list of keywords that accurately describe it.
  Return the keywords as an array of strings.

  Image: {{media url=photoDataUri}}`,
});

const suggestKeywordsFlow = ai.defineFlow(
  {
    name: 'suggestKeywordsFlow',
    inputSchema: SuggestKeywordsInputSchema,
    outputSchema: SuggestKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
