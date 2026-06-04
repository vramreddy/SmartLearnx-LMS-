// backend/seed.js
import mongoose from "mongoose";
import Course from "./models/courseModel.js";
import "dotenv/config";

const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/lms";

const courses = [
  {
    name: "Java Full Stack Development",
    teacher: "Michael Chen",
    image: "/uploads/HC3.png",
    pricingType: "paid",
    price: {original: 35000, sale: 30000 },
    overview: "Comprehensive Java Full Stack development with Spring Boot, React, and PostgreSQL. Master Java backend development, RESTful services, JPA/Hibernate, Spring Security, and modern React frontend integration.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Java Fundamentals",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Java Basics", topic: "OOP Principles", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example17" },
          { name: "Collections & Streams", topic: "Data Structures", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example18" }
        ]
      },
      {
        title: "Spring Boot Backend",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Spring Boot Setup", topic: "Dependency Injection", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example19" },
          { name: "REST Controllers", topic: "Building APIs", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example20" },
          { name: "JPA & Hibernate", topic: "Database Mapping", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example21" },
          { name: "Spring Security", topic: "Authentication & Authorization", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example22" }
        ]
      }
    ]
  },
  {
    name: "Full Stack Web Development Bootcamp",
    teacher: "Alex Martinez",
    image: "/uploads/HC4.png",
    pricingType: "paid",
    price: { original: 35000, sale: 25000 },
    overview: "Complete Full Stack Web Development Bootcamp covering HTML, CSS, JavaScript, Node.js, databases, React, and deployment. Build 10+ real-world projects and launch your career as a full stack developer.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Frontend Fundamentals",
        duration: { hours: 6, minutes: 0 },
        chapters: [
          { name: "HTML5 & Semantic Web", topic: "Modern HTML", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example37" },
          { name: "CSS3 & Layouts", topic: "Flexbox & Grid", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example38" },
          { name: "JavaScript ES6+", topic: "Modern JavaScript", duration: { hours: 2, minutes: 30 }, videoUrl: "https://youtu.be/example39" }
        ]
      },
      {
        title: "Backend Development",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Node.js Fundamentals", topic: "Server-side JS", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example40" },
          { name: "Express.js", topic: "Web Framework", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example41" },
          { name: "Database Design", topic: "SQL & NoSQL", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example42" }
        ]
      }
    ]
  },
  {
    name: "Python Programming Complete Course",
    teacher: "Jessica Williams",
    image: "/uploads/HC5.png",
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Learn Python from beginner to advanced level. Master Python syntax, data structures, OOP, file handling, web scraping, data analysis, and automation. Perfect for beginners and experienced programmers.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Python Basics",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Getting Started", topic: "Setup & Syntax", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example43" },
          { name: "Data Types", topic: "Variables & Operations", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example44" },
          { name: "Control Flow", topic: "Loops & Conditions", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example45" }
        ]
      },
      {
        title: "Advanced Python",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "OOP in Python", topic: "Classes & Objects", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example46" },
          { name: "File Handling", topic: "Reading & Writing", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example47" },
          { name: "Modules & Packages", topic: "Code Organization", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example48" }
        ]
      }
    ]
  },
  {
    name: "React Native Mobile Development",
    teacher: "David Park",
    image: "/uploads/HC6.png",
    pricingType: "paid",
    price: { original: 179, sale: 89 },
    overview: "Build native mobile apps for iOS and Android using React Native. Learn mobile UI patterns, navigation, state management, API integration, and app store deployment. Create professional mobile applications.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "React Native Setup",
        duration: { hours: 2, minutes: 0 },
        chapters: [
          { name: "Environment Setup", topic: "Tools & Emulators", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example49" },
          { name: "First App", topic: "Hello World", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example50" }
        ]
      },
      {
        title: "Mobile UI Development",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "Components", topic: "Views & Styling", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example51" },
          { name: "Navigation", topic: "Screens & Routing", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example52" },
          { name: "State Management", topic: "Redux & Context", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example53" }
        ]
      }
    ]
  },
  {
    name: "Artificial Intelligence Fundamentals",
    teacher: "Dr. Emily Watson",
    image: "/uploads/HC7.png",
    pricingType: "paid",
    price: { original: 299, sale: 149 },
    overview: "Deep dive into Artificial Intelligence covering machine learning, neural networks, deep learning, and AI applications. Learn Python, TensorFlow, PyTorch, and build real-world AI projects including computer vision and NLP.",
    courseType: "regular",
    category: "AI/ML",
    lectures: [
      {
        title: "AI Introduction",
        duration: { hours: 2, minutes: 0 },
        chapters: [
          { name: "What is AI?", topic: "History & Applications", duration: { hours: 0, minutes: 45 }, videoUrl: "https://youtu.be/example23" },
          { name: "Python for AI", topic: "NumPy & Pandas", duration: { hours: 1, minutes: 15 }, videoUrl: "https://youtu.be/example24" }
        ]
      },
      {
        title: "Machine Learning Basics",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "Supervised Learning", topic: "Classification & Regression", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example25" },
          { name: "Unsupervised Learning", topic: "Clustering & Dimensionality", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example26" }
        ]
      },
      {
        title: "Deep Learning",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Neural Networks", topic: "Perceptrons & Backpropagation", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example27" },
          { name: "CNNs", topic: "Computer Vision", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example28" },
          { name: "RNNs & LSTMs", topic: "Sequential Data", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example29" }
        ]
      }
    ]
  },
  {
    name: "Machine Learning with Python",
    teacher: "Dr. Robert Lee",
    image: "/uploads/HC7.png",
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Comprehensive Machine Learning course using Python, scikit-learn, and real-world datasets. Master regression, classification, clustering, model evaluation, feature engineering, and deployment of ML models.",
    courseType: "regular",
    category: "AI/ML",
    lectures: [
      {
        title: "ML Foundations",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Introduction to ML", topic: "Types of Learning", duration: { hours: 0, minutes: 45 }, videoUrl: "https://youtu.be/example30" },
          { name: "Data Preprocessing", topic: "Cleaning & Transformation", duration: { hours: 1, minutes: 15 }, videoUrl: "https://youtu.be/example31" },
          { name: "Feature Engineering", topic: "Creating Features", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example32" }
        ]
      },
      {
        title: "Algorithms & Models",
        duration: { hours: 4, minutes: 30 },
        chapters: [
          { name: "Linear Regression", topic: "Prediction Models", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example33" },
          { name: "Decision Trees", topic: "Classification", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example34" },
          { name: "Random Forests", topic: "Ensemble Methods", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example35" },
          { name: "Neural Networks", topic: "Deep Learning Intro", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example36" }
        ]
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing courses to avoid duplicates
    await Course.deleteMany({});
    console.log("Cleared existing courses");

    // Insert new courses
    const result = await Course.insertMany(courses);
    console.log(`Successfully added ${result.length} courses to the database`);

    // Display added courses
    result.forEach((course, index) => {
      console.log(`${index + 1}. ${course.name} - ${course.category} (${course.pricingType})`);
    });

    mongoose.connection.close();
    console.log("\nDatabase connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
