'use client'

import { useState } from 'react'
import {
  Calendar,
  Home,
  Search,
  Settings,
  Tag,
  Heart,
  Plus,
  Star,
  Folder,
  Filter,
  TrendingUp,
  BookOpen,
  Code,
  Palette,
  Briefcase,
  Users,
  Clock
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GlobalSearch } from "@/components/features/global-search"

const categories = [
  {
    title: "WordPress",
    icon: BookOpen,
    count: 234,
    color: "bg-blue-500"
  },
  {
    title: "Design",
    icon: Palette,
    count: 189,
    color: "bg-purple-500"
  },
  {
    title: "Productivity",
    icon: Briefcase,
    count: 156,
    color: "bg-green-500"
  },
  {
    title: "Development",
    icon: Code,
    count: 298,
    color: "bg-orange-500"
  }
]

const tags = [
  { name: "Popular", count: 145, color: "bg-red-500" },
  { name: "Free", count: 89, color: "bg-green-500" },
  { name: "Freemium", count: 67, color: "bg-blue-500" },
  { name: "Paid", count: 34, color: "bg-purple-500" },
]

export function AppSidebar() {
  return (
    <Sidebar className="w-64">
      <SidebarHeader className="border-b p-4 space-y-3">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TR</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Tool Tips</h1>
            <p className="text-xs text-muted-foreground">by Rino</p>
          </div>
        </div>
        <GlobalSearch />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Search className="h-4 w-4" />
                  <span>Browse All</span>
                  <Badge variant="secondary" className="ml-auto">
                    1.2k
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <TrendingUp className="h-4 w-4" />
                  <span>Trending</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Clock className="h-4 w-4" />
                  <span>Recent</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Heart className="h-4 w-4" />
                  <span>Favorites</span>
                  <Badge variant="secondary" className="ml-auto">
                    23
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton>
                    <div className={`h-3 w-3 rounded-full ${category.color}`} />
                    <span>{category.title}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {category.count}
                    </Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tags.map((tag) => (
                <SidebarMenuItem key={tag.name}>
                  <SidebarMenuButton>
                    <Tag className="h-4 w-4" />
                    <span>{tag.name}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {tag.count}
                    </Badge>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <Button className="w-full" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Submit Tool
        </Button>
        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
          <span>© 2024 Tool Tips</span>
          <Settings className="h-4 w-4 cursor-pointer hover:text-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
