

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
            modalDescription.innerHTML = "<h3>ACIDIFICAÇÃO</h3><br><p>Causada pelo aumento dos níveis de dióxido de carbono (CO₂) na atmosfera, reduz a disponibilidade de íons de carbonato, essenciais para a formação de carbonato de cálcio, dificultando a calcificação e o crescimento dos corais, os tornando mais frágeis e suscetíveis a danos físicos e afetando sua nutrição e respiração .</p>";
            break;
        case 'c2':
            modalDescription.innerHTML = "<h3>ELEVAÇÃO DA TEMPERATURA</h3><br><p>Quando a temperatura da água aumenta, os corais expelem as zooxantelas que vivem em seus tecidos e fornecem a maior parte da energia dos corais através da fotossíntese, ocorrendo, então, o branqueamento severo e o estresse térmico reduz a capacidade dos corais de crescerem e se reproduzirem, comprometendo sua regeneração e imunidade .</p>";
            break;
        case 'c3':
            modalDescription.innerHTML = "<h3>IMPORTÂNCIA</h3><br><p>O Recife de Corais abriga 25% de toda a espécie do oceano, fornecendo habitat, alimento e áreas de reprodução, filtram sedimentos e reciclam nutrientes excessivos. São tão importantes para a vida marinha quanto para a vida humana, pois atuam como barreiras naturais, protegendo, assim, as áreas e comunidades costeiras de tempestades e tsunamis e reduz a erosão das costas. Além da proteção, Milhões de pessoas em todo o mundo dependem da pesca de recife como principal fonte de proteína e renda. Sem contar em todo valor medicinal, econômico e cultural que os corais possuem.</p>";
            break;
        case 'c4':
            modalDescription.innerHTML = "<h3>RAIOS UV</h3><br><p>A radiação UV pode causar danos diretos ao DNA dos corais e das zooxantelas, aumentar a produção de espécies reativas de oxigênio nos tecidos dos corais, causando estresse oxidativo, danificando proteínas, lipídios e outras moléculas essenciais ao funcionamento celular.</p>";
            break;
        default:
            modalDescription.innerHTML = "";
    }
}


function closeC() {
    const modal = document.querySelector("#circle-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}



  function slides() {
     let imagePaths = ['img/1.png', 'img/2.png', 'img/3.png', 'img/5.png'];
     let currentIndex = 0;
 
     setInterval(() => {
         document.getElementById("imagensBanner").src = imagePaths[currentIndex];
         currentIndex = (currentIndex + 1) % imagePaths.length;
     }, 5500);
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
