type TBrand = {
    name:string;
    image:string;
}
export const createBrand = async (data:TBrand) =>{

    const res = await fetch('https://labhub-server.vercel.app/api/v1/create-brand',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
        cache:'no-store'

    })
    const brandInfo = await res.json();
    return brandInfo;
}