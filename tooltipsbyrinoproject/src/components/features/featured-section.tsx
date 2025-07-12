'use client'

import { useState } from 'react'
import { Search, Filter, Grid, List, SortAsc } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ResourceCard } from '@/components/features/resource-card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Mock data for featured resources
const featuredResources = [
  {
    id: '1',
    title: 'ShadCN UI',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS. Copy and paste into your apps.',
    url: 'https://ui.shadcn.com',
    category: { name: 'Design', slug: 'design', color: '#8b5cf6' },
    tags: [
      { name: 'Popular', slug: 'popular' },
      { name: 'Free', slug: 'free' },
      { name: 'React', slug: 'react' }
    ],
    likesCount: 1289,
    isLiked: false
  },
  {
    id: '2',
    title: 'Cursor',
    description: 'The AI-first code editor. Build software faster in an editor designed for pair-programming with AI.',
    url: 'https://cursor.sh',
    category: { name: 'Development', slug: 'development', color: '#f59e0b' },
    tags: [
      { name: 'Popular', slug: 'popular' },
      { name: 'Paid', slug: 'paid' },
      { name: 'AI', slug: 'ai' }
    ],
    likesCount: 892,
    isLiked: true
  },
  {
    id: '3',
    title: 'Framer Motion',
    description: 'A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool.',
    url: 'https://framer.com/motion',
    category: { name: 'Development', slug: 'development', color: '#f59e0b' },
    tags: [
      { name: 'Free', slug: 'free' },
      { name: 'Animation', slug: 'animation' },
      { name: 'React', slug: 'react' }
    ],
    likesCount: 654,
    isLiked: false
  },
  {
    id: '4',
    title: 'Figma',
    description: 'The collaborative interface design tool. Build better products as a team with real-time collaboration.',
    url: 'https://figma.com',
    category: { name: 'Design', slug: 'design', color: '#8b5cf6' },
    tags: [
      { name: 'Popular', slug: 'popular' },
      { name: 'Freemium', slug: 'freemium' },
      { name: 'Collaboration', slug: 'collaboration' }
    ],
    likesCount: 2156,
    isLiked: true
  },
  {
    id: '5',
    title: 'Notion',
    description: 'One workspace. Every team. We are more than a doc or a table. Customize Notion to work the way you do.',
    url: 'https://notion.so',
    category: { name: 'Productivity', slug: 'productivity', color: '#10b981' },
    tags: [
      { name: 'Popular', slug: 'popular' },
      { name: 'Freemium', slug: 'freemium' },
      { name: 'Notes', slug: 'notes' }
    ],
    likesCount: 1834,
    isLiked: false
  },
  {
    id: '6',
    title: 'Elementor',
    description: 'The leading website builder platform for WordPress. Create high-end, pixel perfect websites at record speeds.',
    url: 'https://elementor.com',
    category: { name: 'WordPress', slug: 'wordpress', color: '#3b82f6' },
    tags: [
      { name: 'Popular', slug: 'popular' },
      { name: 'Freemium', slug: 'freemium' },
      { name: 'Page Builder', slug: 'page-builder' }
    ],
    likesCount: 743,
    isLiked: false
  }
]

export function FeaturedSection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex-1 space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search featured resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>All Categories</DropdownMenuItem>
            <DropdownMenuItem>WordPress</DropdownMenuItem>
            <DropdownMenuItem>Design</DropdownMenuItem>
            <DropdownMenuItem>Development</DropdownMenuItem>
            <DropdownMenuItem>Productivity</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Most Popular</DropdownMenuItem>
            <DropdownMenuItem>Recently Added</DropdownMenuItem>
            <DropdownMenuItem>Most Liked</DropdownMenuItem>
            <DropdownMenuItem>Alphabetical</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center space-x-1 border rounded-md p-1">
          <Button
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="h-8 w-8 p-0"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Resource Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {featuredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            {...resource}
            variant={viewMode === 'grid' ? 'default' : 'compact'}
          />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <Button variant="outline">
          Load More Resources
        </Button>
      </div>
    </div>
  )
}
