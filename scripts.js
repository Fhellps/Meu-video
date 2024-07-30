// Configurar título da página
document.getElementById('pageTitle').innerText = 'Vidix Studio';

// Incorporar vídeo
const videoIframe = document.createElement('iframe');
videoIframe.width = '640';
videoIframe.height = '360';
videoIframe.frameBorder = '0';
videoIframe.src = 'https://mega.nz/embed/edpzkQzC#7AHR6KiDBS9mTUCEfocvMq8gCSNAamDF-vYQiCa0I1A';
videoIframe.allowFullscreen = true;
document.getElementById('videoPlaceholder').appendChild(videoIframe);
