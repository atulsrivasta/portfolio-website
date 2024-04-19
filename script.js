// JavaScript code for client interview slider section
// You can add your own client testimonials here
const clientSlider = document.querySelector('.client-slider');

const testimonials = [
    {
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Jane Smith',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        name: 'David Brown',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    }
];

testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `<p>${testimonial.text}</p>
                     <h3>${testimonial.name}</h3>`;
    clientSlider.appendChild(div);
});
// JavaScript code for client interview slider section
// You can add your own client testimonials here
const clientSlider = document.querySelector('.client-slider');

const testimonials = [
    {
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        name: 'Jane Smith',
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        name: 'David Brown',
        text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    }
];

testimonials.forEach(testimonial => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `<p>${testimonial.text}</p>
                     <h3>${testimonial.name}</h3>`;
    clientSlider.appendChild(div);
});

// JavaScript code for client interview slider functionality
const testimonialsContainer = document.querySelector('.client-slider');
const testimonialsSlides = document.querySelectorAll('.testimonial');
const totalSlides = testimonialsSlides.length;
let currentSlide = 0;

function showSlide(slideIndex) {
    testimonialsSlides.forEach(slide => {
        slide.style.display = 'none';
    });

    testimonialsSlides[slideIndex].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Show first slide initially
showSlide(currentSlide);

// Event listeners for slider controls
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
