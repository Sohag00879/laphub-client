
"use client";
import { createBrand } from "@/action/createBrand";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
   name:string;
   image:string;
  }
const CreateBrands = () => {
  const router = useRouter();
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async(data) =>{
       try {
        const res = await createBrand(data)
        message.success(res.message)
        router.push('/brands')
       } catch (err) {
        console.log(err)
       }
      }
  return (
    <div className="bg-gray-100 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div className="shadow-md rounded-md p-6">
        <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create Brand
        </h2>

        <form className="space-y-3 h-full" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                required
                className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" {...register('name')}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand Image
            </label>
            <div className="mt-1">
              <input
                type="text"
                required
                className="px-2 py-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" {...register('image')}
              />
            </div>
          </div>
          <button type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 w-full">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CreateBrands