const mailUser = prompt("Inserisci la mail per l'accesso");
console.log("La mail dell'utente è" + mailUser);

const mailList = ["utente@gmail.com", "utente1@gmail.com", "utente2@gmail.com"];

for (let i = 0; i < mailList.length; i++) {
  const mail = mailList[i];
  console.log(mail);

  if (mail === mailUser) {
    console.log("Mail riconosciuta accesso in corso");
    break;
  } else {
    console.log("Mail non riconosciuta accesso negato");
    break;
  }
}
