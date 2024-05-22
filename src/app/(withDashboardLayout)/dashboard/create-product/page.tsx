"use client";
import { createProduct } from "@/action/createProduct";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  image1: string;
  image2: string;
  image3: string;
  title: string;
  price: string;
  ratings: string;
  description: string;
  brand: string;
  productId: string;
  offerPrice?: string;
  flashSale?: string;
};

type TBrands = {
  _id: string;
  name: string;
  image: string;
};

const CreateProduct = () => {
  const router = useRouter();
  const [brands, setBrands] = useState<TBrands[]>([]);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await createProduct(data);
      message.success(res.message);
      router.push('/laptops')
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch("https://labhub-server.vercel.app/api/v1/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data?.data));
  }, []);
  return (
    <div className="bg-gray-100 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="shadow-md rounded-md p-6">
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create Product
          </h2>

          <form className="space-y-3 h-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image1
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("image1")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image2
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("image2")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image3
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("image3")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("title")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ProductId
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("productId")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("price")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Offer Price
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("offerPrice")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ratings
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("ratings")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <div className="mt-1">
                <select
                  {...register("brand")}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("brand")}
                >
                  {brands?.map((item) => (
                    <option key={item._id}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Do you want to add in Flas Sale Products?
              </label>
              <div className="mt-1">
                <select
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("flashSale")}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  {...register("description")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
