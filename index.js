const express = require('express');
const app = express();
app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const port = 18080;
app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚗`);
});