function animateElements(selector) {
    const elements = document.querySelectorAll(selector);

    window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;

        elements.forEach((element) => {
            const topElementToTopViewport = element.getBoundingClientRect().top;
            // Si ce que j'ai scrollé depuis le haut de mon element est supérieur à la hauteur de mon element et le haut de ma partie visible (tofixed enleve les chiffres apres vurgule)
            if (scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9) {
                element.classList.add("active");
            }
        })
    });
}

animateElements(".project_animation")
animateElements(".project_content_text_animation")