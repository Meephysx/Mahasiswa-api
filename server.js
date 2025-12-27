const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let mahasiswa = [
    {
        id: 1,
        nama: 'Danis',
        jurusan: 'Teknik Informatika'
    },
    {

        id: 2,
        nama: 'Aldi',
        jurusan: 'Teknik Informatika'
    }
];

app.get('/mahasiswa', (req, res) => {
    res.json(mahasiswa);
});

app.post('/mahasiswa', (req, res) => {
    const { id, nama, jurusan } = req.body;

    if (!id || !nama || !jurusan) {
        return res.status(400).json({ message: 'Data tidak lengkap' });
    }

    mahasiswa.push({ id, nama, jurusan });
    res.status(201).json({message: 'Mahasiswa berhasil ditambahkan'});
});

app.delete('/mahasiswa/:id', (req, res) => {
    const { id } = req.params;

    const index = mahasiswa.findIndex((mhs) => mhs.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
    }

    mahasiswa.splice(index, 1);
    res.json({ message: 'Mahasiswa berhasil dihapus' });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
