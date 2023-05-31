// Funktion zur Berechnung
function calculate() {
    // Elemente aus dem DOM abrufen
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operator = document.getElementById('selects');
    const result = document.getElementById('result');

    // Variablen zur Überprüfung der Eingabeinitialisieren
    let num1Valid = false;
    let num2Valid = false;

    // Überprüfen, ob die Eingabe von num1 eine gültige Zahl ist
    if (isNaN(parseFloat(num1.value))) {
        num1Valid = true;
    } else {
        num1Valid = false;
        num1.style.backgroundColor = "white";
        result.style.backgroundColor = "white";
        result.textContent = "";
    }

    // Überprüfen, ob die Eingabe von num2 eine gültige Zahl ist
    if (isNaN(parseFloat(num2.value))) {
        num2Valid = true;
    } else {
        num2Valid = false;
        num2.style.backgroundColor = "white";
        result.style.backgroundColor = "white";
        result.textContent = "";
    }

    // Funktion zur Markierung von ungültigen Eingaben mit roter Farbe
    function markInvalid(number) {
        number.style.backgroundColor = "red";
        result.style.backgroundColor = "red";
        result.textContent = "Bitte geben Sie eine gültige Zahl ein!";
    }

    // Überprüfen und Markieren der ungültigen Eingaben
    if (num1Valid) {
        markInvalid(num1);
    }
    if (num2Valid) {
        markInvalid(num2);
    }

    // Wenn beide Eingaben gültig sind, Berechnung durchführen
    if (!num1Valid && !num2Valid) {
        if (operator.value == '+') {
            result.textContent = parseFloat(num1.value) + " " + operator.value + " " + 
                                 parseFloat(num2.value) + " = " + (parseFloat(num1.value) + parseFloat(num2.value));
        }
        if (operator.value == '-') {
            result.textContent = parseFloat(num1.value) + " " + operator.value + " " + 
                                 parseFloat(num2.value) + " = " + (parseFloat(num1.value) - parseFloat(num2.value));
        }
        if (operator.value == '*') {
            result.textContent = parseFloat(num1.value) + " " + operator.value + " " + 
                                 parseFloat(num2.value) + " = " + (parseFloat(num1.value) * parseFloat(num2.value));
        }
        if (operator.value == '/') {
            if (parseFloat(num2.value) == 0) {
                markInvalid(num2);
                result.textContent = "Division durch 0 nicht möglich!";
            } else {
                result.textContent = parseFloat(num1.value) + " " + operator.value + " " + 
                                     parseFloat(num2.value) + " = " + (parseFloat(num1.value) / parseFloat(num2.value));
            }
        }
    }
}
