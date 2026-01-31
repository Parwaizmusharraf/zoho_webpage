const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello This is Express Server');
});
app.listen(5000, function () {
    console.log('Express Server is running on port 5000');
})