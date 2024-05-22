import CountDown from "@/components/Countdown/Countdown";
import { Button } from "antd";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

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

const FlashSaleProducts = async () => {
  const res = await fetch("https://labhub-server.vercel.app/api/v1/flash-sale", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl container mt-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Flash Sale</h1>
          <p className="w-[80%] mt-5">
            Get ready for the biggest savings event of the year at LapHub! Our Flash Sale is here, and it is your chance to grab the best laptops at unbeatable prices.
          </p>
        </div>
        <div className="right flex justify-between">
          <div>
            <div className="flex gap-3">
              <span>Ending in</span>
              <CountDown />
            </div>
          </div>
          <div>
            <Link href="/flash-sale">
              <Button type="default" className="bg-black text-white">View All</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {data?.data?.slice(0, 6).map((item: TProduct) => (
          <Card className="py-1 shadow-md border rounded-md product-card" key={item._id}>
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
    </div>
  );
};

export default FlashSaleProducts;
