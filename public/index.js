
//const data = document.querySelectorAll(".data");
//const countries = document.querySelectorAll(".countries");
//const countryCodes = document.querySelectorAll(".codes");
const btn = document.getElementById("btn");





document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".data, .countries, .codes");


  btn.addEventListener('click', (e) => {
      (e.preventDefault());
      window.location.href = '/';
  })




  links.forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const url = e.target.getAttribute("data-url"); // Obtener la URL del atributo data-url
      try {
        const response = await fetch(url);
        const data = await response.json();
        const jsonContainer = document.getElementById("json-container");
        jsonContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

        btn.style.display = "block";
      } catch (error) {
        console.error("Error al obtener JSON:", error);
      }
    });

  });
});
