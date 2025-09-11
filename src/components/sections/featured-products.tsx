import Link from 'next/link'
import { Star, ShoppingCart } from 'lucide-react'

export function FeaturedProducts() {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/300",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 89,
      image: "/api/placeholder/300/300",
      badge: "New"
    },
    {
      id: 3,
      name: "Eco-Friendly Water Bottle",
      price: 29,
      originalPrice: 39,
      rating: 4.9,
      reviews: 256,
      image: "/api/placeholder/300/300",
      badge: "Eco"
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      price: 49,
      originalPrice: 69,
      rating: 4.5,
      reviews: 67,
      image: "/api/placeholder/300/300",
      badge: "Sale"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that our customers love most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-primary/60" />
                  </div>
                  <p className="text-sm text-muted-foreground">Product Image</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-3 border border-input bg-background rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
