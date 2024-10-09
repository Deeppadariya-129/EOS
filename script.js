// console.log("Hello....");

// Preloader script 
const preloader = document.getElementById("preloader");

window.addEventListener("load",() => {
    preloader.style.display = "none";
})

gsap.from("#page-1 .mainarea h1",{
    y:80,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2,
})

gsap.from("#page-1 .mainarea h4",{
    y:80,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2,
})


// Slider Js here 
const cards = document.querySelectorAll(".inner-container")

cards.forEach(card => {
    card.addEventListener('mouseover',() => {
        removeActiveclass()
        card.classList.add("active")
    })
})

function removeActiveclass(){
    cards.forEach(card => {
        card.classList.remove("active")
    })
}


//  Scroll animation effect 
// Select both slider groups
// Function to create infinite scroll animation with seamless loop
function createInfiniteScroll(selector, direction, duration) {
  const container = document.querySelector(selector);
  const items = Array.from(container.children);
  const itemCount = items.length;

  // Duplicate items to create a seamless infinite loop
  items.forEach((item) => {
    container.appendChild(item.cloneNode(true)); // Clone each item
  });

  // Get the width of the container to calculate the animation
  const containerWidth = container.scrollWidth / 2; // Get original width before cloning

  // Create the infinite scroll animation
  const scrollAnimation = gsap.to(container, {
    x: direction === 'left' ? `-=${containerWidth}` : `+=${containerWidth}`, // Move left or right
    ease: 'none',
    duration: duration,  // Speed of the animation
    repeat: -1,          // Repeat infinitely
    modifiers: {
      x: (x) => {
        // Use modulus to make the animation seamless
        return gsap.utils.wrap(-containerWidth, 0, parseFloat(x)) + 'px';
      }
    }
  });

  // Pause the animation on hover
  container.addEventListener('mouseenter', () => {
    scrollAnimation.pause();
  });

  // Resume the animation when hover ends
  container.addEventListener('mouseleave', () => {
    scrollAnimation.resume();
  });
}

// Create the infinite scroll for both groups
createInfiniteScroll('.slider-left', 'left', 50);   // Scroll left-to-right
createInfiniteScroll('.slider-right', 'right', 50); // Scroll right-to-left
