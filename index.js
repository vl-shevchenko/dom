const city = [
    {
        image: 'url(images/kyiv5-904w.jpg)',
        name: 'Kyiv',
        info: 'The capital of Ukraine and the most interesting city, cultural and spiritual capital of the country. Due to the hilly terrain, the town is very picturesque and has more than 20 lookouts. Please note that Kyiv is quite large and even the sightseeing tour takes 10 kilometers, so have at least 2 days for a visit.',
    },
    {
        image: 'url(images/Lviv.jpg)',
        name: 'Lviv',
        info: 'Lvivs Old Town is a UNESCO World Heritage Site. This city is very popular among Ukrainians from other cities who often come here for the weekend. Recently Lviv turned to the restaurant capital of the country, due to a network of unusual restaurants "!FEST".',
    },
    {
        image: 'url(images/Kamianets-Podilskyi.jpeg)',
        name: 'Kamianets-Podilskyi',
        info: 'Best small city in Ukraine. Rock towns are common for Italy or Spain, but in Ukraine it is very rare. Here is an oldest town hall in the country, a cozy old town and a fairy-tale castle.',
    },
    {
        image: 'url(images/Chernivtsi.jpg)',
        name: 'Chernivtsi',
        info: 'Pretty unknown city, capital of the Bukovina region and cultural center of western Ukraine, along with Lviv. In 2012 was recognized the most comfortable city in the country. Known primarily for a luxurious building of the university, the former residence of the Metropolitan and UNESCO World Heritage site. Old Town is also beautiful.',
    },
    {
        image: 'url(images/Uzhgorod.jpg)',
        name: 'Uzhgorod',
        info: 'The capital of the Carpathian Ukraine is known for cherry blossoms in May, the castle and wine festivals. There is also a lovely old town.',

    },
    {
        image: 'url(images/Odesa.jpg)',
        name: 'Odesa',
        info: 'City by the Sea, the birthplace of many famous Ukrainian immigrants and the capital of humor. Here is a special atmosphere, special people and special attitude to everything, you need to feel it. In early April Odessa helds the festival of humor.',
    },
];

const citiesInfo = document.querySelector('.container');
const citiesName = document.querySelector('.name-city');
const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');

citiesInfo.innerHTML = `<p class='info'>${city[0].info}</p>`;
document.body.style.backgroundImage = city[0].image;

const buildMenu = city => {
    document.querySelector('.nav__bloc').innerHTML = `<ul class='container-list'></ul>`;
    city.map((val) => {
        let nameCity = document.createElement('li');
        nameCity.classList.add('menu-list');
        nameCity.innerHTML = `<a href="#" class='menu-link'>${val.name}</a>`;
        document.querySelector('.container-list').appendChild(nameCity);
    });
};
buildMenu(city);

const menuButton = document.querySelector('.container-list');
menuButton.addEventListener('click', function (e) {
    let currentCity = e.target.innerHTML;
    let info = '';
    let image = '';
    let name = '';
    for (let i = 0; i < city.length; i++) {
        if (city[i].name == currentCity) {
            info = city[i].info;
            image = city[i].image;
            name = city[i].name;
        };
    };
    if (e.target.matches('a')) {
        citiesInfo.innerHTML = '';
        document.body.style.backgroundImage = image;
        citiesName.innerHTML = `${name}`;
        citiesInfo.innerHTML = `<p class='info'>${info}</p>`;
    }
});

burger.addEventListener('click', burgerHandler);
function burgerHandler(e) {
    popup.classList.toggle('open');
    burger.classList.toggle('active');
};

popup.addEventListener('click', burgerClose);
function burgerClose(e) {
    if (e.target.matches('a')) {
        popup.classList.remove('open');
        burger.classList.remove('active');
    };
};

