document.addEventListener("DOMContentLoaded", function() { 
    let skillsShow = document.querySelector(`#skills-show`);
    let hobbiesHide = document.querySelector(`#hobbies-hide`);
    let hobbyText = document.querySelector(`#hobby-text`);
    let skillsText = document.querySelector(`#skills-span`);

    skillsShow.addEventListener("click",function(){
        skillsShow.innerHTML = `Skills: `;
        skillsText.classList.toggle("hide");
        let arrowLeft = document.createElement("i");
        arrowLeft.classList.add("fa","fa-chevron-circle-left");
        arrowLeft.setAttribute("id","skills-hide");
        skillsText.append(arrowLeft);
    });



    
    hobbiesHide.addEventListener("click",function(){
        hobbyText.classList.toggle("hide");
    });


  });