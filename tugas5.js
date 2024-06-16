const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

// Route default
app.get('/', (req, res) => {
    res.send('Selamat datang di server ExpressJS!');
});


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

