const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const slideshowImage = document.getElementById("slideshow-image");
const closeBtn = document.querySelector(".close");

let currentSlideIndex = 0;
let currentImages = [];

const projectDetails = {
    registration: {
        title: "GCSU Registration System",
        description: "A full-stack registration system built with React, Python, MySQL (Heroku JawsDB), HTML, CSS, and JS. The purpose was to build a user-friendly registration page for GCSU for a final project in my MMIS degree. I learned React and implemented this as my first project using it.",
        images: ["images/registration/landing.png", "images/registration/current.png", "images/registration/available.png", "images/registration/waitlist.png", "images/registration/reg-degree.png"],
        stackIcons: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
                alt: "React"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg",
                alt: "Python"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
                alt: "HTML"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
                alt: "CSS"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
                alt: "JavaScript"
            }
        ]
    },
    recipe: {
        title: "Recipe App",
        description: "A recipe-sharing platform with Flask and user authentication.",
        images: ["images/recipe/recipe-home.png", "images/recipe/item.png", "images/recipe/fav-page.png", "images/recipe/profile.png", "images/recipe/admin.png", "images/recipe/login.png"],
        stackIcons: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
                alt: "HTML"
            },
                        {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
                alt: "CSS"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
                alt: "Javscript"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg",
                alt: "Python"
            }
        ]
    },
    portfolio: {
        title: "Portfolio Website",
        description: "Personal portfolio built with HTML, CSS, and JS.",
        images: ["images/portfolio/portfolio.png"],
        stackIcons: [
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
                alt: "HTML"
            },
                        {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
                alt: "CSS"
            },
            {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
                alt: "Javscript"
            }
        ]
    }
};

function openModal(projectKey) {
    console.log("Modal opened for: ", projectKey);
    const data = projectDetails[projectKey];
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    currentImages = data.images;
    currentSlideIndex = 0;
    slideshowImage.src = currentImages[currentSlideIndex];

    // Stack icons
    const stackIconsContainer = document.getElementById("stack-icons");
    stackIconsContainer.innerHTML = "";

    data.stackIcons.forEach(icon => {
        // Regular <img> icon
        const img = document.createElement("img");
        img.src = icon.src;
        img.alt = icon.alt;
        img.classList.add("lang-icons", "gradient-border");
        stackIconsContainer.appendChild(img);
    });

    modal.style.display = "block";
}


function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = currentImages.length - 1;
    } else if (currentSlideIndex >= currentImages.length) {
        currentSlideIndex = 0;
    }
    slideshowImage.src = currentImages[currentSlideIndex];
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};
