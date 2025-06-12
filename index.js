// Section-5 testinomials

// Client reviews
let index = 0;
        const slides = document.querySelectorAll('.testimonial');
        
        function showSlide(newIndex) {
            if (newIndex >= slides.length) index = 0;
            else if (newIndex < 0) index = slides.length - 1;
            else index = newIndex;
            
            document.getElementById('slider').style.transform = `translateX(${-index * 100}%)`;
        }
        
        function nextSlide() {
            showSlide(index + 1);
        }
        
        function prevSlide() {
            showSlide(index - 1);
        }


// Section 2 About us

let aboutUs = document.getElementById('open-aboutUs');

let newSectionOpen = document.getElementsByClassName('second-section');

aboutUs.addEventListener('click', function () {newSectionOpen.scrollIntoView({behavior: 'smooth' });
});