let lists = document.querySelectorAll(".wrapper__footer-item");

for (let i = 0; i < lists.length; i++) {
	lists[i].addEventListener('click', function() {
		for (let x = 0; x < lists.length; x++) {
			if (lists[x] == this) {
				lists[x].classList.add('active');
			} else {
				lists[x].classList.remove('active');
			}
		}
	});
}

let homePorrtfolioArr = [
    {
        img : './img/music.jpg',
        title : 'Music player',
        href : 'https://musiqa-players.netlify.app/'
    },
    {
        img : './img/wedding.jpg',
        title : 'To\'y sayti',
        href : 'https://dancing-mochi-131747.netlify.app/'
    },
    {
        img : './img/tasbih.jpg',
        title : 'Tasbeh',
        href : 'https://asadbek2305-tasbeh.netlify.app/'
    },
    {
        img : './img/music.jpg',
        title : 'Music player',
    },
];

let homeList = document.querySelector(".home-list");

function homePorrtfolio() {

    let homePorrtfolioRes = " "


    for (let i = 0; i < 3 ; i++) {

        // console.log(i);

        homePorrtfolioRes += `


        <li class="home-item">
            <div class="home__item-img">
                <img src="${homePorrtfolioArr[i].img}" alt="" width="271.6px">
            </div>
            <div class="home__item-content">
                <h4>${homePorrtfolioArr[i].title}</h4>
                <a href="${homePorrtfolioArr[i].href}" target="_blank">
                    Ko'rish 
                    <i class="fa-solid fa-chevron-right"></i>
                </a>
            </div>
        </li>

        `

    }

    homeList.innerHTML = homePorrtfolioRes
}

homePorrtfolio();


let house = document.querySelector(".house");

house.addEventListener("click", (e) => {

    e.preventDefault();

    window.location.href = "index.html";

    console.log("house");
})


let portfolio = document.querySelector(".portfolio");

portfolio.addEventListener("click", (e) => {

    e.preventDefault();

    window.location.href = "portfolio__item.html";

    console.log("portfolio");


})
