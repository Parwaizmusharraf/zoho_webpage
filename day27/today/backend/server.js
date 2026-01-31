const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/',function(req,res){ {
    const date = req.body.username;
    res.send(date);
}
});
app.listen(4000, function () {
    console.log('Server is running on port 4000');
});