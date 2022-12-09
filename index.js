function Clear() {
    window.location.reload();
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === "z") {
    alert(`Click "OK" to clear page.`);
    Clear();
  }
});