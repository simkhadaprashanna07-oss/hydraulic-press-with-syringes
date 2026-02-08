// Toggle details for experiments
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'Show Details';
    }
}

// Simple image gallery slideshow
const images = [
    'https://www.magnumpress.com/wp-content/uploads/2023/10/MCF15A.png',
    'https://m.media-amazon.com/images/S/aplus-media-library-service-media/a9ec453c-3bee-4a4b-b546-29c67c830622.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    'https://cdn11.bigcommerce.com/s-4s9liwcv/images/stencil/original/products/83637/311387/dake-h-frame-utility-hyd-presses-newPT__24666.1488467628.jpg?c=2&imbypass=on&imbypass=on',
    'https://carlyletools.com/img/sku/CSP/CSP50T-4.webp',
    'https://www.iqsdirectory.com/articles/hydraulic-press/manual-pump-h-frame-hydraulic-press.jpg',
    'https://i.ytimg.com/vi/q9BtYEnrkg4/maxresdefault.jpg',
    'https://i.ytimg.com/vi/TnOaLbu3hy8/maxresdefault.jpg',
    'https://i.ytimg.com/vi/yYcK4nANZz4/maxresdefault.jpg',
    'https://i.ytimg.com/vi/u8o_3vvWobA/maxresdefault.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2021/08/hydraulic-press-crushing-metals-1.gif'
];

let currentImage = 0;

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('gallery-image').src = images[currentImage];
}