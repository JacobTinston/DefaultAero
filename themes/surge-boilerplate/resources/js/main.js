// Accordion

const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
    });
};


// Reveal Animation

let reveal;

const scrollAnim = () => {
    reveal.forEach(element => {
        let trigger = window.innerHeight / (element.getAttribute("reveal-trigger") ? parseInt(element.getAttribute("reveal-trigger")) : 1.2);
        let elPos = element.getBoundingClientRect().top;

        if (elPos < trigger) {
            element.classList.add('revealed');
        };
    });
};