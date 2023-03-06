/*const navAbout = document.querySelector('.banner_navbar_about');
const navProject = document.querySelector('.banner_navbar_project');
const navbarAbout = document.querySelector('.about');
const navbarProject = document.querySelector('.project');
let heightAbout = navbarAbout.clientHeight;
let heightProject = navbarProject.clientHeight;

window.addEventListener("scroll", () => {
    if(window.scrollY > heightAbout) {
        navAbout.classList.add('scroll');
    } else if(window.scrollY > heightProject) {
        navProject.classList.add('scroll');
    } else {
        navAbout.classList.remove('scroll');
    }

    if (window.scrollY > heightProject) {
        navAbout.classList.remove('scroll');
    }
}); */

function animateElements(selector, numberHeight) {
    const elements = document.querySelectorAll(selector);

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        elements.forEach((element) => {
            const topElementToTopViewport = element.getBoundingClientRect().top;
            // Si ce que j'ai scrollé depuis le haut de mon element est supérieur à la hauteur de mon element et le haut de ma partie visible (tofixed enleve les chiffres apres vurgule)
            if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * numberHeight) {
                element.classList.add("active");
            }
        })
    });
}

animateElements(".project_animation", 0.8)
animateElements(".project_content_text_animation", 1)
