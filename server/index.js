const express = require('express');
const path = require('path');

const app = express();
const PORT = 2222;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => {
  console.log(`NOW LISTENING ON PORT ${PORT}`);
});