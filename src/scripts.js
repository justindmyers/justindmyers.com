const sections = document.querySelectorAll('section');

document.body.classList.remove('no-js');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const currentIndex = Array.from(sections).indexOf(entry.target);

            console.log(entry.isVisible);

            if (entry.isIntersecting) {
                sections[currentIndex].classList.add('fade-in');
            } else {
                if (entry.boundingClientRect.y > 0) {
                    sections[currentIndex].classList.remove('fade-in');
                }
            }
        });
    },
    {
        threshold: 0.35,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});
