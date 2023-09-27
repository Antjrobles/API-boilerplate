

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".data, .countries, .codes");

  links.forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const url = e.target.getAttribute("data-url"); // Obtener la URL del atributo data-url
      try {
        const response = await fetch(url);
        const data = await response.json();
        const jsonContainer = document.getElementById("json-container");
        jsonContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      } catch (error) {
        console.error("Error al obtener JSON:", error);
      }
    });
  });
});
