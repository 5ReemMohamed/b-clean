document.addEventListener('DOMContentLoaded', function() {
    setupStarRating();
});

function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            ratingInput.value = rating;
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.style.color = '#f59e0b';
                    s.style.transform = 'scale(1.1)';
                } else {
                    s.style.color = '#d1d5db';
                    s.style.transform = 'scale(1)';
                }
            });
        });
        
        star.addEventListener('mouseleave', function() {
            const currentRating = parseInt(ratingInput.value) || 0;
            
            stars.forEach((s, i) => {
                if (i < currentRating) {
                    s.style.color = '#f59e0b';
                    s.style.transform = 'scale(1.2)';
                } else {
                    s.style.color = '#d1d5db';
                    s.style.transform = 'scale(1)';
                }
            });
        });
    });
}


function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}






