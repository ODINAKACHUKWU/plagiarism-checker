export default {
  displayError(error) {
    const element = document.getElementById("error");
    const errorMessage = document.createTextNode(error);

    element.classList.add("alert", "alert-danger", "text-center");
    element.appendChild(errorMessage);
  },

  hideError() {
    const element = document.getElementById("error");
    element.style.display = "none";
  },
};
