import BrandsName from "@/components/UI/HomePage/BrandsName/BrandsName";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <BrandsName />

      <footer className="bg-black pb-5">
        <div className="container">
          <div className="grid grid-cols-2 container py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h2>
              <ul className=" font-medium text-white">
                <li className="mb-4">
                  <Link href="/popular-laptops" className=" hover:underline">
                    Trending Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/brands" className="hover:underline">
                    Brands
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/customer-care" className="hover:underline">
                    Customer Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Help center
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Download
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Android
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Windows
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    MacOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Divider style={{ color: "white" }} />
        </div>
        <div className="text-white container flex justify-between mt-3 px-[4%]">
          <div>Copyright © 2024 All Rights Reserved</div>
          <div>Made With LapHub</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
