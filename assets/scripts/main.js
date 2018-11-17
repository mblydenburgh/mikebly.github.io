let projects = [
    {
        title: "Munchies Metropolis",
        url: "https://pgould94.github.io/Munchies_Metropolis",
        imgUrl: "./assets/images/munchie.jpg"
    },
    {
        title: "Pupperbase (Angular JS)",
        url: "https://mikebly.github.io/pupperbase",
        imgUrl: "./assets/images/pupper.jpg"
    },
    {
        title: "Rock Paper Scissors (Cross Browser w/ Firebase)",
        url: "https://mikebly.github.io/RPS-MP",
        imgUrl: "./assets/images/rps.jpg"
    },
    {
        title: "Trivia",
        url: "https://mikebly.github.io/trivia",
        imgUrl: "./assets/images/trivia.jpg"
    },
    {
        title: "Giphy Goodness",
        url: "https://mikebly.github.io/giphy-goodness",
        imgUrl: "./assets/images/giphy.jpg"
    },
    {
        title: "TSA Luggage Analysis (Angular JS)",
        url: "https://mikebly.github.io/tsa-luggage-analysis",
        imgUrl: "./assets/images/claims.jpg"
    },
    {
        title: "Star Wars Battle",
        url: "https://mikebly.github.io/unit-4-game",
        imgUrl: "./assets/images/starwars.jpg"
    },
    {
        title: "Color Game",
        url: "https://mikebly.github.io/Color-Game",
        imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780363/colorgame.jpg"
    },
    {
        title: "To Do",
        url: "https://mikebly.github.io/to-do",
        imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780363/todo.jpg"
    },
    {
        title: "Quote Machine",
        url: "https://codepen.io/mikebly/live/pVMobb",
        imgUrl: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1780363.pVMobb.19b810bf-0672-48df-8e9d-6bc95b8df4ac.png"
    },
    {
        title: "Weather App",
        url: "https://codepen.io/mikebly/live/Gdabzo",
        imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780363/minweather.jpg"
    },
];

console.log(projects.length);

document.addEventListener("DOMContentLoaded", function () {
    const skillsShow = document.querySelector(`#skills-show`);
    const hobbiesShow = document.querySelector(`#hobbies-show`);
    const skillsHide = document.querySelector(`#skills-hide`);
    const hobbiesHide = document.querySelector(`#hobbies-hide`);
    const projectsDiv = document.querySelector(`#projects`);
    const carouselDiv = document.querySelector(`#projects-carousel`);
    let hobbyText = document.querySelector(`#hobby-text`);
    let skillsText = document.querySelector(`#skills-span`);





    skillsShow.addEventListener("click", function () {
        skillsText.classList.toggle("hide");
        skillsShow.classList.toggle("hide");
    });

    skillsHide.addEventListener("click", function () {
        skillsText.classList.toggle("hide");
        skillsShow.classList.toggle("hide");
    });


    hobbiesShow.addEventListener("click", function () {
        hobbiesShow.classList.toggle("hide");
        hobbyText.classList.toggle("hide");
    });

    hobbiesHide.addEventListener("click", function () {
        hobbiesShow.classList.toggle("hide");
        hobbyText.classList.toggle("hide");
    });

    function makeCard(project) {
        let newProject = document.createElement('div');
        newProject.classList.add("project-tile");
        newProject.setAttribute("href", project.url);

        newProject.innerHTML =
            `
            <img src="${project.imgUrl}" alt="${project.title}">
            <p class="project-title">${project.title}</p>
            <a href="${project.url}">See the code!</>
            `
            ;
        projectsDiv.appendChild(newProject);
    }

    function fillCarousel(project, i) {
        let newCarouselItem;

        newCarouselItem = document.createElement("a");
        newCarouselItem.classList.add('carousel-item');
        newCarouselItem.setAttribute("href",`#${project.url}`);

        newCarouselItem.innerHTML = 
        `
        <img src="${project.imgUrl}" alt="${project.title}">
        <h6>${project.title}</h6>
        `;

        //push the carousel item to the carousel
        carouselDiv.appendChild(newCarouselItem);
    }

    //create carousel and static images for all projects
    projects.map((project, i) => {
        fillCarousel(project,i);
        makeCard(project);
    });

    const modalSelect = document.querySelector('#modal1');
    const modal = M.Modal.init(modalSelect);
    document.querySelector(`.modal-trigger`).addEventListener("click",()=>{modal.open()})
    // modal.open();
    // const modalInstance = M.Modal.getInstance(modalSelect);

    //initialize materialize carousel
    const carouselElements = document.querySelector('.carousel');
    const carouselOptions = {
        indicators: true,
        fullWidth: true,
        noWrap: true
    }
    const carouselInit = M.Carousel.init(carouselElements,carouselOptions);
    const carouselInstance = M.Carousel.getInstance(carouselElements);
    setTimeout(autoPlay,5000);
    function autoPlay(){
        carouselInstance.next();
        setTimeout(autoPlay,5000);
    }


});