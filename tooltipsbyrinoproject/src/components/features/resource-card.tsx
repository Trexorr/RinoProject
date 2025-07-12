'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Heart, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface ResourceCardProps {
  id: string
  title: string
  description: string
  url: string
  category: {
    name: string
    slug: string
    color?: string
  }
  tags: Array<{
    name: string
    slug: string
  }>
  likesCount: number
  isLiked?: boolean
  variant?: 'default' | 'compact' | 'featured'
}

export function ResourceCard({
  id,
  title,
  description,
  url,
  category,
  tags,
  likesCount,
  isLiked = false,
  variant = 'default'
}: ResourceCardProps) {
  const [liked, setLiked] = useState(isLiked)
  const [currentLikes, setCurrentLikes] = useState(likesCount)

  const handleLike = () => {
    // Optimistic update
    setLiked(!liked)
    setCurrentLikes(prev => liked ? prev - 1 : prev + 1)
    
    // TODO: Implement actual like/unlike API call
    console.log('Like toggled for resource:', id)
  }

  const cardVariants = {
    default: "group cursor-pointer",
    compact: "group cursor-pointer",
    featured: "group cursor-pointer border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
  }

  const cardContent = (
    <Card className={cardVariants[variant]}>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-1">
            <div className="flex items-center space-x-2">
              <Badge 
                variant="secondary" 
                className="text-xs"
                style={{ backgroundColor: category.color + '20', color: category.color }}
              >
                {category.name}
              </Badge>
            </div>
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleLike()
            }}
            className="shrink-0 ml-2"
          >
            <Heart 
              className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
            />
            <span className="ml-1 text-sm">{currentLikes}</span>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag.slug} variant="outline" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {tag.name}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/resource/${id}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View Details
          </Link>
          <Button
            variant="outline"
            size="sm"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Visit
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link href={`/resource/${id}`} className="block h-full">
        {cardContent}
      </Link>
    </motion.div>
  )
}
