// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire, les champs de saisie, ainsi que les éléments span
// dans lequels on placera les messages d'erreur

var form  = document.getElementsByTagName('form')[0];
var lastname = document.getElementById('lastname');
var firstname = document.getElementById('firstname');
var age = document.getElementById('age');
var email = document.getElementById('mail');
var email2 = document.getElementById('mail-confirmation');
var pwd = document.getElementById('pwd');
var pwd2 = document.getElementById('pwd-confirmation');
var cguY = document.getElementById('cgu-yes');

lastname.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ lastname.
  if (lastname.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = lastname.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

firstname.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ firstname.
  if (firstname.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = firstname.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

age.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ age.
  if (age.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = age.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

email.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail.
  if (email.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = email.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

email2.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ e-mail de confirmation.
  if (email2.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = email2.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

pwd.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ password.
  if (pwd.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = pwd.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

pwd2.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ password de confirmation.
  if (pwd2.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = pwd2.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

cguY.addEventListener("input", function (event) {
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ cguY.
  if (cguY.validity.valid) {
    // S'il y a un message d'erreur affiché et que le champ
    // est valide, on retire l'erreur
    const error = document.getElementById('cgu-no').nextElementSibling.nextElementSibling;
    error.innerHTML = ""; // On réinitialise le contenu
    error.className = "error"; // On réinitialise l'état visuel du message
  }
}, false);

form.addEventListener("submit", function (event) {
  // Chaque fois que l'utilisateur tente d'envoyer les données
  // on vérifie que les champs de saisie sont valides.
  let thereIsAnError = false;
  let error;
  if (!lastname.validity.valid) {
    // S'il est invalide, on affiche un message d'erreur personnalisé
    error = lastname.nextElementSibling;
    if (lastname.validity.valueMissing) {
      error.innerHTML = "Le nom ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends un nom correct !";
    }
    thereIsAnError = true; 
  } else if (!firstname.validity.valid) {
    error = firstname.nextElementSibling;
    if (firstname.validity.valueMissing) {
      error.innerHTML = "Le prénom ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends un prénom correct d'au moins 3 lettres !";
    }
    thereIsAnError = true; 
  } else if (!age.validity.valid) {
    error = age.nextElementSibling;
    if (age.validity.valueMissing) {
      error.innerHTML = "L'âge ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends un âge correct supérieur à 18 ans !";
    }
    thereIsAnError = true; 
  } else if (!email.validity.valid) {
    error = email.nextElementSibling;
    if (email.validity.valueMissing) {
      error.innerHTML = "L'adresse e-mail ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends une adresse e-mail correcte suivant un pattern d'email classique !";
    }
    thereIsAnError = true; 
  } else if (!email2.validity.valid) {
    error = email2.nextElementSibling;
    if (email2.validity.valueMissing) {
      error.innerHTML = "L'adresse e-mail de confirmation ne peut pas être vide !";
    }
    thereIsAnError = true; 
  } else if (!pwd.validity.valid) {
    error = pwd.nextElementSibling;
    if (pwd.validity.valueMissing) {
      error.innerHTML = "Le mot de passe ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends un mot de passe correct d'au moins 6 lettres !";
    }
    thereIsAnError = true; 
  } else if (!pwd2.validity.valid) {
    error = pwd2.nextElementSibling;
    if (pwd2.validity.valueMissing) {
      error.innerHTML = "Le mot de passe de confirmation ne peut pas être vide !";
    }
    thereIsAnError = true; 
  } else if (!cguY.validity.valid) {
    error = document.getElementById('cgu-no').nextElementSibling.nextElementSibling;
    if (cguY.validity.valueMissing) {
      error.innerHTML = "L'acception ou le refus des CGU ne peut pas être vide !";
    } else {
      error.innerHTML = "J'attends une acception ou un refus des CGU !";
    }
    thereIsAnError = true; 
  } else if (email2.value != email.value) {
    console.log(email2.value, email.value);
    error = email2.nextElementSibling;
    error.innerHTML = "J'attends une adresse e-mail qui confirme la première adresse e-mail saisie !";
    thereIsAnError = true; 
  } else if (pwd2.value != pwd.value) {
    console.log(pwd2.value, pwd.value);
    error = pwd2.nextElementSibling;
    error.innerHTML = "J'attends un mot de passe qui confirme le premier mot de passe saisi !";
    thereIsAnError = true; 
  }
  if (thereIsAnError) {
    error.className = "error active";
    // Et on empêche l'envoi des données du formulaire
    event.preventDefault();
  }
}, false);
