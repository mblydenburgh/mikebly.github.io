let projects = [
    {
        title: "Cornucopia (Express/Handlebars/MySQL/Passport)",
        url: "https://cornucopia-todo-team-name.herokuapp.com/",
        codeUrl:"https://github.com/plipandfirt/Team4Project2",
        imgUrl: "./assets/images/cornucopia.jpg"
    },
    {
        title: "Munchies Metropolis (CSS Grid, Firebase, jQuery)",
        url: "https://pgould94.github.io/Munchies_Metropolis",
        codeUrl:"https://github.com/pgould94/Munchies_Metropolis",
        imgUrl: "./assets/images/munchie.jpg"
    },
    {
        title: "Beer Scraper (Mongoose/Cheerios/Handlebars)",
        url: "https://mb-scraper.herokuapp.com/",
        codeUrl:"https://github.com/mikebly/scraper",
        imgUrl: "./assets/images/scraper.jpg"
    },
    {
        title: "Pupperbase (Angular JS)",
        url: "https://mikebly.github.io/pupperbase",
        codeUrl:"https://github.com/mikebly/pupperbase",
        imgUrl: "./assets/images/pupper.jpg"
    },
    {
        title: "Brgr Bar (Handlebars/Express/MySQL)",
        url: "https://mb-brgr-bar.herokuapp.com",
        codeURL:"https://mikebly.github.io/burger",
        imgUrl: "./assets/images/burger.jpg"
    },
    {
        title: "Diablo Class Finder (Express/NodeJS)",
        url: "https://mb-diablo-finder.herokuapp.com",
        codeUrl:"https://github.com/mikebly/diablo-class-finder",
        imgUrl: "./assets/images/diablo.jpg"
    },
    {
        title: "Trivia",
        url: "https://mikebly.github.io/trivia",
        codeUrl:"https://github.io/mikebly/trivia",
        imgUrl: "./assets/images/trivia.jpg"
    },
    {
        title: "Giphy Goodness",
        url: "https://mikebly.github.io/giphy-goodness",
        codeUrl:"http://github.com/mikebly/giphy-goodness",
        imgUrl: "./assets/images/giphy.jpg"
    },
    {
        title: "TSA Luggage Analysis (Angular JS)",
        url: "https://mikebly.github.io/tsa-luggage-analysis",
        codeUrl:"https://github.com/mikebly/tsa-luggage-analysis",
        imgUrl: "./assets/images/claims.jpg"
    },
    {
        title: "Star Wars Battle",
        url: "https://mikebly.github.io/unit-4-game",
        codeUrl:"https://github.io/mikebly/unit-4-game",
        imgUrl: "./assets/images/starwars.jpg"
    },
    {
        title: "Color Game",
        url: "https://mikebly.github.io/Color-Game",
        codeUrl:"https://github.com/mikebly/Color-Game",
        imgUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1780363/colorgame.jpg"
    },
];

console.log(`loading ${projects.length} projects`);

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
            <a class="btn waves-effect" href="${project.url}" target="_blank">Check it out!</a>
            `
            ;
        projectsDiv.appendChild(newProject);
    }

    function fillCarousel(project, i) {
        let newCarouselItem;

        newCarouselItem = document.createElement("a");
        newCarouselItem.classList.add('carousel-item');
        // newCarouselItem.setAttribute("href",project.url);
        newCarouselItem.setAttribute("style",`background: url("${project.imgUrl}") center center`);

        newCarouselItem.innerHTML = 
            // `
            // <img class="img-responsive" src="${project.imgUrl}"></img>
            `
            <div class="carousel-caption">
                <h5 class="white-text">${project.title}</h5>
                <a href="${project.codeUrl}" class="btn waves-effect" target="_blank">See the Code!</a>
                <a href="${project.url}" class="btn waves-effect" target="_blank">Check it Out</a>
            </div>
    
        `
    

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

    //initialize materialize carousel
    const carouselElements = document.querySelector('.carousel');
    const carouselOptions = {
        indicators: true,
        noWrap: true,
        dist: -50
    }
    const carouselInit = M.Carousel.init(carouselElements,carouselOptions);
    const carouselInstance = M.Carousel.getInstance(carouselElements);
    setTimeout(autoPlay,5000);
    function autoPlay(){
        carouselInstance.next();
        setTimeout(autoPlay,5000);
    }


});