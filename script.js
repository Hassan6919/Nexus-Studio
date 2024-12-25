document.addEventListener('DOMContentLoaded', function() {
    const serviceCategories = document.querySelectorAll('.service-category');
    
    serviceCategories.forEach(category => {
        const header = category.querySelector('.category-header');
        const content = category.querySelector('.category-content');
        
        header.addEventListener('click', function() {
            // Close all other categories
            serviceCategories.forEach(otherCategory => {
                if (otherCategory !== category && otherCategory.classList.contains('active')) {
                    otherCategory.classList.remove('active');
                    otherCategory.querySelector('.category-content').style.display = 'none';
                }
            });
            
            // Toggle current category
            category.classList.toggle('active');
            content.style.display = category.classList.contains('active') ? 'block' : 'none';
        });
    });
}); 