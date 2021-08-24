var show = (text = undefined, tag = 'p') => {
    document.write(text != undefined ? `<${tag}>${text}</${tag}>` : '<br>');
    console.log(text != undefined ? text : '');
}
var showArray = (arr) => {
    console.log(arr);
    document.write(`<p>(${arr.length}) [ `);

    if (typeof (elt) == "Number") {
        document.write(arr.join(', '));
    }
    else {
        document.write(`"${arr.join('", "')}"`);
    }
    document.write(' ]</p>');
}




//****************************************************************************
// CodeFlow Übung lev1_1: forEach()
// In dieser Übung werden wir forEach() lernen.
// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner
// Konsole ausgibt und mit document.write() in deine index.html schreibt.
// Verwende die Liste aus dem Kommentar.
// Sortiere getraenke vorher alphabetisch.
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];
let myDrinks = () => {
    getraenke.sort().forEach(drink => {
        show(drink);
    });

}
show('CodeFlow Übung lev1_1: forEach()', 'h2');
myDrinks();
show();


//****************************************************************************
// CodeFlow Übung lev1_2: map()
// In diesr Übung werden wir map() lernen.
// Nutze das Array getraenke aus dem Kommentarbereich.
// Nutze die map() - Methode um in der neuen Variablen upperDrinks alle 
// Getränke in Großbuchstaben zu speichern.
// Wende nun diese map() Funktion an deinem Array getraenke an.
// Gib nun upperDrinks in der Konsole aus.
// Bonus: Versuche, deine Funktion in ArrowFunction umzuwandeln.
show('CodeFlow Übung lev1_2: map()', 'h2');
let upperDrinks = getraenke.map(drink => drink.toLocaleUpperCase());
showArray(upperDrinks);
show();


//****************************************************************************
// CodeFlow Übung lev1_3: map()
// Schreibe eine Funktion, die jeden Wert aus dem Array(siehe 
// Kommentarbereich) mit 2 multipliziert und das Ergebnis sortiert.
show('CodeFlow Übung lev1_3: map()', 'h2');
let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
    30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
let sortedDoubled = arr => {
    return arr.map(elt => elt * 2).sort((a, b) => a - b);
}
show('Array:', 'h3')
showArray(array);
show('Array sorted:', 'h3')
showArray(array.sort((a, b) => a - b));
show('Array sorted and doubled:', 'h3')
showArray(sortedDoubled(array));
show();


//****************************************************************************
// CodeFlow Übung lev1_4: map()
// Schreibe eine Funktion, mit Hilfe von map(), die jede Temperatur in einem Array von Fahrenheit in Celsius umwandelt.
// Verwende die mathematische Formel zum Berechnen.
// Verwende das Array im Kommentarbereich.
// Überprüfe das Ergebnis in der Konsole.
show('CodeFlow Übung lev1_4: map()', 'h2');
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
let celsius = fahrenheit.map(f => Math.round((f - 32) / 1.8));
show('Fahrenheit:', 'h3')
showArray(fahrenheit);
show('Celsius:', 'h3')
showArray(celsius);
show();


//****************************************************************************
// CodeFlow Übung lev1_4: forEach()
// Verwende die Variable checkNumber und forEach(). Wenn sich die Zahl durch 3
// teilen lässt, dann soll zu ihr 100 addiert werden.
// Verwende den Code aus dem Kommentarbereich.
// Verwenden ein if Statement, um zu überprüfen, ob die Zahl durch 3 teilbar ist.
// Wenn ja, addiere 100 zu dieser Zahl hinzu.
// Gib das Resultat in der Konsole aus.
show('CodeFlow Übung lev1_5: forEach()', 'h2');
let checkNumber = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
    30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
let checkedNumber = []
checkNumber.forEach(num => {
    if (num % 3 == 0)
        checkedNumber.push(num + 100);
    else
        checkedNumber.push(num);
});
showArray(checkedNumber);

