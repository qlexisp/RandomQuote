
// Pour charger une citation dés qu'on arrive sur la page
document.addEventListener('DOMContentLoaded', function() {
    fetch(`https://thatsthespir.it/api`)
.then((response) => response.json())
.then((data) => {
    quote = document.getElementById("quote");
    author = document.getElementById("author");
    author_image = document.getElementById("author_image");
    quote.innerHTML = data.quote;
    author.textContent = `- ${data.author}`;

    if (data.photo) {
        author_image.src = data.photo;
    } else {
        author_image.src = 'black.jpg';
    }
})
.catch((error) => {
    console.error("There was an error!", error);
});
});

// Pour recharger une citation quand on clique sur le bouton
document.getElementById("new-quote").addEventListener('click', function() {
        fetch(`https://thatsthespir.it/api`)
    .then((response) => response.json())
    .then((data) => {
        quote = document.getElementById("quote");
        author = document.getElementById("author");
        author_image = document.getElementById("author_image");
        quote.innerHTML = data.quote;
        author.textContent = `- ${data.author}`;

        if (data.photo) {
            author_image.src = data.photo;
        } else {
            author_image.src = 'black.jpg';
        }
    })
    .catch((error) => {
        console.error("There was an error!", error);
    });
});