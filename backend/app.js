const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  });
})

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: '1',
      title: 'first post from server',
      content: 'this is great server content'
    },
    {
      id: '2',
      title: 'second post from server',
      content: 'another server content'
    }
  ]
  res.status(200).json(posts)
})

app.use((req, res, next) => {
  console.log(req);
  res.send('hello from express');
})


module.exports = app;
