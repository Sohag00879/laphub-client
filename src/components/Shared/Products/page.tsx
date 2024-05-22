'use client';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Button } from "antd";

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
};

type TData = {
  success: string;
  message: string;
  data: TProduct[];
};

const ProductsComponents = ({ products }: { products: TProduct[] }) => {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const brands = searchParams.getAll('brand').map(brand => brand.charAt(0).toUpperCase() + brand.slice(1));
    const priceRanges = searchParams.getAll('price');
    const ratings = searchParams.getAll('rating');

    let filtered = products;

    if (brands.length > 0) {
      filtered = filtered.filter(product => brands.includes(product.brand));
    }

    if (priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return priceRanges.some(range => {
          const [minPrice, maxPrice] = range.split('-').map(Number);
          const productPrice = Number(product.price);
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
      });
    }

    if (ratings.length > 0) {
      const ratingNumbers = ratings.map(Number);
      filtered = filtered.filter(product => ratingNumbers.includes(Number(product.ratings)));
    }

    setFilteredProducts(filtered);
  }, [products, searchParams]);

  const loadMoreProducts = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  return (
    <div>
      <h1 className="text-3xl mb-3">Our Collection Of Products</h1>
      {
        filteredProducts.length > 12 ? (
          <p className="font-bold mb-1">{`Showing 1-${Math.min(visibleCount, filteredProducts.length)} of ${filteredProducts.length}`}</p>
        ) : (
          <p>{`Showing ${filteredProducts.length} products`}</p>
        )
      }
      <p>Do not miss out on our special offers and discounts. Enjoy great savings on your favorite products with our competitive pricing and exclusive deals. Each product listing includes both the original price and the offer price, ensuring you get the best value for your money</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {filteredProducts.slice(0, visibleCount).map((item) => (
          <Card className="py-1 shadow-md border rounded-md product-card" key={item._id}>
            <CardBody className="overflow-visible py-2 product-card-body">
              <Image
                alt="Card background"
                className="object-cover rounded-xl product-image"
                src={item.image1}
                width={370}
                height={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{item.title}</p>
              <small className="text-default-500">{item.brand}</small>
              <div className="w-full flex justify-between">
                {item.offerPrice && (
                  <h4 className="font-bold text-large">${item.offerPrice}</h4>
                )}
                <p className={`${item.offerPrice ? 'line-through' : 'none'}`}>${item.price}</p>
              </div>
            </CardHeader>
            <Link href={`/laptops/${item.productId}`}>
              <div className="px-4 mt-5">
                <Button type="default" className="w-full">Detail</Button>
              </div>
            </Link>
          </Card>
        ))}
      </div>
      {
        filteredProducts.length > 12 ? (
          <p className="mt-5 mb-5 text-center">{`Showing 1-${Math.min(visibleCount, filteredProducts.length)} of ${filteredProducts.length}`}</p>
        ) : (
          <p className="mt-5 mb-5 text-center">{`Showing ${filteredProducts.length} products`}</p>
        )
      }
      <Divider orientation="horizontal" />
      {filteredProducts.length > visibleCount && (
        <div className="flex justify-center mt-5">
          <Button color="primary" onClick={loadMoreProducts}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsComponents;
