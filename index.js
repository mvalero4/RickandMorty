const container = document.getElementById('container');
const card = document.querySelector('.card');

const API = 'https://rickandmortyapi.com/api/character';

const getImages = async () => {
    const res = await fetch(API);
    const data = await res.json();
    const results = data.results;
    showImages(results);
};

function showImages(results) {
   results.forEach((character) => {
    const id = character.id;

    const contentCard = `
        <article class='card'>
            <img src=${results[id].image} alt=${results.name}/>
            <div>
                <p>${results[id].name}</p>
                <p>${results[id].species}</p>
                <p>${results[id].gender}</p>
                <a href=${results[id].url}>Link</a>
            </div>
        </article>`;
    
    container.innerHTML += contentCard;
   });
}

getImages();