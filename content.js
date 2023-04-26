document.addEventListener("keydown", (event) => {
  if (event.altKey) {
    if (event.key === "q") {
      const textArea = document.querySelector("textarea");
      const button = textArea.nextSibling;
      button.disabled = false;
      textArea.value = "Continue";
      button.click();
    }
    if (event.key === "w") {
      const textArea = document.querySelector("textarea");
      const button = textArea.nextSibling;
      button.disabled = false;
      textArea.value = "Please generate a summary of our above conversation";
      button.click();
    }
    if (event.key === "e") {
      const textArea = document.querySelector("textarea");
      const button = textArea.nextSibling;
      button.disabled = false;
      textArea.value = "Please explain to me like i am 5 years old, ";
    }
  }
});
