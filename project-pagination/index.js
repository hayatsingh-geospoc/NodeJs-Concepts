const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { postModel } = require('./models/postModel');
const { PostList } = require('./posts');
const app = express();

mongoose
  .connect(
    'mongodb+srv://amit_singh:kya_hal_hai_tere@cluster0.jpqo2bq.mongodb.net/HAYAT_PG-TEST_DB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('Connected to MongoDB Successfully');
  })
  .catch((err) => {
    console.log("Couldn't connected to MongoDB Successfully");
    console.log(err);
  });
const db = mongoose.connection;

db.once('open', async () => {
  if ((await postModel.countDocuments().exec()) > 1) return;
  Promise.all(
    PostList.map((post) => {
      return postModel.create({
        title: post.title,
        body: post.body,
        userId: post.userId,
      });
    })
  )
    .then(() => {
      console.log('Post added successfully');
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/posts', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const limit = parseInt(req.query.limit) || 12;
    const result = {};
    const totalPosts = await postModel.countDocuments().exec();
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    result.totalPosts = totalPosts;
    if (startIndex > 0) {
      result.previous = {
        pageNumber: pageNumber - 1,
        limit: limit,
      };
    }
    if (endIndex < (await postModel.countDocuments().exec())) {
      result.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
      };
    }
    result.data = await postModel
      .find()
      .sort('-_id')
      .skip(startIndex)
      .limit(limit)
      .exec();
    result.rowsPerPage = limit;
    return res.json({ msg: 'Posts Fetched successfully', data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Sorry, something went wrong' });
  }
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
