
  const colorMode = document.querySelector("#colorMode");

  colorMode.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Optional: persist the setting
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });

  // Apply saved theme on load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light");
    }
  });

