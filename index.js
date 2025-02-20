document.querySelectorAll(".pricing-container").forEach((container) => {
  const options = container.querySelector(".options-container");
  const input = container.querySelector(".radio input");
  console.log(input, "input");

  container.addEventListener("mouseenter", () => {
    options.style.display = "flex";
    options.style.opacity = "1";
    options.style.transform = "translateY(0)";
    input.checked = true;
  });

  container.addEventListener("mouseleave", () => {
    options.style.opacity = "0";
    options.style.transform = "translateY(-10px)";
    options.style.display = "none";
    input.checked = false;
  });
});
