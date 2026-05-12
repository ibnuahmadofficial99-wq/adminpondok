import React, { useState, useEffect } from 'react';
import { 
  Users, Wallet, BookOpen, GraduationCap, Calendar, 
  Settings, LogOut, Menu, X, FileText, CheckCircle, 
  TrendingUp, LayoutDashboard, Clock, Award, BookMarked,
  DollarSign, Activity, Globe, ArrowLeft, Trophy, Monitor, Star, Rss
} from 'lucide-react';

// --- DATA DUMMY ---
const statYayasan = [
  { title: 'Total Santri', value: '1,240', icon: Users, color: 'bg-blue-500' },
  { title: 'Total Guru & Karyawan', value: '145', icon: CheckCircle, color: 'bg-green-500' },
  { title: 'Kas Yayasan', value: 'Rp 450 Juta', icon: Wallet, color: 'bg-emerald-600' },
  { title: 'Pertumbuhan Siswa', value: '+5.4%', icon: TrendingUp, color: 'bg-purple-500' },
];

const statKepsek = [
  { title: 'Kehadiran Guru', value: '98%', icon: Activity, color: 'bg-blue-500' },
  { title: 'Kehadiran Siswa', value: '96%', icon: Users, color: 'bg-green-500' },
  { title: 'Rata-rata Nilai UTS', value: '84.5', icon: Award, color: 'bg-yellow-500' },
  { title: 'Laporan Masuk', value: '12', icon: FileText, color: 'bg-red-500' },
];

const statBendahara = [
  { title: 'Pemasukan SPP Bulan Ini', value: 'Rp 120 Jt', icon: Wallet, color: 'bg-green-500' },
  { title: 'Tunggakan SPP', value: 'Rp 15 Jt', icon: DollarSign, color: 'bg-red-500' },
  { title: 'Pengeluaran Operasional', value: 'Rp 45 Jt', icon: TrendingUp, color: 'bg-blue-500' },
  { title: 'Dana BOS', value: 'Tersedia', icon: CheckCircle, color: 'bg-emerald-600' },
];

// --- REUSABLE COMPONENTS ---
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
    <div className={`p-4 rounded-full text-white ${color}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const ProgressBar = ({ label, percentage, colorClass = "bg-green-500" }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${colorClass}`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

// --- ROLE DASHBOARDS ---
const DashboardYayasan = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Dashboard Ketua Yayasan</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statYayasan.map((stat, idx) => <StatCard key={idx} {...stat} />)}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Grafik Pendaftaran Tahunan</h3>
        <div className="h-48 flex items-end space-x-2">
          {[40, 60, 45, 80, 95, 120].map((h, i) => (
            <div key={i} className="w-1/6 bg-blue-100 hover:bg-blue-500 transition-colors rounded-t-md relative flex justify-center group" style={{ height: `${h}%` }}>
               <span className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-gray-800 text-white text-xs py-1 px-2 rounded">{h}0</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Laporan Kinerja Unit</h3>
        <ProgressBar label="Unit TK / RA" percentage={95} colorClass="bg-emerald-500" />
        <ProgressBar label="Unit SD / MI" percentage={88} colorClass="bg-blue-500" />
        <ProgressBar label="Unit SMP / MTs" percentage={92} colorClass="bg-indigo-500" />
        <ProgressBar label="Unit SMA / MA" percentage={85} colorClass="bg-purple-500" />
      </div>
    </div>
  </div>
);

const DashboardKepsek = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Dashboard Kepala Sekolah</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statKepsek.map((stat, idx) => <StatCard key={idx} {...stat} />)}
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Agenda Hari Ini</h3>
      <div className="space-y-4">
        {[
          { time: '07:00', title: 'Apel Pagi', type: 'Umum' },
          { time: '09:00', title: 'Rapat Evaluasi Kurikulum', type: 'Internal' },
          { time: '13:00', title: 'Penyambutan Tamu Dinas', type: 'Eksternal' },
        ].map((agenda, i) => (
          <div key={i} className="flex items-center p-3 hover:bg-gray-50 rounded-lg border border-gray-50">
            <div className="w-16 text-sm font-bold text-blue-600">{agenda.time}</div>
            <div className="flex-1 text-sm text-gray-800">{agenda.title}</div>
            <div className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">{agenda.type}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DashboardBendahara = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Dashboard Bendahara</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statBendahara.map((stat, idx) => <StatCard key={idx} {...stat} />)}
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-800">Transaksi Terbaru</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 border-b">Tanggal</th>
              <th className="p-4 border-b">Keterangan</th>
              <th className="p-4 border-b">Tipe</th>
              <th className="p-4 border-b">Jumlah</th>
              <th className="p-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { date: '11 Mei 2026', desc: 'Pembayaran SPP - Ahmad (VII-A)', type: 'Masuk', amount: '+ Rp 350.000', status: 'Berhasil', color: 'text-green-600' },
              { date: '10 Mei 2026', desc: 'Pembelian ATK Kantor', type: 'Keluar', amount: '- Rp 1.200.000', status: 'Berhasil', color: 'text-red-600' },
              { date: '10 Mei 2026', desc: 'Pembayaran SPP - Budi (VIII-B)', type: 'Masuk', amount: '+ Rp 350.000', status: 'Berhasil', color: 'text-green-600' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 border-b last:border-0">
                <td className="p-4 text-gray-500">{row.date}</td>
                <td className="p-4 font-medium text-gray-800">{row.desc}</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded-md text-xs">{row.type}</span></td>
                <td className={`p-4 font-bold ${row.color}`}>{row.amount}</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const DashboardGuru = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Dashboard Guru / Ustadz</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Jadwal Hari Ini" value="4 Kelas" icon={Clock} color="bg-blue-500" />
      <StatCard title="Tugas Belum Dinilai" value="28" icon={FileText} color="bg-yellow-500" />
      <StatCard title="Kehadiran Saya" value="100%" icon={CheckCircle} color="bg-green-500" />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Jadwal Mengajar Hari Ini</h3>
        <div className="space-y-3">
          {[
            { time: '07:30 - 09:00', class: 'VII-A', subject: 'Matematika' },
            { time: '09:15 - 10:45', class: 'VII-B', subject: 'Matematika' },
            { time: '13:00 - 14:30', class: 'VIII-A', subject: 'Prakarya' },
          ].map((jadwal, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
              <div>
                <p className="font-bold text-gray-800">{jadwal.subject}</p>
                <p className="text-sm text-gray-500">Kelas: {jadwal.class}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-blue-600">{jadwal.time}</p>
                <button className="text-xs mt-1 bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">Isi Presensi</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Akses Cepat</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl text-blue-700 hover:bg-blue-100 transition">
            <BookOpen size={32} className="mb-2" />
            <span className="font-medium">Input Nilai</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-xl text-green-700 hover:bg-green-100 transition">
            <Users size={32} className="mb-2" />
            <span className="font-medium">Data Siswa</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 bg-yellow-50 rounded-xl text-yellow-700 hover:bg-yellow-100 transition">
            <FileText size={32} className="mb-2" />
            <span className="font-medium">Bank Soal</span>
          </button>
          <button className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-xl text-purple-700 hover:bg-purple-100 transition">
            <Calendar size={32} className="mb-2" />
            <span className="font-medium">Kalender</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const DashboardTahfidz = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800">Dashboard Pengampu Tahfidz</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Santri Binaan" value="15" icon={Users} color="bg-green-600" />
      <StatCard title="Setoran Hari Ini" value="8" icon={BookMarked} color="bg-blue-500" />
      <StatCard title="Khatam Bulan Ini" value="2" icon={Award} color="bg-yellow-500" />
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">Daftar Antrean Setoran Hafalan</h3>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700">Scan QR Santri</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 border-b">Nama Santri</th>
              <th className="p-4 border-b">Hafalan Terakhir</th>
              <th className="p-4 border-b">Target Juzz</th>
              <th className="p-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[
              { name: 'Abdullah Azzam', last: 'Juz 29, Al-Mulk', target: 'Juz 30, 29, 28' },
              { name: 'Fatimah Az-Zahra', last: 'Juz 2, Al-Baqarah', target: 'Khatam 30 Juz' },
              { name: 'Umar Bin Khattab', last: 'Juz 30, An-Naba', target: 'Juz 30' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 border-b last:border-0">
                <td className="p-4 font-medium text-gray-800">{row.name}</td>
                <td className="p-4 text-gray-600">{row.last}</td>
                <td className="p-4 text-gray-600">{row.target}</td>
                <td className="p-4">
                  <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-200">Input Setoran</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const DashboardWaliSantri = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-800">Portal Wali Santri</h2>
      <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
        <option>Ananda: Abdullah Azzam (VII-A)</option>
        <option>Ananda: Aisyah (V-B)</option>
      </select>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-md">
        <h3 className="text-lg font-medium opacity-90 mb-1">Status Pembayaran SPP</h3>
        <p className="text-3xl font-bold mb-4">LUNAS</p>
        <p className="text-sm opacity-80">Bulan: Mei 2026</p>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-md">
        <h3 className="text-lg font-medium opacity-90 mb-1">Poin Pelanggaran</h3>
        <p className="text-3xl font-bold mb-4">0</p>
        <p className="text-sm opacity-80">Status: Sangat Baik (Mumtaz)</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Progress Hafalan (Tahfidz)</h3>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Target Semester (Juz 30 & 29)</span>
            <span className="text-sm font-medium text-green-600">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="h-3 rounded-full bg-green-500" style={{ width: '75%' }}></div>
          </div>
        </div>
        <p className="text-sm text-gray-600"><span className="font-bold text-gray-800">Setoran Terakhir:</span> Surat Al-Mulk ayat 1-15 (Predikat: Jayyid Jiddan)</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Jadwal Penjemputan / Perpulangan</h3>
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100 flex items-start space-x-3">
          <Calendar className="text-yellow-600 mt-1" size={24} />
          <div>
            <p className="font-bold text-gray-800">Perpulangan Libur Idul Adha</p>
            <p className="text-sm text-gray-600">Jumat, 28 Mei 2026</p>
            <p className="text-xs text-red-500 mt-1">*Mohon menjemput tepat waktu pukul 14:00 WIB.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardSantri = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-1">Ahlan wa Sahlan, Abdullah!</h2>
        <p className="opacity-90">Kelas VII-A | NISN: 0012345678</p>
      </div>
      <div className="mt-4 md:mt-0 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
        <p className="text-sm">Poin Kedisiplinan</p>
        <p className="text-2xl font-bold text-center">100</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition">
        <BookOpen size={32} className="text-blue-500 mb-2" />
        <span className="font-medium text-gray-800">Jadwal Pelajaran</span>
      </button>
      <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition">
        <Award size={32} className="text-yellow-500 mb-2" />
        <span className="font-medium text-gray-800">Lihat Nilai (KHS)</span>
      </button>
      <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition">
        <BookMarked size={32} className="text-green-500 mb-2" />
        <span className="font-medium text-gray-800">Buku Mutaba'ah</span>
      </button>
      <button className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition">
        <FileText size={32} className="text-purple-500 mb-2" />
        <span className="font-medium text-gray-800">Tugas / PR</span>
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
      </button>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Tugas Mendatang</h3>
      <div className="space-y-3">
         <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500 flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Matematika: Latihan Aljabar</p>
              <p className="text-sm text-gray-500">Tenggat: Besok, 08:00 WIB</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">Kerjakan</button>
         </div>
         <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300 flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">B. Arab: Mufrodat Bab 3</p>
              <p className="text-sm text-gray-500">Tenggat: Lusa, 10:00 WIB</p>
            </div>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-100">Lihat</button>
         </div>
      </div>
    </div>
  </div>
);

const DashboardWebsite = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Manajemen Website & Portal</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center shadow-sm">
        <Globe size={16} className="mr-2" /> Kunjungi Situs
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Pengunjung Hari Ini" value="1,420" icon={Activity} color="bg-blue-500" />
      <StatCard title="Artikel Aktif" value="86" icon={Rss} color="bg-green-500" />
      <StatCard title="Pendaftar Baru (Online)" value="24" icon={Users} color="bg-purple-500" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Draft Berita Terbaru</h3>
        <div className="space-y-4">
          {[
            { title: 'Penerimaan Santri Baru Gelombang 2', date: '10 Mei 2026', status: 'Diterbitkan' },
            { title: 'Prestasi Juara Umum MTQ Tingkat Provinsi', date: '08 Mei 2026', status: 'Diterbitkan' },
            { title: 'Kegiatan Outbound Kelas VIII', date: 'Belum dijadwalkan', status: 'Draft' },
          ].map((news, i) => (
            <div key={i} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
              <div>
                <p className="font-semibold text-gray-800">{news.title}</p>
                <p className="text-sm text-gray-500">{news.date}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-md ${news.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                {news.status}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 border border-gray-200">
          Buat Artikel Baru
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Pesan Masuk (Buku Tamu)</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-gray-800 text-sm">Bpk. Haryanto</p>
            <p className="text-xs text-gray-500 mb-1">haryanto.email@gmail.com</p>
            <p className="text-sm text-gray-700">"Apakah masih ada kuota untuk kelas Tahfidz khusus SMP?"</p>
            <button className="text-blue-600 text-xs font-bold mt-2 hover:underline">Balas Pesan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardLeaderboard = () => {
  const [time, setTime] = useState(new Date());
  const [announcementIdx, setAnnouncementIdx] = useState(0);

  const announcements = [
    "⭐ Selamat kepada ananda Abdullah Azzam atas pencapaian Hafalan 15 Juz bulan ini!",
    "📢 Pendaftaran Santri Baru Tahun Ajaran 2026/2027 Gelombang Kedua telah dibuka.",
    "🗓️ Kajian Rutin Wali Santri akan dilaksanakan pada hari Ahad, 17 Mei 2026."
  ];

  const topSantri = [
    { rank: 1, name: 'Abdullah Azzam', class: 'VIII-A', hafalan: '15 Juz', points: 950 },
    { rank: 2, name: 'Fatimah Az-Zahra', class: 'IX-B', hafalan: '14 Juz', points: 890 },
    { rank: 3, name: 'Umar Al-Faruq', class: 'VII-C', hafalan: '10 Juz', points: 720 },
    { rank: 4, name: 'Aisyah Humairah', class: 'VIII-B', hafalan: '9 Juz', points: 680 },
    { rank: 5, name: 'Ali bin Abi Thalib', class: 'VII-A', hafalan: '7 Juz', points: 540 },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const ticker = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % announcements.length);
    }, 6000); // Ganti pengumuman tiap 6 detik

    return () => {
      clearInterval(timer);
      clearInterval(ticker);
    };
  }, [announcements.length]);

  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden text-white flex flex-col" style={{ minHeight: 'calc(100vh - 140px)' }}>
      {/* Header Layar TV */}
      <div className="bg-gray-800 p-6 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Trophy size={40} className="text-yellow-400" />
          <div>
            <h1 className="text-2xl font-black tracking-wider uppercase text-yellow-400">Leaderboard Tahfidz</h1>
            <p className="text-gray-400 text-sm flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
              Live Update
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-bold font-mono">{time.toLocaleTimeString('id-ID')}</h2>
          <p className="text-gray-400">{time.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="flex-1 p-8 grid grid-cols-1 gap-4 overflow-y-auto">
        <div className="flex justify-between text-gray-400 text-xs font-bold uppercase px-6 pb-2 border-b border-gray-700">
          <div className="w-16">Peringkat</div>
          <div className="flex-1">Nama Santri</div>
          <div className="w-32 text-center">Kelas</div>
          <div className="w-48 text-right">Capaian Hafalan</div>
        </div>
        
        {topSantri.map((santri) => (
          <div key={santri.rank} className="bg-gray-800 rounded-xl p-6 flex items-center justify-between border border-gray-700 hover:border-yellow-500 hover:bg-gray-750 transition-all transform hover:scale-[1.01] shadow-lg">
            <div className="w-16 flex justify-center">
              {santri.rank === 1 ? <div className="bg-yellow-400 text-yellow-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"><Star size={20} className="fill-current" /></div> :
               santri.rank === 2 ? <div className="bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">2</div> :
               santri.rank === 3 ? <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">3</div> :
               <div className="text-gray-500 font-bold text-xl">{santri.rank}</div>}
            </div>
            <div className="flex-1 pl-4">
              <h3 className="text-2xl font-bold text-white">{santri.name}</h3>
              <p className="text-sm text-yellow-500">{santri.points} Poin Mutaba'ah</p>
            </div>
            <div className="w-32 text-center">
              <span className="bg-gray-700 px-3 py-1 rounded text-gray-300 font-medium">{santri.class}</span>
            </div>
            <div className="w-48 text-right">
              <h4 className="text-2xl font-black text-green-400">{santri.hafalan}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Ticker / Running Text Area */}
      <div className="bg-green-700 text-white p-4 flex items-center">
        <div className="bg-green-900 px-4 py-1 rounded font-bold text-sm uppercase tracking-wider whitespace-nowrap z-10 mr-4">
          Info Terkini
        </div>
        <div className="overflow-hidden flex-1 relative h-6">
           <p className="absolute whitespace-nowrap animate-pulse font-medium">
              {announcements[announcementIdx]}
           </p>
        </div>
      </div>
    </div>
  );
};

// --- TRANSLATIONS ---
const translations = {
  id: {
    title: 'SIMS Terpadu',
    subtitle: 'Pilih role untuk masuk ke prototipe aplikasi',
    back: 'Kembali',
    logout: 'Keluar',
    dashboard: 'Dashboard',
    roles: { yayasan: 'Ketua Yayasan', kepsek: 'Kepala Sekolah', bendahara: 'Bendahara', admin: 'Administrator', guru: 'Guru / Ustadz', tahfidz: 'Pengampu Tahfidz', walisantri: 'Wali Santri', santri: 'Santri', website: 'Pengelola Website', leaderboard: 'Leaderboard Publik' }
  },
  en: {
    title: 'Integrated SIMS',
    subtitle: 'Select a role to enter the application prototype',
    back: 'Back',
    logout: 'Log Out',
    dashboard: 'Dashboard',
    roles: { yayasan: 'Foundation Chairman', kepsek: 'Principal', bendahara: 'Treasurer', admin: 'Administrator', guru: 'Teacher', tahfidz: 'Tahfidz Teacher', walisantri: 'Parent/Guardian', santri: 'Student', website: 'Website Manager', leaderboard: 'Public Leaderboard' }
  },
  ar: {
    title: 'نظام إدارة المدرسة المتكامل',
    subtitle: 'حدد دورًا للدخول إلى النموذج الأولي للتطبيق',
    back: 'رجوع',
    logout: 'خروج',
    dashboard: 'لوحة القيادة',
    roles: { yayasan: 'رئيس المؤسسة', kepsek: 'مدير المدرسة', bendahara: 'أمين الصندوق', admin: 'مسؤول', guru: 'مدرس / أستاذ', tahfidz: 'معلم تحفيظ', walisantri: 'ولي الأمر', santri: 'طالب', website: 'مدير الموقع', leaderboard: 'لوحة المتصدرين العامة' }
  }
};

// --- MAIN APPLICATION LAYOUT ---
export default function App() {
  const [role, setRole] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('id');

  const t = translations[language];

  // --- LOGIN SCREEN (MOCK) ---
  if (!role) {
    const roles = [
      { id: 'yayasan', name: t.roles.yayasan, icon: LayoutDashboard, color: 'bg-indigo-500' },
      { id: 'kepsek', name: t.roles.kepsek, icon: GraduationCap, color: 'bg-blue-500' },
      { id: 'bendahara', name: t.roles.bendahara, icon: Wallet, color: 'bg-emerald-500' },
      { id: 'admin', name: t.roles.admin, icon: Settings, color: 'bg-gray-700' },
      { id: 'guru', name: t.roles.guru, icon: BookOpen, color: 'bg-teal-500' },
      { id: 'tahfidz', name: t.roles.tahfidz, icon: BookMarked, color: 'bg-green-600' },
      { id: 'walisantri', name: t.roles.walisantri, icon: Users, color: 'bg-orange-500' },
      { id: 'santri', name: t.roles.santri, icon: Award, color: 'bg-purple-500' },
      { id: 'website', name: t.roles.website, icon: Globe, color: 'bg-cyan-500' },
      { id: 'leaderboard', name: t.roles.leaderboard, icon: Trophy, color: 'bg-amber-500' },
    ];

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        
        {/* Language Selector */}
        <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-200`}>
          <Globe size={16} className="text-gray-500" />
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-sm text-gray-700 font-medium focus:outline-none cursor-pointer outline-none"
          >
            <option value="id">Bahasa Indonesia</option>
            <option value="en">English</option>
            <option value="ar">العربية (Arab)</option>
          </select>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-green-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{t.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{t.subtitle}</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {roles.map((r) => {
                const Icon = r.icon;
                return (
                  <button
                    key={r.id}
                    onClick={() => { setRole(r.id); setCurrentView('dashboard'); }}
                    className="flex flex-col items-center justify-center p-4 border rounded-xl hover:shadow-md transition-all hover:-translate-y-1 bg-white group"
                  >
                    <div className={`p-3 rounded-full text-white ${r.color} mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{r.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MENU CONFIGURATION BASED ON ROLE ---
  const getMenus = () => {
    const commonMenus = [{ id: 'dashboard', icon: LayoutDashboard, label: t.dashboard }];
    let specificMenus = [];
    switch(role) {
      case 'yayasan': specificMenus = [{ id: 'kepegawaian', icon: Users, label: 'Data Kepegawaian' }, { id: 'keuangan', icon: Wallet, label: 'Laporan Keuangan' }, { id: 'akademik', icon: FileText, label: 'Laporan Akademik' }]; break;
      case 'bendahara': specificMenus = [{ id: 'spp', icon: DollarSign, label: 'Pembayaran SPP' }, { id: 'jurnal', icon: Activity, label: 'Jurnal Keuangan' }, { id: 'tunggakan', icon: Users, label: 'Data Tunggakan' }]; break;
      case 'guru': specificMenus = [{ id: 'jadwal', icon: Calendar, label: 'Jadwal Mengajar' }, { id: 'presensi', icon: CheckCircle, label: 'Presensi Siswa' }, { id: 'nilai', icon: Award, label: 'Input Nilai' }]; break;
      case 'tahfidz': specificMenus = [{ id: 'setoran', icon: BookMarked, label: 'Input Setoran' }, { id: 'kelompok', icon: Users, label: 'Daftar Kelompok' }, { id: 'raport', icon: FileText, label: 'Cetak Raport Tahfidz' }]; break;
      case 'walisantri': specificMenus = [{ id: 'tagihan', icon: Wallet, label: 'Tagihan SPP' }, { id: 'nilai_anak', icon: Award, label: 'Nilai Akademik' }, { id: 'capaian', icon: BookMarked, label: 'Capaian Tahfidz' }]; break;
      case 'santri': specificMenus = [{ id: 'jadwal_saya', icon: Calendar, label: 'Jadwal Saya' }, { id: 'elearning', icon: FileText, label: 'Tugas E-Learning' }, { id: 'perpus', icon: BookOpen, label: 'Perpustakaan Digital' }]; break;
      case 'website': specificMenus = [{ id: 'berita', icon: Rss, label: 'Kelola Berita & Artikel' }, { id: 'statistik', icon: Activity, label: 'Statistik Pengunjung' }, { id: 'pengaturan_web', icon: Settings, label: 'Pengaturan Tampilan' }]; break;
      case 'leaderboard': specificMenus = [{ id: 'pengaturan_layar', icon: Monitor, label: 'Pengaturan Layar' }]; break;
      default: specificMenus = [{ id: 'pengguna', icon: Users, label: 'Manajemen Pengguna' }, { id: 'pengaturan', icon: Settings, label: 'Pengaturan Sistem' }]; break;
    }
    return [...commonMenus, ...specificMenus];
  };

  const roleName = t.roles[role];

  // --- RENDER COMPONENT ---
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center h-16 bg-green-600 text-white px-4">
          <GraduationCap className="mr-2" size={24} />
          <span className="text-xl font-bold truncate">SIMS Terpadu</span>
          <button className="lg:hidden ml-auto text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-500 font-bold text-xl">
              {roleName.charAt(0)}
            </div>
            <p className="font-bold text-gray-800">{roleName}</p>
            <p className="text-xs text-green-600 font-medium">Online</p>
          </div>
          
          <nav className="flex-1 space-y-1">
            {getMenus().map((menu, index) => (
              <a 
                key={index} 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentView(menu.id); setIsMobileMenuOpen(false); }}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${currentView === menu.id ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <menu.icon className={`mr-3 ${currentView === menu.id ? 'text-green-600' : 'text-gray-400'}`} size={20} />
                {menu.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <button 
              onClick={() => { setRole(null); setCurrentView('dashboard'); }}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <LogOut className="mr-3" size={20} />
              {t.logout}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden p-2 -ml-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <button 
              onClick={() => { setRole(null); setCurrentView('dashboard'); }}
              className="hidden lg:flex items-center text-gray-600 hover:text-gray-900 ml-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition border border-transparent hover:border-gray-200"
            >
              <ArrowLeft size={18} className="mr-2" />
              <span className="text-sm font-medium">{t.back} / {t.logout}</span>
            </button>
          </div>
          
          <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={() => { setRole(null); setCurrentView('dashboard'); }}
              className="lg:hidden flex items-center text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition border border-red-100"
            >
              <LogOut size={16} className="mr-1.5" />
              <span className="text-sm font-medium">{t.logout}</span>
            </button>
            <button className="text-gray-400 hover:text-gray-500 hidden sm:block">
              <span className="sr-only">Notifikasi</span>
              <div className="relative">
                <CheckCircle size={24} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </div>
            </button>
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
              {roleName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {currentView === 'dashboard' ? (
              <>
                {role === 'yayasan' && <DashboardYayasan />}
                {role === 'kepsek' && <DashboardKepsek />}
                {role === 'bendahara' && <DashboardBendahara />}
                {role === 'guru' && <DashboardGuru />}
                {role === 'tahfidz' && <DashboardTahfidz />}
                {role === 'walisantri' && <DashboardWaliSantri />}
                {role === 'santri' && <DashboardSantri />}
                {role === 'website' && <DashboardWebsite />}
                {role === 'leaderboard' && <DashboardLeaderboard />}
                {(role === 'admin') && (
                  <div className="flex items-center justify-center h-64 text-gray-500 flex-col">
                    <Settings size={48} className="mb-4 text-gray-300" />
                    <p>Dashboard Administrator sedang dalam pengembangan.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-500 flex-col">
                <Settings size={48} className="mb-4 text-gray-300" />
                <p>Fitur menu sedang dalam pengembangan.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
