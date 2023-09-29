
// THIS  WORKS WITH "DATA". IT  EXTRACT  THE "CODES"


const data = document.querySelectorAll(".data");
const countries = document.querySelectorAll(".countries");
const countryCodes = document.querySelectorAll(".codes");
const btn = document.getElementById("btn");




  const clearData = btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/";
  })


const fetchCodes = data.forEach(jsonData => {
    jsonData.addEventListener("click", async (e) => {
      e.preventDefault();


      const url = e.target.getAttribute("data-url"); // Obtener la URL del atributo data-url
      try {
        const response = await fetch(url);
        const jsonData = await response.json();


        // Get the codes from the JSON
        const codesID = jsonData.map(item => item.Code);


        // Remove duplicates from the array
        const uniqueCodesSet = [...new Set(codesID)];
        const uniqueCodes = Array.from(uniqueCodesSet);
        // Render the Codes in an unordered list
        const listItems = uniqueCodes.map(code => {
          const listItem = document.createElement("li");
          listItem.innerText = code;
          return listItem;
        });

        // Add the list items to the unordered list
         const list = document.getElementById("codeList");
         console.log(list)
         listItems.forEach(listItem => list.appendChild(listItem));


      btn.style.display = "block";

      } catch (error) {
        console.error("Error al obtener JSON:", error);
      }
    }
    )
});

