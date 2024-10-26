
const toggler = document.querySelector('.dark-mode-toggle');
const light = document.querySelector('.light-mode-toggle');
light.addEventListener('click', () => {

    if (!document.documentElement.classList.contains('dark')) {

        document.documentElement.classList.add('dark');
        document.querySelectorAll('*').forEach(element => {
            element.classList.add('dark');
        });
        localStorage.setItem('dark', 'true');
    } 
});


if (localStorage.getItem('dark') == 'true') {
    light.style.display = "none";
} else {
    toggler.style.display = "none";
}

light.addEventListener('click', () => {

    toggler.style.display = "inline-block";
    light.style.display = "none";

})
toggler.addEventListener('click', () => {

    toggler.style.display = "none";
    light.style.display = "inline-block";

    document.documentElement.classList.remove('dark');
    document.querySelectorAll('*').forEach(element => {
        element.classList.remove('dark');
    });
    localStorage.setItem('dark', 'false');
})


if (document.querySelector(".dark-mode-toggle").classList.contains("dark")) {
    document.querySelector(".light-mode-toggle")
}



// progress scroll down 

let ourSkills = document.querySelector(".our-skills");

// events
let allSpans = document.querySelectorAll(".events .unit .span-time");
let events = document.querySelector(".events");

window.onscroll = function () {
    
    
    if (window.scrollY >= (events.offsetTop + events.offsetHeight - this.innerHeight - 400)) {
        allSpans.forEach((span) => {
            let i = 1;
            function incrementCounter() {
                if (i <= Number(span.dataset.num)) {
                    span.textContent = i;
                    i++;
                    setTimeout(incrementCounter, 10); // Wait 1 millisecond before next iteration
                }
            }
            incrementCounter();
        })
    } 

    let allSkills = document.querySelectorAll(".skill .the-progress span");
    if (window.scrollY >= (ourSkills.offsetTop + ourSkills.offsetHeight - this.innerHeight - 200)) {
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.width;
        })
    } else {
        allSkills.forEach((skill) => {
        skill.style.width = 0;
        })
    }
}
