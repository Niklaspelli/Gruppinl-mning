"strict";
//Order meddelanden om man trycker på "Beställ" knappen + uppdaterar sidan.
function myOrder() {
  alert("Tack för din order. Ett bekräftelsemail skickas till dig omgående.");
  location.replace(location.href);
}
//Meddelanden om man trycker på "Skicka" knappen + uppdaterar sidan.
function myMessage() {
  alert("Tack för ditt mail. Vi svarar inom 24tim alla vardagar.");
  location.replace(location.href);
}
//Meddelanden om man trycker på "Skicka in" knappen + uppdaterar sidan.
function mySend() {
  alert("Tack för din ansökan. Vi kontaktar dig inom en snar framtid.");
  location.replace(location.href);
}

// Gjort av Simon
