let projects = [
    {
        title: "Munchies Metropolis",
        url: "https://pgould94.github.io/Munchies_Metropolis",
        imgUrl: "../assets/images/munchie.jpg"
    },
    {
        title:"Pupperbase (Angular JS)",
        url:"https://mikebly.github.io/pupperbase",
        imgUrl:"../assets/images/pupper.jpg"
    },
    
]

document.addEventListener("DOMContentLoaded", function () {
    const skillsShow = document.querySelector(`#skills-show`);
    const hobbiesShow = document.querySelector(`#hobbies-show`);
    const skillsHide = document.querySelector(`#skills-hide`);
    const hobbiesHide = document.querySelector(`#hobbies-hide`);
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

});