const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Load posts from JSON file
const getPosts = () => {
    try {
        const data = fs.readFileSync('posts.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Save posts to JSON file
const savePosts = (posts) => {
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
};

// Home route - Show all posts
app.get('/posts', (req, res) => {
    const posts = getPosts();
    res.render('home', { posts });
});

// Single post route
app.get('/post', (req, res) => {
    const postId = req.query.id;
    const posts = getPosts();
    const post = posts.find(p => p.id == postId);

    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Add post form
app.get('/add-post', (req, res) => {
    res.render('addPost');
});

// Handle new post submission
app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    const posts = getPosts();

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost);
    savePosts(posts);

    res.redirect('/posts');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
