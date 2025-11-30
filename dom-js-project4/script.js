var arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        img:'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/328700/328778.jpg'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'pink',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMWFQljlt8EqwHX9jAD1r5QxPhqDH4L9UZ5tsrSrKFo0aayjjc0jlukq4N9t9HVq29eI&usqp=CAU'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        img:'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/11/11/Pictures/_62ac05ca-23de-11eb-bb8d-bc577040ae29.jpg'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        img:'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250212170944.jpg'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'skyblue',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMXNsSBq427mAEtcwL6xiMtvtFyOwLKuHow&s'

    },
    {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7SbqtnLrZOmPb9AMWELh8R4-PcGIrF16ueQ&s'
    },
];

var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('main');
var img = document.querySelector('#teamLogo');

btn.addEventListener('click', function () {
    var winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.secondary;

    // Background Image
    main.style.backgroundImage = 
        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('" + winner.img + "')";
    main.style.backgroundSize = "cover";
    main.style.backgroundPosition = "center";
    main.style.backgroundRepeat = "no-repeat";

    // Set visible image
    img.src = winner.img;
});

