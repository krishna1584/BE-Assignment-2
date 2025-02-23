# Blog Management System (Express.js + EJS)

A **lightweight blog application** built using **Express.js** and **EJS**, allowing users to **view, add, and read blog posts** stored in a JSON file.

## 🚀 Features
- 📰 View all blog posts (`GET /posts`)
- 📄 View a single post (`GET /post?id=1`)
- ✍️ Add a new blog post (`POST /add-post`)
- 📂 Posts stored in `posts.json`
- 📡 Middleware for logging requests
- 🎨 Modern UI with responsive design (inspired by Figma reference)
- ⚡ Uses `fs` module for reading/writing posts

## 📁 Folder Structure
```
blog-app/
│── views/              # EJS Templates
│   ├── home.ejs        # List all blog posts
│   ├── post.ejs        # View a single post
│   ├── addPost.ejs     # Form to add new post
│
│── public/             # Static files (CSS, JS, images)
│
│── posts.json          # To store blog posts
│
│── app.js              # Main server file
│── package.json        # Project dependencies
```

## 🛠️ Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Server**
```sh
node app.js
```
The server will run on **[http://localhost:3000](http://localhost:3000)**.

## 🖥️ Usage
### 🌍 Viewing All Posts
Visit **[http://localhost:3000/posts](http://localhost:3000/posts)** to see all posts.

### 📄 Viewing a Single Post
Click on a post title or visit **[http://localhost:3000/post?id=1](http://localhost:3000/post?id=1)** to view a specific post.

### ✍️ Adding a New Post
Navigate to **[http://localhost:3000/add-post](http://localhost:3000/add-post)** to add a new post.

## 🤝 Contributing
Contributions are welcome! Follow these steps to contribute:
1. **Fork the repository**
2. **Create a new branch**:
   ```sh
   git checkout -b feature-name
   ```
3. **Make changes & commit**:
   ```sh
   git commit -m "Added a feature"
   ```
4. **Push to GitHub**:
   ```sh
   git push origin feature-name
   ```
5. **Submit a Pull Request**

## ⚡ Technologies Used
- **Node.js & Express.js** - Backend framework
- **EJS** - Templating engine
- **CSS** - Modern UI styling
- **fs module** - File system operations
- **Git & GitHub** - Version control

Made with ❤️ by Krishna

