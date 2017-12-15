//Array Cardio 1
const inventors = [
     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
   ];

const people = ['Beck Glenn', 'Becker Carl', 'Beckett Samuel', 'Beddoes Mick', 'Beecher Henry', 'Beethoven Ludwig', 'Begin Menachem', 'Belloc Hilaire', 'Bellow Saul', 'Benchley Robert', 'Benenson Peter', 'Ben-Gurion David', 'Benjamin Walter', 'Benn Tony', 'Bennington Chester', 'Benson Leana', 'Bent Silas', 'Bentsen Lloyd', 'Berger Ric', 'Bergman Ingmar', 'Berio Luciano', 'Berle Milton', 'Berlin Irving', 'Berne Eric', 'Bernhard Sandra', 'Berra Yogi', 'Berry Halle', 'Berry Wendell', 'Bethea Erin', 'Bevan Aneurin', 'Bevel Ken', 'Biden Joseph', 'Bierce Ambrose', 'Biko Steve', 'Billings Josh', 'Biondo Frank', 'Birrell Augustine', 'Black Elk', 'Blair Robert', 'Blair Tony', 'Blake William'];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// Exercise 1 : Array filtering || Array.prototype.filter() : Filter the list of inventors for those who were born in the 1500's

   const fifteen = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600));

   let pInv = document.getElementById('inventors');

   for (let i = 0; i < fifteen.length ; i++) {
    var sName = document.createElement("span");
    var sYear = document.createElement("span");
    sName.append(fifteen[i].first + ' ' + fifteen[i].last + ' ');
     sYear.append(fifteen[i].year + " - " + fifteen[i].passed + '\n');
     pInv.appendChild(sName);
     pInv.appendChild(sYear);
   }

   console.table(fifteen);

// Exercise 2 : Array map || Array.prototype.map() : Give us an array of the inventors' first and last names

 const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

 let fN = document.getElementById('fullName');

 for (let i = 0; i < fullName.length ; i++) {
   fN.append(fullName[i] + '\n');
 }

 console.log(fullName);

 // Exercise 3 : Array sorting || Array.prototype.sort() : Sort the inventors by birthdate, oldest to youngest

 const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

 let ord = document.getElementById('ordered');

 for (let i = 0; i < ordered.length ; i++) {
   var sName = document.createElement("span");
   var sYear = document.createElement("span");
   sName.append(ordered[i].first + ' ' + ordered[i].last + ' ');
    sYear.append(ordered[i].year + " - " + ordered[i].passed + '\n');
    ord.appendChild(sName);
    ord.appendChild(sYear);
 }

 console.table(ordered);

 // Exercice 4 : Array Reducing || Array.prototype.reduce() :  How many years did all the inventors live?

 const yearsOfLife = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);

 var spanY = document.createElement("span");
 spanY.append(yearsOfLife);
 let years = document.getElementById('years').prepend(spanY);

console.log(yearsOfLife);

 // Exercice 5 : Array.prototype.sort() || Sort the inventors by years lived

 const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});

let older = document.getElementById('older');

for (let i = 0; i < oldest.length ; i++) {
  var sName = document.createElement("span");
  var sYear = document.createElement("span");
  sName.append(oldest[i].first + ' ' + oldest[i].last + ' ');
   sYear.append(oldest[i].passed - oldest[i].year + ' years old\n');
   older.appendChild(sName);
   older.appendChild(sYear);
}
console.table(oldest);

 // Exercice 6 : Array.prototype.reduce() || Create a list of Boulevards in Paris that contain 'de' anywhere in the name (https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)

 /* const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a'));
    const de = links
                 .map(link => link.textContent)
                 .filter(streetName => streetName.includes('de'));*/


 // Exercice 7 : Array sorting || Array.prototype.sort() : Sort the people alphabetically by last name

 const alpha = people.sort((lastOne, nextOne) => {
   const [aLast, aFirst] = lastOne.split(' ');
   const [bLast, bFirst] = nextOne.split(' ');
   return aLast > bLast ? 1 : -1;
 });
 console.log(alpha);

 let pp = document.getElementById('people');

 for (let i = 0; i < alpha.length ; i++) {
   pp.append(alpha[i] + '\n');
 }

 // Exercice 7 : Array reduce || Array.prototype.reduce() : Sum up the instances of each of these


    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    let instance = document.getElementById('instance');
    for (prop in transportation) {
      if( transportation.hasOwnProperty( prop ) ) {
          instance.append( prop + " : " +`${transportation[prop]}` + '\n');
      }
    }
    for (let i = 0; i < transportation.length ; i++) {

    }
    console.log(transportation);
