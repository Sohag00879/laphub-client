import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

type TItem = {
  _id: string;
  name: string;
  image: string;
};

const BrandSection = async () => {
  const res = await fetch("https://labhub-server.vercel.app/api/v1/brands", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <section className="bg-white mt-12 container">
      <h1 className="text-center text-3xl font-bold">Top Brands</h1>
      <p className="text-center mt-5 mb-5">
        we pride ourselves on offering a curated selection of laptops from the
        industrys leading brands. Whether you are looking for performance,
        reliability, or cutting-edge technology, our top brands have something
        to offer for everyone.
      </p>
      <div className="py-4 px-2 mx-auto max-w-screen-xl container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {data?.data?.slice(0, 6).map((item: TItem, i: number) => (
            <div
              key={i}
              className={`col-span-2 sm:col-span-1 ${
                i % 5 === 2 ? "md:col-span-2" : "md:col-span-1"
              } bg-gray-50 h-auto md:h-full flex flex-col`}
            >
              <Link
                href={`/laptops?brand=${item.name}`}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  {item.name}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/brands">
            <Button  className="bg-black text-white">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
