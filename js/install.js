let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');

installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    //CODELAB: Add code to save event & show the install button
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    // CODELAB: Add code show install prompt & hide the install button.
    // CODELAB: Log user response to prompt.

    deferredInstallPrompt.prompt();
    // Hide the install button, it can't be called twice.
    evt.srcElement.setAttribute('hidden', true);

    console.log('PWA installé');

    deferredInstallPrompt.userChoice
        .then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log("L'usager a installé la progressive PWA via le bouton");
            } else {
                console.log("L'usager a refusé d'installé la progressive PWA");
            }
            deferredInstallPrompt = null;
        });
}

function logAppInstalled(evt) {
    console.log("L'usager a installé la progressive PWA via les ... de chrome");
}