//? Departments Button variables

var departmentBtn = document.getElementById('department-btn');

var departmentUpArrow = document.querySelector('#department-up-arrow');

var departmentDownArrow = document.querySelector('#department-down-arrow');


//? General training Button variables

var generalTrainingsBtn = document.getElementById("general-trainings-btn");

var genrtraiUpArrow = document.querySelector('#general-training-up-arrow');

var genrtraiDownArrow = document.querySelector('#general-training-down-arrow');


//? Coaches Button variables

var coachesBtn = document.getElementById("coaches-btn");

var coachesUpArrow = document.querySelector('#coaches-up-arrow');

var coachesDownArrow = document.querySelector('#coaches-down-arrow');


//? Tech Button variables

var techBtn = document.getElementById("technology-btn");

var techUpArrow = document.querySelector('#tech-up-arrow');

var techDownArrow = document.querySelector('#tech-down-arrow');



//? Strategic Button variables

var stratBtn = document.getElementById("strategic-btn");

var stratUpArrow = document.querySelector('#strat-up-arrow');

var stratDownArrow = document.querySelector('#strat-down-arrow');



//? Ethics Button variables

var ethicsBtn = document.getElementById("ethics-btn");

var ethicsUpArrow = document.querySelector('#ethics-up-arrow');

var ethicsDownArrow = document.querySelector('#ethics-down-arrow');


//? General onMouseOver Event Listening on Category-Contents
var categoryContents = document.querySelector('#category-contents');
categoryContents.style.display = "block";


//? Departments Button functions------------------------

departmentBtn.onmouseover = function showdepup() {
    departmentUpArrow.style.display = "none";
    departmentDownArrow.style.display = "block";
    document.querySelector('#department-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";

    categoryContents.onmouseover = function selfShow() {
        document.querySelector('#department-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        departmentDownArrow.style.display = "block";
        departmentUpArrow.style.display = "none";


    }

    categoryContents.onmouseleave = function selfHide() {
        document.querySelector('#department-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        departmentDownArrow.style.display = "none";
        departmentUpArrow.style.display = "block";

    }




};

departmentBtn.onmouseleave = function showdepdown() {
    departmentUpArrow.style.display = "block";
    departmentDownArrow.style.display = "none";
    document.querySelector('#department-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};


//?General Trainings Button funtions---------------------
generalTrainingsBtn.onmouseover = function showgenrtraiup() {
    genrtraiDownArrow.style.display = "block";
    genrtraiUpArrow.style.display = "none";
    document.querySelector('#general-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";

    categoryContents.onmouseover = function selfShow() {
        document.querySelector('#general-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        genrtraiDownArrow.style.display = "block";
        genrtraiUpArrow.style.display = "none";

    }

    categoryContents.onmouseleave = function selfHide() {
        document.querySelector('#general-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        genrtraiDownArrow.style.display = "none";
        genrtraiUpArrow.style.display = "block";

    }
    
};

generalTrainingsBtn.onmouseleave = function showgenrtraidown() {
    genrtraiUpArrow.style.display = "block";
    genrtraiDownArrow.style.display = "none";
    document.querySelector('#general-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};


//? Coaches button functions-----------------------------
coachesBtn.onmouseover = function showcoachesup() {
    coachesUpArrow.style.display = "none";
    coachesDownArrow.style.display = "block";
    document.querySelector('#coaches-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";


    categoryContents.onmouseover = function selfShow() {
        document.querySelector('#coaches-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        coachesDownArrow.style.display = "block";
        coachesUpArrow.style.display = "none";

    }

    categoryContents.onmouseleave = function selfHide() {
        document.querySelector('#coaches-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        coachesDownArrow.style.display = "none";
        coachesUpArrow.style.display = "block";

    }

};

coachesBtn.onmouseleave = function showcoachesdown() {
    coachesUpArrow.style.display = "block";
    coachesDownArrow.style.display = "none";
    document.querySelector('#coaches-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};


//? Tech button functions-----------------------------
techBtn.onmouseover = function showcoachesup() {
    techUpArrow.style.display = "none";
    techDownArrow.style.display = "block";
    document.querySelector('#tech-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";


    categoryContents.onmouseover = function selfShow() {
        document.querySelector('#tech-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        techDownArrow.style.display = "block";
        techUpArrow.style.display = "none";

    }

    categoryContents.onmouseleave = function selfHide() {
        document.querySelector('#tech-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        techDownArrow.style.display = "none";
        techUpArrow.style.display = "block";

    }

};

techBtn.onmouseleave = function showcoachesdown() {
    techUpArrow.style.display = "block";
    techDownArrow.style.display = "none";
    document.querySelector('#tech-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};


//? Strategic button functions-----------------------------
stratBtn.onmouseover = function showcoachesup() {
    stratUpArrow.style.display = "none";
    stratDownArrow.style.display = "block";
    document.querySelector('#strategic-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";

    categoryContents.onmouseover = function selfShow() {
        document.querySelector('#strategic-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        stratDownArrow.style.display = "block";
        stratUpArrow.style.display = "none";

    }

    categoryContents.onmouseleave = function selfHide() {
    document.querySelector('#strategic-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        stratDownArrow.style.display = "none";
        stratUpArrow.style.display = "block";

    }

};

stratBtn.onmouseleave = function showcoachesdown() {
    stratUpArrow.style.display = "block";
    stratDownArrow.style.display = "none";
    document.querySelector('#strategic-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};


//? Ethics button functions-----------------------------
ethicsBtn.onmouseover = function showcoachesup() {
    ethicsUpArrow.style.display = "none";
    ethicsDownArrow.style.display = "block";
    document.querySelector('#ethics-category-contents').style.display = "block";
    categoryContents.style.backgroundColor = "#fffbeb";

    categoryContents.onmouseover = function selfShow() {
    document.querySelector('#ethics-category-contents').style.display = "block";
        categoryContents.style.backgroundColor = "#fffbeb";
        ethicsDownArrow.style.display = "block";
        ethicsUpArrow.style.display = "none";

    }

    categoryContents.onmouseleave = function selfHide() {
        document.querySelector('#ethics-category-contents').style.display = "none";
        categoryContents.style.backgroundColor = "transparent";
        ethicsDownArrow.style.display = "none";
        ethicsUpArrow.style.display = "block";

    }

};

ethicsBtn.onmouseleave = function showcoachesdown() {
    ethicsUpArrow.style.display = "block";
    ethicsDownArrow.style.display = "none";
    document.querySelector('#ethics-category-contents').style.display = "none";
    categoryContents.style.backgroundColor = "transparent";

};




//? The modal/ The pop up menu

const modal = document.querySelector('#modal');

const modalopens = document.querySelector('#profile-pic');

const modalcloses = document.querySelector('#closeit')

modalopens.addEventListener('click', () => {
    modal.showModal();
    document.body.classList.add('no-scroll');

});

modalcloses.addEventListener('click', () => {
    modal.close()
    document.body.classList.remove('no-scroll');
});


modal.addEventListener('close', () => {
        document.body.classList.remove('no-scroll'); 
 });






