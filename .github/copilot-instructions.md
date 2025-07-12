# Project Title
- Tool Tips by Rino
## Description
- This  website is a centralized platform for discovering tools, software, code snippets, and libraries across web development, design, and various industries. 
- It targets users seeking curated, easily searchable resources with rich categorization and external links, providing a modern and efficient alternative to scattered resource discovery across multiple platforms.

## Author
- Living with Pixles
- Keyframe Kreations

## Version
- 1.0.0
- Initial release with core features for resource discovery and browsing.

---

> **Critical Instruction for LLM:**  
> At all times, you must actively reference both the **Complete-PRD.md** and **Master-Task-List.md** files found in /PRDandTasks throughout the entire project lifecycle.  
> Every planning, implementation, and code generation step must be continually validated against these documents to ensure strict alignment with requirements and objectives.
> At all stages of this project, you must consistently and repeatedly query and reference the **Context7 MCP Tool** for the most up-to-date documentation, code patterns, library usage, and implementation standards.  
> Technology libraries (Next.js, ShadCN, Radix, Tailwind, Supabase, etc.) evolve rapidly, and Context7 is the authority to ensure all guidance reflects current best practices.  
> You are required to invoke Context7 during all planning, coding, and decision-making processes throughout the entire lifecycle of this project.


You are an expert in TypeScript, Node.js, Next.js with App Router, React, ShadCN UI, Radix UI, Tailwind CSS, Framer Motion, and Supabase.

You will apply modern software architecture principles that prioritize:
- Clean, modular, and scalable codebases
- Secure-by-default patterns for backend and frontend interactions
- Reusable UI components with full accessibility support
- Optimal performance, hydration, and rendering behaviors using the latest React Server Component patterns
- Maintainable project structure aligned with evolving best practices
- Continuous use of Context-7 MCP as the authoritative reference for all implementations

## Code Style and Structure

Write concise, technical TypeScript with clear and accurate examples. Use functional and declarative programming patterns whenever possible.

Favor iteration and modularization over code duplication. Use descriptive variable names with auxiliary verbs like `isLoading`, `hasError`, or `shouldRender`.

Organize code for clarity and maintainability:

- Group files by feature or domain.
- Export components clearly, nesting subcomponents where appropriate.
- Use dedicated files for helpers, static content, and types.

> **Important:** All best practices must align with the latest internal coding standards and conventions defined in the relevant Context or Knowledge Base system for Use Context7 to fetch latest framework documentation.

## Naming Conventions

- Favor **named exports** for components and utilities.
- Use **lowercase with dashes** for directory names (e.g., `components/auth-wizard`).
- Use **PascalCase** for component file names and **camelCase** for utilities/helpers.
- Maintain consistency across all naming decisions.

## TypeScript Usage

- Use **TypeScript** exclusively.
- Prefer `interface` over `type` for object shapes.
- Avoid using `enum`; use `const` objects or `Map` structures.
- All components should be functional components with explicitly typed props.

## Next.js Conventions

- Use **Next.js App Router** exclusively.
- Follow the latest structure for layouts, templates, and route grouping.
- Prefer static generation (SSG) and ISR where possible.
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` appropriately.
- Verify all patterns against the most current standards.

## File Creation and Structure

- Maintain strict and consistent folder structure.
- Use a single `globals.css` for all styling.
- Organize `components/` by type or category.
- Separate third-party UI libraries clearly:
  - `components/shadcn-ui/`
  - `components/radix-ui/`

## Styling and Tailwind Conventions

- Use **Tailwind CSS v4+** exclusively.
- Organize styling with `@tailwind` and `@layer` directives.
- Prefer Tailwind classes directly; use `@apply` meaningfully.
- Follow mobile-first responsive design principles.

## ShadCN UI and Radix UI

- Prefer **ShadCN UI** components first.
- Use **Radix UI** only when necessary.
- Import ShadCN components using the ShadCN CLI.
- Ensure full customization via the theme system.


## Performance and Optimization

- Favor **React Server Components**.
- Minimize `useClient`, `useEffect`, and `useState`.
- Use `Suspense` and `dynamic()` where appropriate.
- Optimize images (WebP, intrinsic dimensions, lazy loading).

## Rendering Strategy

> **Important:** This rendering approach must be consistently applied throughout all pages to optimize performance, UX stability, and maintainable code architecture.

For each page, follow this rendering flow:

- The server must render as much static content as possible during the initial load. This includes layout structures, navigational elements, containers, and any content that does not depend on runtime data. These server-rendered components form the static shell of the page, providing fast initial paint and improved performance.
  
- Once the static shell is rendered, fetch any required dynamic data. This includes content or state that depends on runtime conditions, external sources, user sessions, or non-static values.
  
- While dynamic data is being retrieved, render skeleton loaders or placeholders in place of dynamic components to maintain layout stability and provide smoother visual experience.
  
- When dynamic data becomes available, replace placeholders with fully rendered client components. These client components handle dynamic content display, user interactions, state changes, and real-time updates.
  
This rendering flow must be followed consistently across all pages.

## Key Conventions

- Optimize Core Web Vitals (LCP, CLS, FID).
- Use **NUX** for URL parameter state.
- Limit client-side state; prefer SSR for data fetching.
- Separate client and server logic into distinct files.
- Seek confirmation for exceptions to mixing client/server logic.

> Always verify all conventions against the latest documentation and standards prior to implementation.
