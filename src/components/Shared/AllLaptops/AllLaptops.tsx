import BrandsCheckBox from "@/components/Shared/BrandsCheckBox/BrandsCheckBox";
import PriceCheckBox from "@/components/Shared/PriceCheckBox/PriceCheckBox";
import ProductsComponents from "@/components/Shared/Products/page";
import RatingsCheckBox from "@/components/Shared/RatingsCheckBox/RatingCheckBox";

type TProduct = {
    _id: string;
    image1: string;
    image2: string;
    image3: string;
    title: string;
    productId: string;
    price: string;
    ratings: string;
    brand: string;
    description: string;
    offerPrice: string;
    flashSale: string;
  };
const AllLaptops = async ({products}:{products:TProduct[]}) => {
  const res = await fetch("https://labhub-server.vercel.app/api/v1/brands", {
    next: {
      revalidate: 30,
    },
  });

  const data = await res.json();
const brands = data?.data;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <BrandsCheckBox  brands={brands}/>
          <PriceCheckBox />
          <RatingsCheckBox />
        </div>
        <div className="col-span-1 md:col-span-3">
          <ProductsComponents products={products}/>
        </div>
      </div>
    </div>
  );
};

export default AllLaptops