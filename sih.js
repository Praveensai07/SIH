
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let index = 0;

function nextSlide() {
index = (index + 1) % slides.length; // loop back
slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000); // change every 4s

const famslider = document.querySelector('.fam-slider');
    const famslides = document.querySelectorAll('.fam-slide');
    let Findex =0 ;

    function nextfamslide(){
        Findex = (Findex + 1) % famslides.length;
        famslider.style.transform =`translateX(-${100 * Findex}%)`;
    }
    setInterval(nextfamslide, 3000);

 function animateCounter(counter) {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 200); // adjust speed

      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = current;
          requestAnimationFrame(update);
        } else {
          counter.textContent = target; // final value
        }
      };
      update();
    }

    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target); // run once
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          { pageLanguage: "en" },
          "translate"
        );
      }
