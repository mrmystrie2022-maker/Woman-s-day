// Function to switch tabs AND highlight the active button
function showSection(sectionId, clickedButton) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.classList.remove('active'));

    // 2. Remove 'active' class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    // 3. Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // 4. Highlight the clicked button
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Special function for the "Start Celebration" button
function goToMemories() {
    const memoryBtn = document.getElementById('nav-memories');
    showSection('memories', memoryBtn);
}

// Function to reveal photos on tap
function revealPhoto(element) {
    element.classList.add('revealed');
}

// Function to pop balloons
function popBalloon(element) {
    element.classList.add('popped');
}
