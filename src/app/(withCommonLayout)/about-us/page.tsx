import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl container">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <Image src="https://i.imgur.com/WbQnbas.png" alt='about-us' width={250} height={250}/>
        </div>
        <div>
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="mt-3">At LabHub, our mission is to empower our customers with the best technology solutions. We believe that a great laptop can change the way you work, play, and connect with the world. That is why we are dedicated to offering a wide range of laptops from top brands like HP, Dell, Lenovo, Apple, ASUS, and more. Our goal is to provide you with the tools you need to succeed in your personal and professional endeavors.</p>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-teal-300">Our Company</span>
            </h2>
            <p className="text-gray-700">
            Welcome to LabHub, your premier destination for top-quality laptops from the world leading brands. We are passionate about technology and committed to providing our customers with the best possible shopping experience. Whether you are a student, professional, gamer, or tech enthusiast, we have the perfect laptop to meet your needs.
            </p>
        </div>
        <div className="mt-5">
        <h1 className="text-3xl font-bold">Why Choose Us?</h1>
        <ul className="mt-3">
            <li className="mt-3"><span className="font-bold">Extensive Selection:</span>We offer a diverse range of laptops from all major brands, ensuring that you can find the perfect device for your needs and budget.</li>
            <li className="mt-3"><span className="font-bold">Competitive Prices:</span>We strive to offer the best prices on the market, so you can get the laptop you want without breaking the bank.</li>
            <li className="mt-3"><span className="font-bold">Expert Advice:</span>WOur knowledgeable team is here to help you make an informed decision. Whether you need help choosing the right laptop or have questions about a specific model, we are here to assist you.</li>
            <li className="mt-3"><span className="font-bold">Secure Shopping:</span>We use the latest security measures to protect your personal information and ensure a safe shopping experience.</li>
        </ul>
        </div>
    </div>
</div>
  )
}

export default AboutUs