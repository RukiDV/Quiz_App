const dark_mode_input = document.querySelector('[data-js="dark-mode-input"]');

if (dark_mode_input)
{
  dark_mode_input.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    
    // store it in the browser
    const is_dark_mode = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", is_dark_mode);
  });

  // when reloading page check if it was active before
  const saved_dark_mode = localStorage.getItem("darkMode");
  if (saved_dark_mode === "true")
    {
    document.body.classList.add("dark");
    dark_mode_input.checked = true;
  }
}