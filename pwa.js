document.addEventListener('DOMContentLoaded', () => {
  let deferredPrompt;
  const installBtn = document.getElementById('installBtn');
  if (!installBtn) {
    console.warn('installBtn element not found');
    return;
  }

  function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true; // iOS standalone detection
  }

  // Show or hide the install button based on whether app is installed
  if (isAppInstalled()) {
    installBtn.style.setProperty('display', 'none', 'important');
  } else {
    installBtn.style.setProperty('display', 'inline-block', 'important');
  }

  // Listen for beforeinstallprompt event to capture install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!isAppInstalled()) {
      installBtn.style.setProperty('display', 'inline-block', 'important');
    }
  });

  // Handle install button click to show prompt
  installBtn.addEventListener('click', () => {
    installBtn.style.setProperty('display', 'none', 'important');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    }
  });

  // Hide install button on successful app installation
  window.addEventListener('appinstalled', () => {
    installBtn.style.setProperty('display', 'none', 'important');
    console.log('PWA was installed');
  });

  // Register service worker and handle silent updates
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')  // Make sure this matches your SW file
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);

        // Reload page silently when new SW activates
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          console.log('New Service Worker activated, reloading page...');
          window.location.reload();
        });
      })
      .catch(err => console.error('Service Worker registration failed:', err));
  }
});
