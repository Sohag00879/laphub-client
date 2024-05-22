"use server";
type TProduct = {
    image1:string;
    image2:string;
    image3:string;
    title:string;
    price:string;
    ratings:string;
    brand:string;
    description:string;
}
export const createProduct = async (data:TProduct) => {
    const res = await fetch("https://labhub-server.vercel.app/api/v1/create-product", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
        cache:'no-store'
    });
    const productInfo = await res.json();
    return productInfo;
}
