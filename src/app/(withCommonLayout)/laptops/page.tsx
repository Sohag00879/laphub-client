import AllLaptops from "@/components/Shared/AllLaptops/AllLaptops";

const Laptops = async () => {
  const response = await fetch(
    "https://labhub-server.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  return <AllLaptops products={data.data} />;
};

export default Laptops;
