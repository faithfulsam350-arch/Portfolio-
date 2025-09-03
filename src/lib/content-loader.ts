import { promises as fs } from 'fs';
import path from 'path';

export async function loadProjectContent(contentId: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'projects', `${contentId}.html`);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error loading project content for ${contentId}:`, error);
    return '<p>Content not found.</p>';
  }
}

export async function loadBlogContent(contentId: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${contentId}.html`);
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error loading blog content for ${contentId}:`, error);
    return '<p>Content not found.</p>';
  }
}
