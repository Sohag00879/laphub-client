Running the Application Locally

To run this Next.js application on your local machine, follow these steps:


Prerequisites

Ensure you have the following installed on your machine:


Node.js (v12.x or later)

npm (v6.x or later) or yarn (v1.x or later)

Steps

1.Clone the Repository

Clone the repository to your local machine using the following command:

git clone https://github.com/your-username/labhub-client.git

2.Navigate to the Project Directory

Change into the project directory:
cd your-laphub-client

3.Install Dependencies
npm install
or
yarn install

4.Create a .env.local File (if applicable)

If your project requires environment variables, create a .env.local file in the root of the project and add your environment variables there. Example:
API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

5.Run the Development Server
npm run dev
or
yarn dev

6.Open the Application in Your Browser

Once the server is running, open your browser and go to:
http://localhost:3000
ou should see your Next.js application running locally.

Additional Scripts
Build the Application: Compile the application for production.
npm run build
or
yarn build

Start the Production Server: Run the application in production mode (requires a build).
npm start
yarn start




Laphub

Welcome to Laphub, an e-commerce platform where you can explore and purchase laptops from various brands. This project showcases a range of functionalities designed to enhance the shopping experience.

Features

1. Product Listing

 On the product listing page, users can:
 
View Product Details:Each product card displays the title, brand name, price, and a brief description.

Clicking on a product card navigates the user to the product detail page for more information.

Filter Products:
Users can filter products by brand name, price range, and number of ratings to find exactly what they are looking for.



2. Product Detail Page
3. 

 When a user clicks on a product, they are taken to the product detail page, which includes:
 
 Product Title: The name of the laptop.
 
 Brand Name: The brand of the laptop.
 
 Price: The cost of the laptop.
 
 Description: A detailed description of the laptop's features and specifications
 
 Ratings and Reviews: Users can view ratings and reviews given by other customers.
 

3. Flash Products
   
Users can explore different brands available on the platform:

Top Brands: A curated list of the most popular and highly-rated brands.

All Brands: A comprehensive list of all brands available on Laphub.


5. Popular Products
   
Users can discover the most popular products based on user ratings:

5-Star Rated Products: This section showcases laptops that have received 5-star ratings from users.


