// main.js - JavaScript utama website
// UPTD Puskesmas Rawat Inap Jatigede
// Digunakan oleh seluruh halaman website.

// Memberi shadow halus pada navbar saat halaman digulir.
(function () {
    var navbar = document.querySelector('.navbar-main');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 8);
    });
})();

// Lightbox galeri sederhana: menampilkan caption item yang diklik ke dalam modal.
(function () {
    var modal = document.getElementById('galeriModal');
    if (!modal) return;

    modal.addEventListener('show.bs.modal', function (event) {
        var trigger = event.relatedTarget;
        var caption = trigger.getAttribute('data-caption') || 'Dokumentasi Kegiatan';
        modal.querySelector('#galeriModalLabel').textContent = caption;
        modal.querySelector('#galeriModalCaption').textContent = caption;
    });
})();
