//Cursor animations

let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  gsap.to(mouseCursor, 0.4, {
    x:e.clientX,
    y:e.clientY
  });
}

links.forEach(link => {
  link.addEventListener("mouseover", ()=> {
    mouseCursor.classList.add("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale:2
    });
  });

  link.addEventListener("mouseleave", ()=> {
    mouseCursor.classList.add("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale:1
    });
  });
});


// Typing Effect 

const typedTxt = document.querySelector(".typed-txt");
const cursorSpan = document.querySelector(".cursor-space");

const typedArray = ["my name is Jahari!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTxtDelay = 2000;
let txtArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < typedArray[txtArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTxt.textContent += typedArray[txtArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTxtDelay);
  }
}

function erase () {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTxt.textContent = typedArray[txtArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    txtArrayIndex++;
    if(txtArrayIndex >=typedArray.length) txtArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(typedArray.length) setTimeout(type, newTxtDelay + 250);
});






/* ---- particles.js config ---- */

particlesJS("background", {
    "particles": {
      "number": {
        "value": 190,
        "density": {
          "enable": true,
          "value_area": 315
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);