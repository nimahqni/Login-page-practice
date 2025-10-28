const input = document.getElementById("Password");
const toggle = document.getElementById("togglePassword");
toggle.addEventListener("click", () => {
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  toggle.classList.toggle("ri-eye-off-fill", !isPassword);
  toggle.classList.toggle("ri-eye-fill", isPassword);
  toggle.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
  toggle.setAttribute("aria-pressed", String(isPassword));
});
