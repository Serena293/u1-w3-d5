/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

//const sum = 10 + 20 //soluzione valida

let a = 10;
let b = 20;
let sum = 10 + 20; // altra soluzione, ho usato let così è possibile riassegnare i valori

console.log("Esercizio A: ", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21); // Math floor arrotonda all'inter più basso, quindi considera tutti i nuemeri tra 0 e 20
console.log("Esercizio B: ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: "serena", surname: "ferraro", age: 31 };

//La prassi è di creare gli oggetti usando const poichè non ne andreamo a cambiare il contenuto ed occupatno meno spazio in memoria

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age; //delete è l'operatore che si usa per rimuovere proprità da oggetti

console.log("Esercizio D", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = "JavaScript"; //dot notation per accedere, modificare e aggiungere una proprietà.

console.log("Esercizio E: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

/*Poichè avevo precedentemente assegnato a skill una stringa e non un array (poichè ho considerato html e css linguaggi di mark up e non di programmazione)
Non ho potuto applicare direttamente il metodo push.
*/
me.skills = me.skills.split(","); //ho troasformato la mia stringa in un array
me.skills.push("HTML"); //ho aggiuto un nuovo elemento

console.log("Esercizio F: ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop(); // Ora ho un array, posso applicare .pop() direttamete.
console.log("Esercizio G: ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);
/*Ho usato un arrow function, ma const dice = function(){} è un'altra valida opzione.
Math.ceil() arrotonda il numero casuale trovato con Math.random all'intero  più alto, in questo modo escludo lo zero
e sonsidero i numeri tra 1 e 6. 
Non ho bisogno di scrivere esplicitamente return e di mettere le {} poichè è una funzione monoriga*/

dice(); //lanciamo la funzione (lanciata anche in console)
console.log("Esercizio 1: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {
  console.log("Esercizio 2: "); //solo per chiarezza in console
  if (n1 > n2) {
    console.log(`${n1} è maggiore di ${n2}`);
  } else if (n2 > n1) {
    console.log(`${n1} è maggiore di ${n2}`);
  } else {
    console.log("I numeri sono uguali");
  }
};
// Arrow function che prende due parametri
// if statement che compare i parametri e mostra in console i risultati, template literals per integrare il valore dei parametri nel console.log

whoIsBigger(5, 10);
whoIsBigger(100, 9); // lanciamo la funzione e specifichiamo i paramentri
whoIsBigger(5, 5);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (str) {
  return str.split(" ");
};

//applicato metodo split che separa la stringa ad ogni spazio (' ')
console.log("Esercizio 3: ", splitMe("Ora vado in pausa"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, boolean) => {
  if (boolean === true) {
    return str.substring(1); //Il numero tra () indica da quale posizione vogliamo 'conservare' caratteri
    //abbiamo 'saltato' la lettera in posizione e uno e tenuto tutte le altre fino alla fine
  } else {
    return str.substring(0, str.length - 1);
    //Qui abbiamo usato due parametri. Il primo inidica,come prima, da quale indice vogliamo 'conservare' i caratteri
    // 0, quindi dalla prima lettera in poi vogliamo conservare i cartteri della stinga
    // fino all' endIndex. str.length - 1 ovvero l'ultimo carattere (indipendentemente da quanti caratteri sono contenuti nella stringa)
  }
};

/*Ho usato un if per verificare la condizione richiesto.
Ho usato il metodo substing(startIndex, endIndex) 
*/

console.log("Esercizio 4: ", deleteOne("Sto imparanfo js!", true));
console.log("Esercizio 4: ", deleteOne("Sto imparanfo js!", false));
console.log("Esercizio 4: ", deleteOne("5 è un valore true", 5));
console.log("Esercizio 4: ", deleteOne("Mentre 0 è un valore falso ", 0 > -4));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  const regex = /[^a-zA-Z' ']/g;
  return str.replace(regex, ""); // il metodo replace rimpiazze tutto quello espresso dal primo parametro con quello espresso dal secondo
};
//per eliminare tutti i caratteri che non fossero lettere dell'alfabeto e spazi ho usato una regular expression
//  / indica dove l'espressione inizia e finisce
// [] racchiude i tipi di carattere che vogliamo considere, tutte le lettere sell alfabeto sia maiuscole che minuscole e gli spazi vuoti
// ^ significa no.
// Quindi qualsiasi carettere che NON è una lettera o uno spazio verà esclusa

console.log("Esercizio 5: ", onlyLetters("CIAO 56, CIAO"));
console.log("Esercizio 5: ", onlyLetters("76|=9875Ciao,.Hello,598375289,Hola"));
console.log("Esercizio 5: ", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* const isThisAnEmail = (email) => {
  let regex = /[@/.com//.it/]/
  if (email.toLowerCase().match(regex) ){
console.log('valid email address')
  } else {console.log('Email not valid')}
} 
  
console.log(isThisAnEmail('serena@gmail.com'))

console.log(isThisAnEmail('serenagmail'))*/
//primo tentativo, ma non funziona. L'idea era di considerare come email valida ogni stringa che contensse una @ o .com e .it (non molto preciso)

// approccio 2:
const isThisAnEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //questa è una regular expression che viene usata per validare gli indirizzi email
  //il + separe le diverse parti dell'indizzo

  if (regex.test(email)) {
    // il metodo test valuta se tutto quello contenuto nella variabile regex è aplicabibile all'email
    console.log("Valid email address");
  } else {
    console.log("Email not valid");
  }
};

isThisAnEmail("serena@gmail.com");
isThisAnEmail("serena.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const date = new Date(); //Importiamo la data
  const dayIndex = date.getDay(); //estrapoliamo il valore numerico corrispondente al giorno della settimana
  const daysOfTheWeek = [
    "Lunedì", // 0
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ]; // creaiamo un Array con i nomi della settima (indice parte da 0, come i tutti gli array)

  const day = daysOfTheWeek[dayIndex - 1];
  // calcoliamo a che giorno corrispone il valore numerico dayIndex
  //Si prende il giorno della settimana dall'Array e si usa come indice il valore numerico (dayIndex) -1
  //sottraiamo 1 perchè gli indici degli Array partono da 0

  return day;
};
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (num) => {
  const result = {
    sum: 0,
    values: [],
  }; // array dove conservare tutti i valori

  for (let i = 0; i < num; i++) {
    //loop che rilancia la funzione un nuemero di volte pari al parametro (num)
    const luckyNumber = dice(); //assegno la funzione creata precedentemente ad una  nuova costante

    result.values.push(luckyNumber); //Inserisco il valore estratto nell'arry esistente
    result.sum += luckyNumber; // Somma di tutti i valori estratti
  }

  return result;
};
console.log("Esercizio 8: ", rollTheDices(5));
console.log("Esercizio 8: ", rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  const today = new Date(); //importo la data

  const otherDate = new Date(date); //data presa dal paramentro

  const diffDateMilliseconds = today - otherDate; //differenza di tempo in millisecondi

  const diffInDays = Math.abs(
    Math.floor(diffDateMilliseconds / (1000 * 60 * 60 * 24))
  ); //conversione in giorni
  return diffInDays;
};
console.log(howManyDays("2024-10-17")); //la data va messa nel format anno-mese-giorno

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (date) => {
  const myBirthDay = new Date(date); //importo una data(compleanno)
  const today = new Date(); //data di oggi

  myBirthDay === today
    ? console.log("è il mio compleanno")
    : console.log("Oggi non è il mio compleanno"); //verifico se le date corrispondono
};
isTodayMyBirthday(2 - 28);



const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (str, obj) => {
  delete obj[str];
  return obj;
};  //questa funzione accetta una stringa e un oggetto e soddisfa i requisiti dell'esercizio
// bisogna usare [] e non la dot notation poichè il nome della propietà è contenuto in una variabile
console.log(
  "Esercizio 11: ",
  deleteProp('lastName', { name: "Serena", lastName: "Ferraro" })
);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = () => {
  let latestYear = 0;  //assegnamo un valore numerico alla varible come punto di partenza

  for (let i = 0; i < movies.length; i++) { // facciamo un loop che percorra tutto l'array
    let currentYear = movies[i].Year; //e assegna a latestYear ogni volta il valore dell'anno del film che sta ciclando in quel momento
    if (currentYear > latestYear) { // compariamo gli anni e il più recento lo assegnamo a latestYear
      latestYear = currentYear; // Aggiorna l'anno più recente
    }
  }
  return latestYear
}
console.log(newestMovie())
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () => {
  let numberOfMovies = 0 //inizamo a contare da 0
  movies.forEach((item)=>{numberOfMovies += 1}) //forEach per contare i film uno alla volta (conta il numero di oggeti)
  return numberOfMovies
}
console.log(countMovies())

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears =( )=> {
  
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */