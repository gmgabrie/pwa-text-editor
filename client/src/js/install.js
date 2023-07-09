const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered event.
  window.deferredPrompt = event;
  // Show the button.
  butInstall.classList.toggle("hidden", false);
});

// click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // When button is clicked, access the stored event.
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show prompt.
  promptEvent.prompt();

  // Reset the deferred prompt variable (it can only be used once).
  window.deferredPrompt = null;

  // Hide the button.
  butInstall.classList.toggle("hidden", true);
});

// Handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt.
  window.deferredPrompt = null;
});
