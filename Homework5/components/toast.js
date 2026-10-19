let hideTimeoutId;

function getToastEl() {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  return toast;
}

export function showToast(message, type = "success") {
  const toast = getToastEl();

  clearTimeout(hideTimeoutId);
  toast.className = `toast toast--${type} toast--visible`;
  toast.innerHTML = `
    <span class="toast__icon">${type === "success" ? "✓" : "⚠"}</span>
    <span class="toast__message">${message}</span>
    <button type="button" class="toast__close" aria-label="Dismiss">&times;</button>
  `;
  toast.querySelector(".toast__close").addEventListener("click", hideToast);

  hideTimeoutId = setTimeout(hideToast, 4000);
}

export function hideToast() {
  const toast = document.getElementById("app-toast");
  if (toast) toast.classList.remove("toast--visible");
  clearTimeout(hideTimeoutId);
}