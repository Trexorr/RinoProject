import { AppSidebar } from '@/components/layout/app-sidebar'
import { TopNavbar } from '@/components/layout/top-navbar'
import { FeaturedSection } from '@/components/features/featured-section'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavbar />
        <main className="flex-1 p-6">
          <FeaturedSection />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
