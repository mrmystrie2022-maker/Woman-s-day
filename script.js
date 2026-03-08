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

// Set up our counters
let revealedPhotosCount = 0;
let poppedBalloonsCount = 0;

// Function to reveal photos on tap
function revealPhoto(element) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
        revealedPhotosCount++;

        // If all 4 photos are revealed, show the Next button
        if (revealedPhotosCount === 4) {
            const nextBtn = document.getElementById('next-to-balloons');
            nextBtn.classList.remove('hidden-btn');
            nextBtn.classList.add('show-btn');
        }
    }
}

// Function to pop balloons
function popBalloon(element) {
    if (!element.classList.contains('popped')) {
        element.classList.add('popped');
        poppedBalloonsCount++;

        // If all 5 balloons are popped, show the Next button
        if (poppedBalloonsCount === 5) {
            const nextBtn = document.getElementById('next-to-message');
            nextBtn.classList.remove('hidden-btn');
            nextBtn.classList.add('show-btn');
        }
    }
}

// Button Click Functions
function goToBalloons() {
    const balloonBtn = document.getElementById('nav-balloons');
    showSection('balloons', balloonBtn);
    window.scrollTo(0, 0); // Scrolls back to the top of the page smoothly
}

function goToMessage() {
    const messageBtn = document.getElementById('nav-message');
    showSection('message', messageBtn);
    window.scrollTo(0, 0); 
}
