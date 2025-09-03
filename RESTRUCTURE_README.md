# Portfolio Codebase Restructure

## Overview
The codebase has been restructured to follow better standards and separate concerns properly. HTML content is no longer embedded as strings in data files.

## New Structure

### Data Organization
```
src/
├── data/                    # Structured data files
│   ├── index.ts            # Central export point
│   ├── projects.ts         # Project metadata
│   ├── blog-posts.ts       # Blog post metadata
│   ├── skills.ts           # Skills and tools data
│   └── experiences.ts      # Work experience data
├── content/                # HTML content files
│   ├── projects/           # Project case study content
│   │   ├── skillfort-lms.html
│   │   ├── muslim-finance-website.html
│   │   ├── yapish-podcast-app.html
│   │   ├── telecom-one-page-website.html
│   │   └── spotify-redesign-concept.html
│   └── blog/               # Blog post content
│       ├── the-art-of-user-centric-design.html
│       ├── design-trends-for-2024.html
│       └── the-power-of-prototyping.html
├── lib/
│   ├── content-loader.ts   # Utility to load HTML content
│   └── types.ts            # Updated type definitions
└── components/
    └── content-renderer.tsx # Component for rendering HTML content
```

## Key Changes

### 1. Separated Data from Content
- **Before**: HTML content was embedded as strings in `data.ts`
- **After**: Content references point to separate HTML files

### 2. Modular Data Structure
- **Before**: Single large `data.ts` file with mixed content types
- **After**: Separate files for each data type with a central index

### 3. Content Loading System
- New `content-loader.ts` utility loads HTML content at build time
- `ContentRenderer` component safely renders HTML content
- Server-side rendering for better performance

### 4. Type Safety
- Updated types to reflect new structure
- Content fields now reference file IDs instead of raw HTML

## Usage

### Adding New Projects
1. Add project metadata to `src/data/projects.ts`
2. Create HTML content file in `src/content/projects/`
3. Reference the content file ID in the `longDescription` field

### Adding New Blog Posts
1. Add blog metadata to `src/data/blog-posts.ts`
2. Create HTML content file in `src/content/blog/`
3. Reference the content file ID in the `content` field

### Importing Data
```typescript
// Import all data from central index
import { projects, blogPosts, skills, experiences } from '@/data';

// Or import specific modules
import { projects } from '@/data/projects';
import { technicalSkills } from '@/data/skills';
```

## Benefits

1. **Better Maintainability**: Content is easier to edit in separate HTML files
2. **Improved Performance**: Content is loaded server-side, reducing client bundle size
3. **Better Developer Experience**: Syntax highlighting and formatting for HTML content
4. **Scalability**: Easy to add new content types and organize large amounts of content
5. **Type Safety**: Clear separation between metadata and content

## Migration Notes

- The old `src/lib/data.ts` file now re-exports from the new structure for backward compatibility
- All existing imports will continue to work without changes
- Pages have been updated to use the new content loading system
