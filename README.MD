#Get YouTube Subscribers - Capstone Project 🎥  
A Node.js-based backend application designed to analyze and manage YouTube subscriber data. This capstone project demonstrates practical backend development with a focus on RESTful APIs, database integration, and efficient application   design.  

🚀 Features  
YouTube Subscriber Analytics:  
Fetch subscriber data for a YouTube channel.  
Analyze growth trends and statistics. 

API Endpoints:  
Comprehensive endpoints for data retrieval and management.  

Scalable Backend:    
Built using Node.js and Express.js for fast and reliable server-side processing.  

Database Integration:  
MongoDB for efficient and scalable data storage.  

Error Handling:  
Robust error-handling mechanisms for seamless operation.  

🛠️ Technologies Used  
Backend: Node.js, Express.js  
Database: MongoDB (via Mongoose)  
Environment Management: dotenv  
Version Control: Git & GitHub  
Hosting: Render  


📁 Project Structure  
get-you-tube-subscribers-capstone-project/  
├── src/ │  
├── index.js # Entry point of the application │  
├── routes/ # API routes │  
├── controllers/ # Controller logic │  
├── models/ # Database models (Mongoose schemas) │  
├── utils/ # Utility functions │  
└── config/ # Configuration files  
├── .env # Environment variables  
├── package.json # Dependencies and scripts  
├── README.md # Project documentation  
  

⚙️ Installation and Setup  
Follow these steps to set up the project locally:  
Clone the Repository:  
git clone https://github.com/NileshPatil-18/get-you-tube-subscribers-capstone-project.git  
cd get-you-tube-subscribers-capstone-project  

Install Dependencies:  
npm install  

Set Up Environment Variables:  
Create a .env file in the root directory.  

Add the following variables:  
makefile  
MONGO_URI=your_mongodb_connection_string  
PORT=3000  
YOUTUBE_API_KEY=your_youtube_api_key  


Run the Application:  
npm start  

Access the Application:  
Open your browser and visit: http://localhost:3000.  

📖 API Documentation  
Base URL: /api/v1  

Endpoints:  
GET /subscribers  
Fetch the list of all YouTube subscribers.

POST /subscribers  
Add a new subscriber.  

Body:  
json  
{  
"name": "John Doe",  
"email": "johndoe@example.com",  
"channel": "John's Tech Channel"  
}    

PUT /subscribers/:id  
--Update subscriber details.  
DELETE /subscribers/:id   
--Remove a subscriber by ID.  


🧪 Testing  
Run Tests:  
npm test  

Test Framework:  
Ensure Mocha and Chai are set up for unit and integration tests.  

🖥️ Deployment  
Deployed on Render  

🌟 Contributing  
Contributions are welcome!  

To contribute:  
Fork the repository.  
  
Create a new branch:    
git checkout -b feature/your-feature-name  

Commit your changes:  
git commit -m "Add your message"  

Push to your branch:  
git push origin feature/your-feature-name  

Create a Pull Request.  

📝 License  
This project is licensed under the MIT License. See the LICENSE file for details.  

📧 Contact For questions or support, please contact:  
Name: Nilesh Patil  
Email: pnilesh6768@gmail.com  
GitHub: NileshPatil-18  
