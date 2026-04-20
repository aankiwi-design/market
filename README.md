# SUYA HOST Website

Website statis untuk hosting SUYA HOST dengan dashboard dan halaman pembelian.

## Struktur Folder

- `index.html`: Halaman utama dashboard
- `pages/`: Halaman-halaman lainnya
  - `shop.html`: Toko multi-shop
  - `vps.html`: Paket VPS
  - `domain.html`: Pencarian dan kategori domain
  - `bot.html`: Paket bot
  - `details.html`: Detail fitur
- `error/`: Halaman error
  - `404.html`: Halaman 404 Not Found
- `api/`: API backend (jika ada)
- `style/`: CSS dan assets
- `.htaccess`: Konfigurasi Apache untuk error pages dan asset protection

## Cara Menjalankan

### Opsi 1: Browser Langsung
Buka `index.html` di browser web.

### Opsi 2: Server Node.js (dengan alias URL)
1. Install dependencies: `npm install`
2. Jalankan server: `npm start` atau `node index.js`
3. Buka `http://localhost:3000/dashboard` atau alias lainnya:
   - `/dashboard` → Halaman utama
   - `/shop` → Toko multi-shop
   - `/vps` → Paket VPS
   - `/domain` → Pencarian domain
   - `/bot` → Paket bot
   - `/details` → Detail fitur

### Opsi 3: Server Apache
Upload ke hosting dengan Apache dan gunakan `.htaccess` untuk alias.

## Testing

Buka `test.html` di browser untuk test suite.

Halaman 404 otomatis ditampilkan jika URL tidak ditemukan (hanya berfungsi di server Apache).

Akses langsung ke file assets (.css, .js, .png, dll.) akan di-redirect ke halaman 404 untuk keamanan.

## Catatan

Semua tautan telah diperbaiki untuk struktur folder baru.