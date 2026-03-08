// Function to handle the navigation tabs
function showSection(sectionId) {
    // 1. Find all sections and remove the 'active' class from them
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Add the 'active' class ONLY to the section we want to see
    document.getElementById(sectionId).classList.add('active');
}

// Function to handle clicking a balloon
function popBalloon(element) {
    // Adds the 'popped' CSS class, which changes opacity to 0
    element.classList.add('popped');
}
