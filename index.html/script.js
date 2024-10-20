  // script.js
  const contactSection = document.querySelector('.kont');
const showMoreButton = document.createElement('button');
showMoreButton.textContent = 'Visa mer';
showMoreButton.addEventListener('click', () => {
    contactSection.classList.toggle('show-more');
    showMoreButton.textContent = contactSection.classList.contains('show-more') ? 'Dölj' : 'Visa mer';
   
});
document.body.appendChild(showMoreButton);

const toggleButton = document.getElementById("toggleButton");
const paragraph = document.querySelector(".info small"); // Select the paragraph
paragraph.style.display = "none"; // Hide initially

toggleButton.addEventListener("click", () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        toggleButton.textContent = "Visa Mindre"; // Change button text
    } else {
        paragraph.style.display = "none";
        toggleButton.textContent = "Visa Mer"; // Change button text
    }
});
  
  