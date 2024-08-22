// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const errorMessages = document.getElementById('error-messages');
    const alertMessage = document.getElementById('alert-message');
    
    // Fonction pour ajouter des pages d'erreur
    const addErrorPages = () => {
        const messages = [
            "Votre appareil a détecté une activité suspecte. Nous avons identifié des tentatives de piratage. Veuillez agir immédiatement pour protéger vos données.",
            "Alerte : Un virus a été détecté sur votre téléphone. Votre sécurité est compromise. Veuillez effectuer une analyse complète du système pour éviter toute perte de données.",
            "Attention : Un logiciel malveillant a été trouvé. Il est fortement recommandé de ne pas utiliser votre appareil avant d'avoir résolu ce problème.",
            "Erreur critique : Votre appareil semble avoir été compromis. Des données sensibles pourraient être exposées. Contactez le support technique immédiatement.",
            "Attention ! Des intrusions non autorisées ont été détectées. Assurez-vous de changer vos mots de passe et d'exécuter une analyse antivirus.",
            "Message d'erreur : Votre système d'exploitation a détecté des anomalies potentielles. La sécurité de votre appareil est en danger. Mettez à jour vos logiciels de sécurité."
        ];

        for (let i = 0; i < messages.length; i++) {
            const errorPage = document.createElement('div');
            errorPage.className = 'error-page';
            errorPage.style.setProperty('--i', i);
            errorPage.style.opacity = '0'; // Initialement caché

            // Ajouter un texte au div
            errorPage.innerHTML = `<h3>Erreur système</h3><p>${messages[i]}</p>`;
            errorMessages.appendChild(errorPage);
        }

        // Appliquer une rotation aléatoire à chaque page d'erreur
        document.querySelectorAll('.error-page').forEach((page) => {
            const rotation = Math.floor(Math.random() * 61) - 30; // Valeur entre -30 et 30 degrés
            page.style.transform = `rotate(${rotation}deg)`;
        });
    };

    // Afficher le message d'alerte après 1 seconde
    setTimeout(() => {
        errorMessages.classList.add('show');
        alertMessage.style.opacity = '1';

        // Ajouter des pages d'erreur
        addErrorPages();

        // Faire disparaître le message d'alerte après 3 secondes
        setTimeout(() => {
            alertMessage.style.opacity = '0';
        }, 4000);

        // Faire apparaître les pages d'erreur avec un délai de 1 seconde entre chaque, en ordre inverse
        const errorPages = document.querySelectorAll('.error-page');
        const totalPages = errorPages.length;
        errorPages.forEach((page, index) => {
            // Calculer le délai pour chaque page d'erreur en partant de la dernière à la première
            setTimeout(() => {
                page.style.opacity = '1';
            }, 500 * (totalPages - index)); // Délai de 1 seconde entre chaque page d'erreur, inversé
        });

    }, 1000); // Délai de 1 seconde avant de commencer à afficher le message d'alerte
});
