import AllFlashSale from "@/components/Shared/AllFlashSale/AllFlashSale";

const FlashSale =async()=> {
  const response = await fetch('https://labhub-server.vercel.app/api/v1/flash-sale', {
    cache:'no-store'
  });
  const data = await response.json();

  return <AllFlashSale products={data.data} />;
}

export default FlashSale;
