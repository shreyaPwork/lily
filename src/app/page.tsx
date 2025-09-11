import { CustomerLayout } from '@/components/layouts/customer-layout'
import { Hero } from '@/components/sections/hero'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { Categories } from '@/components/sections/categories'

export default function HomePage() {
  return (
    <CustomerLayout>
      <Hero />
      <FeaturedProducts />
      <Categories />
    </CustomerLayout>
  )
}
