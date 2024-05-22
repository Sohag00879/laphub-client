import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

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
  flashSale:string;
};

export const generateStaticParams = async () => {
  const res = await fetch('https://labhub-server.vercel.app/api/v1/products');
  const products = await res.json();
return products.data?.slice(0,10).map((product:TProduct)=>({
  productId :product.productId,
}));
}

const ProductDetails = async ({ params }:{params:any}) => {
  const { productId } = params;
  const res = await fetch(`https://labhub-server.vercel.app/api/v1/products/${productId}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  const rating = parseInt(data?.data?.ratings, 10);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-10 container mx-auto px-6'>
    <div className='flex gap-5'>
      <div className='all-image space-y-5'>
        <Image src={data?.data?.image1} width={150} height={150} alt='all-image' />
        <Image src={data?.data?.image2} width={150} height={150} alt='all-image' />
        <Image src={data?.data?.image3} width={150} height={150} alt='all-image' />
      </div>
      <div className='main image'>
        <Image src={data?.data?.image1} width={500} height={700} alt='all-image' />
      </div>
    </div>
    <div className='content mt-5 w-[]50%'>
      <h1 className='text-2xl'>{data?.data?.title}</h1>
      <div>
        <div className="flex h-5 items-center space-x-4 text-small mt-2 mb-5">
          <div className='font-bold'>
            ${
              data.data.offerPrice?`${data.data.offerPrice}`:`${data.data.price}`
            }
            </div>
          <Divider orientation="vertical" />
          <div className="flex items-center">
            {Array.from({ length: rating }, (_, index) => (
              <AiFillStar key={index} style={{ color: '#ffe234' }} />
            ))}
          </div>
         <div>{`(${data?.data?.ratings}reviews)`}</div>
        </div>
        <Divider orientation='horizontal'/>
        <div className='mt-5'>{data?.data?.description}</div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;