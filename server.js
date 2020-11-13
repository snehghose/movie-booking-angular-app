const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/movie-booking-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('./dist/movie-booking-app/index.html'));
});
app.listen(process.env.PORT || 8085);