nodejs version > 18
### Getting started

1. Instal dependensi yang diperlukan dengan menjalankan `npm install` di direktori root proyek.
2. Di direktori `server`, buat file `.env` untuk database PostgreSQL Anda. Anda dapat mencoba [ElephantSQL](https://www.elephantsql.com/) atau [Aiven](https://aiven.io/postgresql) untuk database yang dihosting gratis.
   ```env
   PGHOST=db.example.com
   PGUSER=exampleuser
   PGPASSWORD=examplepassword
   PGDATABASE=chessu
   ```
3. Jalankan server pengembangan dengan `npm run dev`.
   - Untuk menjalankan server frontend dan backend secara terpisah, gunakan masing-masing `npm run dev -w client` dan `npm run dev -w server`.
4. Anda sekarang dapat mengakses frontend di http://localhost:3000 dan backend di http://localhost:3001.
