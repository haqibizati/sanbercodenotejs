// Setup logger
app.use(morgan('dev'));

// Middleware untuk menangani body dalam format JSON
app.use(express.json());

// Middleware untuk menangani URL encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route default
app.get('/', (req, res) => {
    res.send('Selamat datang di server ExpressJS!');
});

// Menjalankan server pada port 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});