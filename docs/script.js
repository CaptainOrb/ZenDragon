// CLICK SFX
const sfx = new Audio('assets/terraria_sfx.mp3');
const sfxTrigger = document.querySelectorAll('.click_sfx');
const sfxTriggerOnly = document.querySelectorAll('.click_sfx_only');

function playSound() {
    sfx.currentTime = 0;
    sfx.play();
}

sfxTrigger.forEach(clickable => {
    clickable.addEventListener('click', function(event) {
        event.preventDefault();
        playSound();
        setTimeout(() => {
            window.location.href = clickable.href;
        }, 300);
    });
});

sfxTriggerOnly.forEach(clickable => {
    clickable.addEventListener('click', function(event) {
        event.preventDefault();
        playSound();
    });
});

const characterDetails = {
    "the-apex": {
        name: "The Apex",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facilis vitae cum quod at placeat, dicta magnam exercitationem animi officia aspernatur suscipit eum tenetur accusamus blanditiis quisquam nemo deleniti vero illo id minima qui. Illo cupiditate et soluta architecto eos labore quod deserunt vel expedita impedit. Vitae ullam officia earum dolorem nulla. Nemo corrupti sequi iure voluptas eveniet aperiam quis.",
        image: "assets/char_apex.png"
    },
    "wesley-aldrich": {
        name: "Wesley Aldrich",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facilis vitae cum quod at placeat, dicta magnam exercitationem animi officia aspernatur suscipit eum tenetur accusamus blanditiis quisquam nemo deleniti vero illo id minima qui. Illo cupiditate et soluta architecto eos labore quod deserunt vel expedita impedit. Vitae ullam officia earum dolorem nulla. Nemo corrupti sequi iure voluptas eveniet aperiam quis.",
        image: "assets/char_wesley.png"
    },
    "artika-chintya": {
        name: "Artika Chintya",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facilis vitae cum quod at placeat, dicta magnam exercitationem animi officia aspernatur suscipit eum tenetur accusamus blanditiis quisquam nemo deleniti vero illo id minima qui. Illo cupiditate et soluta architecto eos labore quod deserunt vel expedita impedit. Vitae ullam officia earum dolorem nulla. Nemo corrupti sequi iure voluptas eveniet aperiam quis.",
        image: "assets/char_tika.png"
    }
};

function showDetails(character) {
    const details = characterDetails[character];
    const detailsContainer = document.getElementById("character-details");
    const defaultImage = document.querySelector('.details img');

    if (details) {
        detailsContainer.innerHTML = `
            <h2>${details.name}</h2>
            <p>${details.description}</p>
        `;
        defaultImage.src = details.image;
        defaultImage.alt = character;
    } else {
        detailsContainer.innerHTML = `
            <h2>Zen Academy</h2>
            <p>The Zen Academy is a place where powerful hunters are specialized to maintain the ecosystem of the Eostera. Dragons are reasonably considered monsters. While the idea of a place with monsters might sounds dystopian, the Zen Team are trained to handle the monsters without slaying any of them. This operation is for obvious reasons, namely educational purposes.</p>
        `;
        defaultImage.src = "assets/char_default.png";
        defaultImage.alt = "Character Selection Default Photo";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const charactersIcon = document.querySelectorAll(".character-icon img");
    const details = document.querySelector(".details");
    let animationRunning = false;

    charactersIcon.forEach(element => {
        element.addEventListener('click', () => {
            const allCharacterIcons = document.querySelectorAll('.character-icon');

            allCharacterIcons.forEach(icon => {
                icon.classList.remove("selected-character");
            });

            element.parentElement.classList.add("selected-character");
            
            if (!animationRunning) {
                details.classList.remove("reveal");
                details.classList.add("reveal");
                animationRunning = true;
                details.addEventListener('animationend', () => {
                    details.classList.remove("reveal");
                    animationRunning = false;
                });
            } else {
                details.classList.remove("reveal");
                void details.offsetWidth;
                details.classList.add("reveal");
            }
        }); 
    });
});


const hamburgerTriggerWidth = 750;

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const navContainer = document.querySelector(".nav-container");
const registerButton = document.getElementById("register-button");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

function moveContentToOffScreen() {
    offScreenMenu.appendChild(navContainer);
    offScreenMenu.appendChild(registerButton);
}

function moveContentToHeader() {
    const header = document.querySelector("header");
    const btnContainer = document.querySelector(".btn-container");
    header.appendChild(navContainer);
    header.appendChild(btnContainer);
    btnContainer.appendChild(registerButton);
}

window.addEventListener("resize", () => {
    if (window.innerWidth > hamburgerTriggerWidth) {
        moveContentToHeader();
    }
    else {
        moveContentToOffScreen();
    }
}); 

if (window.innerWidth <= hamburgerTriggerWidth) {
    moveContentToOffScreen();
}
else {
    moveContentToHeader();
}


var currentIndex = 0;
var images = document.querySelectorAll('.card');
var totalImages = images.length;
var carouselImages = document.getElementById('selection');

function nextSlide() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    }
    else {
        currentIndex -= 3;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex += 3
    }
    updateCarousel();
}

function updateCarousel() {
    var offset = currentIndex * -100 + '%';
    carouselImages.style.transform = 'translateX(' + offset + ')';
}
