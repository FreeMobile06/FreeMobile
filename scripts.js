document.addEventListener('DOMContentLoaded', () => {
    const errorMessages = document.getElementById('error-messages');
    const alertMessage = document.getElementById('alert-message');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');

    // Fonction pour ajouter des pages d'erreur
    const addErrorPages = () => {
        const messages = [
            "Votre appareil a détecté une activité suspecte. Nous avons identifié des tentatives de piratage. Veuillez agir immédiatement pour protéger vos données.",
            "Alerte : Un virus a été détecté sur votre téléphone. Votre sécurité est compromise. Veuillez effectuer une analyse complète du système pour éviter toute perte de données.",
            "Attention : Un logiciel malveillant a été trouvé. Il est fortement recommandé de ne pas utiliser votre appareil avant d'avoir résolu ce problème.",
            "Erreur critique : Votre appareil semble avoir été compromis. Des données sensibles pourraient être exposées. Contactez le support technique immédiatement.",
            "Attention ! Des intrusions non autorisées ont été détectées. Assurez-vous de changer vos mots de passe et d'exécuter une analyse antivirus.",
            "Votre système d'exploitation a été endommagé. La sécurité de votre appareil est en danger. Vous n'êtes plus en sécurité. VOTRE CAMERA EST SOUS CONTRÔLE !!"
        ];

        for (let i = 0; i < messages.length; i++) {
            const errorPage = document.createElement('div');
            errorPage.className = 'error-page';
            errorPage.style.setProperty('--i', i);
            errorPage.style.opacity = '0'; // Initialement caché

            // Ajouter un texte au div
            errorPage.innerHTML = `<h3> DANGER système</h3><p>${messages[i]}</p>`;
            errorMessages.appendChild(errorPage);
        }

        // Appliquer une rotation aléatoire à chaque page d'erreur
        document.querySelectorAll('.error-page').forEach((page) => {
            const rotation = Math.floor(Math.random() * 61) - 30; // Valeur entre -30 et 30 degrés
            page.style.transform = `rotate(${rotation}deg) translate(-50%, -50%)`;
        });
    };

    // Fonction pour afficher les messages d'erreur et le signe d'avertissement
    const showErrorMessages = () => {
        errorMessages.classList.add('show');
        alertMessage.style.opacity = '1';

        // Ajouter des pages d'erreur
        addErrorPages();

        // Faire disparaître le message d'alerte après 4 secondes
        setTimeout(() => {
            alertMessage.style.opacity = '0';
        }, 4000);

        // Faire apparaître les pages d'erreur avec un délai de 500ms entre chaque, en ordre normal
        const errorPages = document.querySelectorAll('.error-page');
        errorPages.forEach((page, index) => {
            // Calculer le délai pour chaque page d'erreur en partant de la première à la dernière
            setTimeout(() => {
                page.style.opacity = '1';
                page.style.transform = 'translate(calc(-50% + 165px), -00%)';
            }, 500 * index); // Utiliser l'index directement pour l'ordre normal
        });

        // Apparition du signe d'avertissement clignotant après 2 secondes
        setTimeout(() => {
            const warningSign = document.getElementById('warning-sign');
            warningSign.style.display = 'block';
        }, 2000);

        // Gestion de la barre de progression
        let progress = 0;
        const updateProgress = () => {
            if (progress <= 100) {
                progressFill.style.width = `${progress}%`;
                progressPercentage.textContent = `${progress}%`;
                progress += 1;
                setTimeout(updateProgress, 100); // Vitesse de progression
            }
        };

        // Démarrer la progression
        updateProgress();
    };

    // Démarrer l'affichage des erreurs après 1 seconde
    setTimeout(() => {
        showErrorMessages();
    }, 1000);
});
