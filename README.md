# ReturScan Pro

Aplikasi web/PWA untuk pencocokan retur, scan barcode beruntun, dan pencatatan nomor resi.

## Deploy ke GitHub Pages
1. Buka **Settings → Pages**.
2. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
3. Setelah deployment selesai, buka `https://pasarkaliwungu025-cmd.github.io/returan-neoma/` melalui Chrome Android.
4. Pilih menu ⋮ → **Install app / Tambahkan ke layar utama**.

## Catatan
- Scan kamera memerlukan HTTPS dan izin kamera.
- Scan batch menyaring duplikasi kode yang sama selama 1,4 detik.
- Nomor resi dapat diisi dari hasil scan atau ditempel manual, lalu disimpan dan diekspor ke CSV.
- Data tersimpan lokal pada browser/perangkat; belum ada sinkronisasi cloud antarperangkat.
- Pustaka CDN memerlukan koneksi internet.
