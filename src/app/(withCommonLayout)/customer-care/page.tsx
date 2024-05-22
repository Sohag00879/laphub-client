import Image from "next/image";
import Link from "next/link";

const CustomerCare = () => {
  return (
    <div className="py-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
        <div className="sm:w-6/12 order-last sm:order-first">
          <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <Link href="#">
                    <Image
                      alt="customer-care"
                      width={100}
                      height={100}
                      className="mb-3 rounded-full mx-auto h-24 w-24"
                      src="https://i.pravatar.cc/150?img=32"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      Sarah Jones
                    </Link>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    Customer Support Specialist
                  </p>
                  <p>+880130218938</p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <Link href="#">
                    <Image
                      alt="customer-care"
                      width={100}
                      height={100}
                      className="mb-3 rounded-full mx-auto h-24 w-24"
                      src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      James
                    </Link>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    Marketing Specialist
                  </p>
                  <p>+8801789367923</p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <Link href="#">
                    <Image
                      alt="customer-care"
                      width={100}
                      height={100}
                      className="mb-3 rounded-full mx-auto h-24 w-24"
                      src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      Sohag Islam
                    </Link>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    Customer Care Specialist
                  </p>
                  <p>+8801389570832</p>
                </div>
              </div>
            </li>
            <li className="bg-gray-100 p-5 py-10 text-center">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <Link href="#">
                    <Image
                      alt="customer-care"
                      width={100}
                      height={100}
                      className="mb-3 rounded-full mx-auto h-24 w-24"
                      src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                    <Link
                      href="#"
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      Zara
                    </Link>
                  </h4>
                  <p className="text-sm leading-6 text-gray-500 uppercase">
                    Executive Officer
                  </p>
                  <p>+8801984859032</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            Meet Our <span className="text-indigo-600">Customer Care</span>
          </h3>
          <p className="mt-4 text-md leading-7 text-gray-500 font-light">
            A friendly welcome message that assures customers you are there to
            help. Briefly introduce the different ways customers can get
            assistance (FAQ, email, live chat, phone).
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
