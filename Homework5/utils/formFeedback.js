export function showFormFeedback(feedbackEl, type, message) {
  if (!feedbackEl) return;
  feedbackEl.hidden = false;
  feedbackEl.className = `form-feedback form-feedback--${type}`;
  feedbackEl.innerHTML = `<span class="form-feedback__icon">${
    type === "success" ? "✓" : "⚠"
  }</span><span>${message}</span>`;
}

export function clearFormFeedback(feedbackEl) {
  if (!feedbackEl) return;
  feedbackEl.hidden = true;
  feedbackEl.innerHTML = "";
}

export function clearFieldErrors(form) {
  form
    .querySelectorAll(".field input")
    .forEach((input) => input.classList.remove("invalid"));
}

export function markInvalid(form, fieldMap) {
  Object.entries(fieldMap).forEach(([name, isInvalid]) => {
    if (isInvalid && form.elements[name]) {
      form.elements[name].classList.add("invalid");
    }
  });
}