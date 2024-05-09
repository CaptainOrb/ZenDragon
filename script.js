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
        image: "assets/char_apex.png" // Specify the image path for each character
    },
    "wesley-aldrich": {
        name: "Wesley Aldrich",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facilis vitae cum quod at placeat, dicta magnam exercitationem animi officia aspernatur suscipit eum tenetur accusamus blanditiis quisquam nemo deleniti vero illo id minima qui. Illo cupiditate et soluta architecto eos labore quod deserunt vel expedita impedit. Vitae ullam officia earum dolorem nulla. Nemo corrupti sequi iure voluptas eveniet aperiam quis.",
        image: "assets/char_wesley.png" // Specify the image path for each character
    },
    "artika-chintya": {
        name: "Artika Chintya",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum facilis vitae cum quod at placeat, dicta magnam exercitationem animi officia aspernatur suscipit eum tenetur accusamus blanditiis quisquam nemo deleniti vero illo id minima qui. Illo cupiditate et soluta architecto eos labore quod deserunt vel expedita impedit. Vitae ullam officia earum dolorem nulla. Nemo corrupti sequi iure voluptas eveniet aperiam quis.",
        image: "assets/char_tika.png" // Specify the image path for each character
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
        // Update the existing image
        defaultImage.src = details.image;
        defaultImage.alt = character;
    } else {
        detailsContainer.innerHTML = `
            <h2>Zen Academy</h2>
            <p>The Zen Academy is a place where powerful hunters are specialized to maintain the ecosystem of the Eostera. Dragons are reasonably considered monsters. While the idea of a place with monsters might sounds dystopian, the Zen Team are trained to handle the monsters without slaying any of them. This operation is for obvious reasons, namely educational purposes.</p>
        `;
        // Reset to default image
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
                void details.offsetWidth; // Trigger reflow to restart the animation
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

// Function to move the navbar menu and register button inside the off-screen menu
function moveContentToOffScreen() {
    offScreenMenu.appendChild(navContainer);
    offScreenMenu.appendChild(registerButton);
}

// Function to move the navbar menu and register button back to their original positions
function moveContentToHeader() {
    const header = document.querySelector("header");
    const btnContainer = document.querySelector(".btn-container");
    header.appendChild(navContainer);
    header.appendChild(btnContainer);
    btnContainer.appendChild(registerButton);
}

// Initial move of the content to off-screen
moveContentToOffScreen();

// Event listener for window resize
window.addEventListener("resize", () => {
    // Check viewport width
    if (window.innerWidth > hamburgerTriggerWidth) {
        // Move content back to header if viewport width is larger than 920px
        moveContentToHeader();
    } else {
        // Move content to off-screen if viewport width is less than or equal to 920px
        moveContentToOffScreen();
    }
}); 

// Initial move of the content to off-screen
if (window.innerWidth <= hamburgerTriggerWidth) {
    moveContentToOffScreen();
} else {
    moveContentToHeader();
}