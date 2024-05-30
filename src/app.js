const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const dosenRoutes = require('./routes/dosenRoutes');
const pendaftaranRoutes = require('./routes/pendaftaranRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/dosen', dosenRoutes);
app.use('/api/pendaftaran', pendaftaranRoutes);
app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
