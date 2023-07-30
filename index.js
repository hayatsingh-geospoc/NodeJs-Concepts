const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://hayatSingh007:Jeetfarswan007@24@cluster0.trkpt.mongodb.net/Hayat_DB',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('MOngoDb connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000 || process.env, () => {
  console.log('Posrt is running on 3000');
});
