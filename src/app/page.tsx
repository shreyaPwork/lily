import { CustomerLayout } from '@/components/layouts/customer-layout'
import { Hero } from '@/components/sections/hero'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { Categories } from '@/components/sections/categories'
import WhyLily from "@/components/sections/why-lily";
export default function HomePage() {
  return (
    <CustomerLayout>
      <Hero />
      <FeaturedProducts />
      <WhyLily />
      <Categories />
    </CustomerLayout>
  )
}
