self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

========================
3. 이미지 파일
========================

icon-192.png
icon-512.png
