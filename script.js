

function openNav() {
     document.querySelector(".sidebar").style.width = "150px";
    document.querySelector(".content").style.marginRight = "150px";
 }

function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".content").style.marginRight = "0";
 }

function openModal() {
      const modal = document.querySelector("#modal");
     modal.style.display = "block";
     document.body.style.overflow = "hidden"; 
 }

 function closeModal() {
      const modal = document.querySelector("#modal");
      modal.style.display = "none";
      document.body.style.overflow = "auto"; 
 }

function openC(circleId) {
      const modal = document.querySelector("#circle-modal");
      const modalDescription = document.querySelector("#circle-content");
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; 

    switch(circleId) {
         case 'c1':
              modalDescription.textContent = "teste1";
              break;
         case 'c2':
             modalDescription.textContent = "teste2";
             break;
         case 'c3':
              modalDescription.textContent = "teste3";
              break;
         case 'c4':
              modalDescription.textContent = "teste4";
              break;
         default:
            modalDescription.textContent = "";
        }
        }

function closeC() {
      const modal = document.querySelector("#circle-modal");
     modal.style.display = "none";
     document.body.style.overflow = "auto"; 
 }

 window.addEventListener('click', function(event) {
      const modal = document.querySelector("#circle-modal");
     if (event.target === modal) {
          closeC();
     }
  });

  function slides() {
     let imagePaths = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png'];
     let currentIndex = 0;
 
     setInterval(() => {
         document.getElementById("imagensBanner").src = imagePaths[currentIndex];
         currentIndex = (currentIndex + 1) % imagePaths.length;
     }, 5000);
 }
 slides();

 function toggleContent() {
    const beneficios = document.getElementById('beneficios');
    const impacto = document.getElementById('impacto');

    beneficios.classList.toggle('active');
    impacto.classList.toggle('active');

    if (beneficios.style.display === "none") {
        beneficios.style.display = "flex";
        impacto.style.display = "none";
    } else {
        beneficios.style.display = "none";
        impacto.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('beneficios').style.display = 'flex';
});
