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


