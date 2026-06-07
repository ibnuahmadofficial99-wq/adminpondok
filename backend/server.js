const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Endpoint Tes Dasar
app.get('/api/status', (req, res) => {
    res.json({ message: 'Server SIMS Backend berjalan dengan baik!', status: 'success' });
});

// Endpoint Data Guru Sementara (Mock API yang nantinya diganti ke Firestore)
app.get('/api/guru', (req, res) => {
    const dummyGuru = [
        { id: 'G001', nama: 'Ust. Abdul Somad, Lc., MA.', nip: '198001012005011001', jabatan: 'Guru Fiqih', status: 'Aktif' },
        { id: 'G002', nama: 'Ustz. Oki Setiana, S.Pd.', nip: '198502022010012002', jabatan: 'Guru B. Arab', status: 'Aktif' },
        { id: 'G003', nama: 'Ust. Hanan Attaki, Lc.', nip: '198103032008011003', jabatan: 'Guru Tahfidz', status: 'Cuti' },
    ];
    res.json(dummyGuru);
});

app.listen(PORT, () => {
    console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});
