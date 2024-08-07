// JavaScript to handle header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > window.innerHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// JavaScript for tab navigation in Education and Experience sections
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabs = button.parentElement.nextElementSibling.querySelectorAll('.tab-content');
        const tabId = button.getAttribute('data-tab');
        
        // Deactivate all tabs and buttons
        button.parentElement.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
        
        // Activate clicked tab and button
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// JavaScript for category filter in Projects section
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const projects = document.querySelectorAll('.project-card');

        // Deactivate all category buttons
        button.parentElement.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
        
        // Activate clicked category button
        button.classList.add('active');

        // Filter projects
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
