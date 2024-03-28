document.getElementById('generateButton').addEventListener('click', generateCat);

async function generateCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
        const data = await response.json();
        const catUrl = data[0].url;
        const catImage = document.createElement('img');
        catImage.src = catUrl;
        document.getElementById('catImages').innerHTML = '';
        document.getElementById('catImages').appendChild(catImage);
    } catch (error) {
        console.error('Error fetching cat:', error);
    }
}
