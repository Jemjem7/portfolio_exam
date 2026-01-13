// Modal Function
function openModal(project) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  if(project === "md") {
    body.innerHTML = `
      <h2>Mountain Dew</h2>
      <img src="assets/md.jpg" style="width:100%;margin-top:15px;">
      <p>Full campaign illustrations, posters, and animation frames.</p>
    `;
  }
  if(project === "cg") {
    body.innerHTML = `
      <h2>Common Ground</h2>
      <img src="assets/cg.jpg" style="width:100%;margin-top:15px;">
      <p>Packaging designs and concept sketches.</p>
    `;
  }
  if(project === "boat") {
    body.innerHTML = `
      <h2>boAthead</h2>
      <img src="assets/boat.jpg" style="width:100%;margin-top:15px;">
      <p>Character design frames and brand artwork.</p>
    `;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



function toggleInner(card) {
  if (!card.classList.contains("has-inner")) return;
  card.classList.toggle("active");
}


// Toggle Resume Content
const aboutMeCard = document.getElementById('aboutMeCard');
const resumeContent = document.getElementById('resumeContent');

aboutMeCard.addEventListener('click', () => {
  resumeContent.classList.toggle('hidden'); // Show/hide resume
  resumeContent.scrollIntoView({ behavior: 'smooth' });
});

