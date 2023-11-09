const express = require('express');
const router = express.Router();
const { connect, Request } = require('mssql');
const dbConfig = require('../dbConfig');
const queries = require('../queries');

// Get all posts
router.get('/', async (req, res) => {
  try {
    console.log("GET: View all post.");
    const pool = await connect(dbConfig);
    const request = new Request(pool);
    const result = await request.query(queries.getAllPostsQuery);
    res.json(result.recordset);
  } catch (err) {
    console.error('Database connection failed:', err); 
    res.status(500).send('Database connection failed');
  }
});

// Get a specific post
router.get('/:id', async (req, res) => {
  try {
    let mPostId = req.params.id;
    console.log(`GET: View :${mPostId} post.`);

    const connection = await connect(dbConfig);

    let request = new Request(connection);
    request.input('id', req.params.id);

    let result = await request.query(queries.getPostByIdQuery);
    res.json(result.recordset);
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
});

// Create a new post
router.post('/', async (req, res) => {
  try {
    console.log('POST: Create new post.');
    const connection = await connect(dbConfig);
    let request = new Request(connection);

    request.input('reqDate', req.body.reqDate);
    request.input('reqTime', req.body.reqTime);
    request.input('reqSts',  req.body.reqSts);
    request.input('exeComp', req.body.exeComp);
    request.input('reqComp', req.body.reqComp);
    request.input('reqUserName', req.body.reqUserName);
    request.input('reqContents', req.body.reqContents);
    request.input('prcsContents', req.body.prcsContents);
    request.input('prcsMin', req.body.prcsMin);
    request.input('completeReqDate', req.body.completeReqDate);
    request.input('prcsCompleteDate', req.body.prcsCompleteDate);

    let result = await request.query(queries.createPostQuery);
    res.send(result);
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    console.log('DELETE: Delete post.');
    const connection = await connect(dbConfig);
    let request = new Request(connection);
    
    request.input('id', req.params.id);
    
    let result = await request.query(queries.deletePostQuery);
    res.send(result);
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
});

// update post
router.put('/:id', async (req, res) => {
  try {
    console.log('PUT: Update post.');
    const connection = await connect(dbConfig);
    let request = new Request(connection);

    //serial_no in url
    request.input('id', req.params.id)

    //input params (json) 
    request.input('reqDate', req.body.reqDate);
    request.input('reqTime', req.body.reqTime);
    request.input('reqSts',  req.body.reqSts);
    request.input('exeComp', req.body.exeComp);
    request.input('reqComp', req.body.reqComp);
    request.input('reqUserName', req.body.reqUserName);
    request.input('reqContents', req.body.reqContents);
    request.input('prcsContents', req.body.prcsContents);
    request.input('prcsMin', req.body.prcsMin);
    request.input('completeReqDate', req.body.completeReqDate);
    request.input('prcsCompleteDate', req.body.prcsCompleteDate);

    let result = await request.query(queries.updatePostQuery);
    res.send(result);

  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
})

module.exports = router;