
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
      let inputBox = document.createElement("p");
      let img = document.createElement("img"); // Corrected typo

      inputBox.className = "input-box";
      inputBox.setAttribute("contenteditable", "true");
      img.src = "delete.png";
      // img.alt = "Delete Note";
      img.addEventListener("click", () => {
            inputBox.remove();
      });

      inputBox.appendChild(img);
      notesContainer.appendChild(inputBox);
});
