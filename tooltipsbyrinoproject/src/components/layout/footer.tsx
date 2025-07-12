import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TR</span>
              </div>
              <span className="font-bold text-lg">Tool Tips by Rino</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A centralized platform for discovering tools, software, code snippets, and libraries across web development, design, and various industries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <div className="space-y-2 text-sm">
              <Link href="/browse" className="block text-muted-foreground hover:text-foreground transition-colors">
                Browse All Tools
              </Link>
              <Link href="/categories" className="block text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/tags" className="block text-muted-foreground hover:text-foreground transition-colors">
                Popular Tags
              </Link>
              <Link href="/recent" className="block text-muted-foreground hover:text-foreground transition-colors">
                Recently Added
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2 text-sm">
              <Link href="/categories/wordpress" className="block text-muted-foreground hover:text-foreground transition-colors">
                WordPress
              </Link>
              <Link href="/categories/design" className="block text-muted-foreground hover:text-foreground transition-colors">
                Design
              </Link>
              <Link href="/categories/productivity" className="block text-muted-foreground hover:text-foreground transition-colors">
                Productivity
              </Link>
              <Link href="/categories" className="block text-muted-foreground hover:text-foreground transition-colors">
                View All →
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/submit" className="block text-muted-foreground hover:text-foreground transition-colors">
                Submit a Tool
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Tool Tips by Rino. Made by{' '}
            <span className="font-medium">Living with Pixles</span> &{' '}
            <span className="font-medium">Keyframe Kreations</span>.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
