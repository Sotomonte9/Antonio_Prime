
console.log('El script se está cargando correctamente.');


const thumbnails = document.querySelectorAll('.peke');

const mainImage = document.querySelector('.joni');

console.log(thumbnails, mainImage);

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src;
        console.log('Imagen cambiada a:', this.src);
    });
});