import BrandSection from "@/components/UI/HomePage/BrandsSection/BrandSection"
import FlashSaleProducts from "@/components/UI/HomePage/FlashSaleProducts/FlashSaleProducts"
import HeroSection from "@/components/UI/HomePage/HeroSection"
import PopularProducts from "@/components/UI/HomePage/PopularProducts/PopularProducts"

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <FlashSaleProducts/>
    <BrandSection/>
    <PopularProducts/>
    </>
  )
}
export default HomePage