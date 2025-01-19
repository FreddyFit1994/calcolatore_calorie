// Aggiungi un listener per il submit del modulo
document.getElementById("calorie-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita il refresh della pagina

  // Ottieni i dati inseriti dall'utente
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);
  const goal = parseFloat(document.getElementById("goal").value);

  // Validazione di base dei dati
  if (isNaN(age) || isNaN(height) || isNaN(weight) || !gender || isNaN(activity) || isNaN(goal)) {
    alert("Per favore, compila correttamente tutti i campi.");
    return;
  }

  // Formula BMR (Calcolo metabolismo basale)
  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calcolo TDEE (fabbisogno giornaliero totale)
  const tdee = bmr * activity;

  // Calcolo delle calorie per l'obiettivo
  const targetCalories = tdee * goal;

  // Mostra i risultati
  const output = `
    <p>Il tuo metabolismo basale (BMR) è di circa <strong>${Math.round(bmr)}</strong> kcal.</p>
    <p>Il tuo fabbisogno calorico giornaliero (TDEE) è di circa <strong>${Math.round(tdee)}</strong> kcal.</p>
    <p>Per raggiungere il tuo obiettivo, dovresti consumare circa <strong>${Math.round(targetCalories)}</strong> kcal al giorno.</p>
  `;
  document.getElementById("calories-output").innerHTML = output;

  // Evidenzia i risultati
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});
