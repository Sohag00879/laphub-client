"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Carousel } from "antd";
import Image from "next/image";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ProductCarousel = () => {
  return (
<Carousel slidesToShow={3} autoplay className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mt-10 mb-5 text-white">
     <div>
     <Card className="py-1 shadow-md border rounded-md me-5">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src='https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              width={370}
              height={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black mb-12 mt-5">
            <p className="text-tiny uppercase font-bold">14 inch Ultra-Slim Laptop</p>
            <small className="text-default-500">Dell</small>
            <div className="w-full flex justify-between">
              <h4 className="text-large">$ 899</h4>
            </div>
          </CardHeader>
        </Card>
     </div>
     <div>
     <Card className="py-1 shadow-md border rounded-md me-5">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src='https://static.vecteezy.com/system/resources/previews/025/751/252/non_2x/ai-generative-realistic-laptop-neon-effect-ai-generated-image-free-photo.jpg'
              width={370}
              height={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black mb-12 mt-5">
            <p className="text-tiny uppercase font-bold">15.6 inch Gaming Powerhouse</p>
            <small className="text-default-500">Asus</small>
            <div className="w-full flex justify-between">
              <h4 className="text-large">$ 1,499</h4>
            </div>
          </CardHeader>
        </Card>
     </div>
     <div>
     <Card className="py-1 shadow-md border rounded-md me-5">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src='https://images.moneycontrol.com/static-mcnews/2020/08/Lenovo-Ideapad-C340.jpg'
              width={370}
              height={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black mb-12 mt-5">
            <p className="text-tiny uppercase font-bold">13 inch Touchscreen Laptop</p>
            <small className="text-default-500">Hp</small>
            <div className="w-full flex justify-between">
              <h4 className="text-large">$ 1,299</h4>
            </div>
          </CardHeader>
        </Card>
     </div>
     <div>
     <Card className="py-1 shadow-md border rounded-md me-5">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src='https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg'
              width={370}
              height={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black mb-12 mt-5">
            <p className="text-tiny uppercase font-bold">15.6 inch Business Laptop</p>
            <small className="text-default-500">Lenovo</small>
            <div className="w-full flex justify-between">
              <h4 className="text-large">$ 1,199</h4>
            </div>
          </CardHeader>
        </Card>
     </div>
    </Carousel>
  );
};
export default ProductCarousel;
