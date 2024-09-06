class EditableBadge {
  constructor(container) {
    this.container = container;
    this.buttonText = container.querySelector("span:first-of-type");
    this.textInput = container.querySelector("input");
    this.editIcon = container.querySelector("span:nth-of-type(2)");
    this.confirmButton = container.querySelector("span:nth-of-type(3)");

    // Agregar eventos
    this.editIcon.addEventListener("click", () => this.activateInput());
    this.confirmButton.addEventListener("click", () => this.confirmInput());
  }

  // Método para activar el modo de edición
  activateInput() {
    this.container.classList.add("input-active");
    this.textInput.focus(); // Dar foco al input
  }

  // Método para confirmar y volver al modo badge
  confirmInput() {
    const newText = this.textInput.value;
    this.buttonText.textContent = newText;

    // Volver todo a su estado inicial
    this.container.classList.remove("input-active");
  }
}

// Inicializar los badges en la página
document.querySelectorAll(".watchlist-button").forEach((button) => {
  new EditableBadge(button);
});
