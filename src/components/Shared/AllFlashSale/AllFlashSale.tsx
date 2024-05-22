"use client";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

type FlashSaleProps = {
  products: TProduct[];
};

const AllFlashSale = ({ products }: FlashSaleProps) => {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mt-10">
      <h1 className="text-3xl mb-3">Our Collection Of Products</h1>
      {products.length > 12 ? (
        <p className="font-bold mb-1">{`Showing 1-${Math.min(
          visibleCount,
          products.length
        )} of ${products.length}`}</p>
      ) : (
        <p className="font-bold">{`Showing ${products.length} products`}</p>
      )}
      <p>
        Do not miss out on our special offers and discounts. Enjoy great savings
        on your favorite products with our competitive pricing and exclusive
        deals. Each product listing includes both the original price and the
        offer price, ensuring you get the best value for your money.
      </p>
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {products?.slice(0, visibleCount).map((item: TProduct) => (
            <Card
              className="py-1 shadow-md border rounded-md product-card"
              key={item._id}
            >
              <CardBody className="overflow-visible py-2">
                <div className="product-image-wrapper">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl product-image"
                    src={item.image1}
                    width={370}
                    height={270}
                  />
                </div>
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{item.title}</p>
                <small className="text-default-500">{item.brand}</small>
                <div className="w-full flex justify-between">
                  {item.offerPrice && (
                    <h4 className="font-bold text-large">${item.offerPrice}</h4>
                  )}
                  <p className={`${item.offerPrice ? 'line-through' : 'none'}`}>
                    ${item.price}
                  </p>
                </div>
              </CardHeader>
              <Link href={`/laptops/${item.productId}`}>
                <div className="px-4 mt-5 mb-5">
                  <Button type="default" className="w-full">
                    Detail
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
        {products.length > 12 ? (
          <p className="mt-5 mb-5 text-center">{`Showing 1-${Math.min(
            visibleCount,
            products.length
          )} of ${products.length}`}</p>
        ) : (
          <p className="mt-5 mb-5 text-center">{`Showing ${products.length} products`}</p>
        )}
        <Divider orientation="horizontal" />
        {products.length > visibleCount && (
          <div className="flex justify-center mt-5">
            <Button color="primary" onClick={loadMoreProducts}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFlashSale;
