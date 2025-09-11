import Link from 'next/link'
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Camera, 
  Gamepad2,
  Home,
  Shirt
} from 'lucide-react'

export function Categories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: Smartphone,
      description: "Latest gadgets and tech",
      productCount: 156,
      href: "/categories/electronics"
    },
    {
      id: 2,
      name: "Computers",
      icon: Laptop,
      description: "Laptops, desktops & accessories",
      productCount: 89,
      href: "/categories/computers"
    },
    {
      id: 3,
      name: "Audio",
      icon: Headphones,
      description: "Headphones, speakers & more",
      productCount: 67,
      href: "/categories/audio"
    },
    {
      id: 4,
      name: "Wearables",
      icon: Watch,
      description: "Smart watches & fitness trackers",
      productCount: 45,
      href: "/categories/wearables"
    },
    {
      id: 5,
      name: "Photography",
      icon: Camera,
      description: "Cameras & photography gear",
      productCount: 78,
      href: "/categories/photography"
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      description: "Gaming consoles & accessories",
      productCount: 123,
      href: "/categories/gaming"
    },
    {
      id: 7,
      name: "Home & Living",
      icon: Home,
      description: "Home decor & appliances",
      productCount: 234,
      href: "/categories/home"
    },
    {
      id: 8,
      name: "Fashion",
      icon: Shirt,
      description: "Clothing & accessories",
      productCount: 189,
      href: "/categories/fashion"
    }
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of product categories and find exactly what you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-200 hover:border-primary/20"
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Category Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {category.productCount} products
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Categories Link */}
        <div className="text-center mt-12">
          <Link 
            href="/categories" 
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
