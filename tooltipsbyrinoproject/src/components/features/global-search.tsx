'use client'

import { useState, useEffect } from 'react'
import { Search, Command } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  url: string
}

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'ShadCN UI',
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
      category: 'Design',
      url: 'https://ui.shadcn.com'
    },
    {
      id: '2',
      title: 'Framer Motion',
      description: 'A production-ready motion library for React.',
      category: 'Development',
      url: 'https://framer.com/motion'
    },
    {
      id: '3',
      title: 'Notion',
      description: 'One workspace. Every team. Customize Notion to work the way you do.',
      category: 'Productivity',
      url: 'https://notion.so'
    }
  ]

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockResults.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <>
      <Button
        variant="outline"
        className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search resources...
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Search Resources</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for tools, libraries, snippets..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>

            {results.length > 0 && (
              <div className="max-h-80 overflow-y-auto space-y-2">
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-start space-x-3 rounded-lg border p-3 hover:bg-muted/50 cursor-pointer"
                    onClick={() => {
                      window.open(result.url, '_blank')
                      setIsOpen(false)
                    }}
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-sm font-medium">{result.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {result.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {query.length > 0 && results.length === 0 && (
              <div className="text-center py-6 text-muted-foreground">
                <Search className="mx-auto h-8 w-8 mb-2 opacity-50" />
                <p>No resources found for "{query}"</p>
                <p className="text-xs mt-1">Try a different search term</p>
              </div>
            )}

            {query.length === 0 && (
              <div className="text-center py-6 text-muted-foreground">
                <Command className="mx-auto h-8 w-8 mb-2 opacity-50" />
                <p>Start typing to search resources</p>
                <p className="text-xs mt-1">Search across tools, libraries, and code snippets</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
