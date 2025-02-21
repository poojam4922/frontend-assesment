document.querySelectorAll(".pricing-container").forEach((container) => {
  const options = container.querySelector(".options-container");
  const input = container.querySelector(".radio input");

  container.addEventListener("click", () => {
    // Hide options for all containers first
    document
      .querySelectorAll(".pricing-container")
      .forEach((otherContainer) => {
        const otherOptions = otherContainer.querySelector(".options-container");
        const otherInput = otherContainer.querySelector(".radio input");
        if (otherOptions !== options) {
          otherOptions.style.opacity = "0";
          otherOptions.style.transform = "translateY(-10px)";
          otherOptions.style.display = "none";
          otherInput.checked = false;
        }
      });

    // Show options for the clicked container
    options.style.display = "flex";
    options.style.opacity = "1";
    options.style.transform = "translateY(0)";
    input.checked = true;
  });
});
