/**
 * @typedef {object} DtoIn
 * @property {number} count - Number of employees to generate.
 * @property {AgeRange} age - Allowed age range.
 */

/**
 * @typedef {object} AgeRange
 * @property {number} min - Minimum allowed age.
 * @property {number} max - Maximum allowed age.
 */

/** @type {string[]} List of female first names */
const femaleNames = ["Adéla", "Alena", "Alexandra", "Alice", "Alžběta", "Andrea", "Aneta", "Anežka", "Anna", "Barbora", "Blanka", "Bohumila", "Dagmar", "Dana", "Daniela", "Denisa", "Dominika", "Dita", "Edita", "Eliška", "Ema", "Eva", "Gabriela", "Hana", "Helena", "Irena", "Iva", "Ivana", "Iveta", "Ivona", "Jana", "Jarmila", "Jaroslava", "Jindřiška", "Jiřina", "Jitka", "Kamila", "Karolína", "Kateřina", "Klára", "Kristýna", "Lenka", "Libuše", "Linda", "Lucie", "Ludmila", "Magdaléna", "Mahulena", "Marie", "Markéta", "Marta", "Martina", "Michaela", "Milada", "Milena", "Miloslava", "Monika", "Naděžda", "Natálie", "Nikola", "Olga", "Pavla", "Pavlína", "Petra", "Radka", "Romana", "Růžena", "Simona", "Stanislava", "Šárka", "Tereza", "Vendula", "Věra", "Veronika", "Zuzana"];
/** @type {string[]} List of male first names */
const maleNames = ["Adam", "Aleš", "Alois", "Antonín", "Bedřich", "Bohumil", "Bohuslav", "Daniel", "David", "Dominik", "Dušan", "Eduard", "Emil", "Erik", "Filip", "František", "Hanuš", "Hynek", "Igor", "Ivan", "Ivo", "Jáchym", "Jakub", "Jan", "Jaromír", "Jaroslav", "Jindřich", "Jiří", "Josef", "Kamil", "Karel", "Kryštof", "Ladislav", "Libor", "Lubomír", "Luboš", "Luděk", "Ludvík", "Lukáš", "Lumír", "Marcel", "Marek", "Marian", "Martin", "Matěj", "Matouš", "Michal", "Milan", "Miloš", "Miloslav", "Miroslav", "Oldřich", "Ondřej", "Patrik", "Pavel", "Petr", "Prokop", "Radek", "Radim", "Radomír", "René", "Richard", "Robert", "Roman", "Rostislav", "Rudolf", "Stanislav", "Šimon", "Štěpán", "Tadeáš", "Tomáš", "Václav", "Viktor", "Vilém", "Vojtěch"];
/** @type {string[]} List of female surnames */
const femaleSurnames = ["Bártová", "Bartošová", "Bednářová", "Benešová", "Beranová", "Bláhová", "Blažková", "Burešová", "Čermáková", "Černá", "Doležalová", "Dostálová", "Dušková", "Dvořáková", "Fialová", "Hájková", "Havlíčková", "Holubová", "Horáková", "Hrdličková", "Hrubá", "Hrušková", "Jandová", "Jelínková", "Kadlecová", "Kolářová", "Konečná", "Kopecká", "Kovářová", "Králová", "Kratochvílová", "Křížová", "Kučerová", "Kunová", "Lišková", "Machová", "Malá", "Marková", "Marešová", "Mašková", "Moravcová", "Müllerová", "Musilová", "Navrátilová", "Němcová", "Nováková", "Novotná", "Pavlíková", "Pokorná", "Poláková", "Pospíšilová", "Procházková", "Růžičková", "Říhová", "Sedláčková", "Sikorová", "Slavíková", "Soukupová", "Staňková", "Svobodová", "Sýkorová", "Šafářová", "Ševčíková", "Šimková", "Šťastná", "Štěpánková", "Tichá", "Tůmová", "Urbanová", "Váchová", "Vachová", "Vaňková", "Vávrová", "Veselá", "Vítová", "Vlčková", "Zemanová"];
/** @type {string[]} List of male surnames */
const maleSurnames = ["Bárta", "Bartoš", "Bednář", "Beneš", "Beran", "Bláha", "Blažek", "Bureš", "Čermák", "Černý", "Doležal", "Dostál", "Dušek", "Dvořák", "Fiala", "Hájek", "Havlíček", "Holub", "Horák", "Hrdlička", "Hrubý", "Hruška", "Janda", "Jelínek", "Kadlec", "Kolář", "Konečný", "Kopecký", "Kovář", "Král", "Kratochvíl", "Kříž", "Kučera", "Kuna", "Liška", "Mach", "Malý", "Marek", "Mareš", "Mašek", "Moravec", "Müller", "Musil", "Navrátil", "Němec", "Novák", "Novotný", "Pavlík", "Pokorný", "Polák", "Pospíšil", "Procházka", "Růžička", "Říha", "Sedláček", "Šubrt", "Sýkora", "Slavík", "Soukup", "Staněk", "Svoboda", "Ševčík", "Šimek", "Šťastný", "Štěpánek", "Tichý", "Tůma", "Urban", "Vácha", "Vach", "Vaněk", "Vávra", "Veselý", "Vít", "Vlček", "Zeman"];
/** @type {number[]} Possible weekly workloads in hours */
const workloads = [10, 20, 30, 40];
/** @type {string[]} Supported genders */
const genders = ["male", "female"];

/**
 * @typedef {object} Employee
 * @property {"male" | "female"} gender - Gender of the employee.
 * @property {string} birthdate - Birthdate in ISO format.
 * @property {string} name - First name.
 * @property {string} surname - Last name.
 * @property {number} workload - Weekly workload in hours (10, 20, 30, or 40).
 */
class Employee {
  constructor(gender, birthdate, name, surname, workload) {
    this.gender = gender;
    this.birthdate = birthdate;
    this.name = name;
    this.surname = surname;
    this.workload = workload;
  }
}

/**
 * Function for randomly selecting a gender.
 * @returns {string} Randomly selected gender.
 */
function getRandomGender() {
  const randomIndex = Math.floor(Math.random() * genders.length);
  return genders[randomIndex];
}

/**
 * Function for randomly selecting a name based on gender.
 * @param {string} gender - Gender for which the name should be selected.
 * @returns {string} Chosen name.
 */
function getRandomName(gender) {
  let sourceArray;
  if (gender === "male") {
    sourceArray = maleNames;
  } else {
    sourceArray = femaleNames;
  }
  const randomIndex = Math.floor(Math.random() * sourceArray.length);
  return sourceArray[randomIndex];
}

/**
 * Function for randomly selecting a surname based on gender.
 * @param {string} gender - Gender for which the surname should be selected.
 * @returns {string} Chosen surname.
 */
function getRandomSurname(gender) {
  let sourceArray;
  if (gender === "male") {
    sourceArray = maleSurnames;
  } else {
    sourceArray = femaleSurnames;
  }
  const randomIndex = Math.floor(Math.random() * sourceArray.length);
  return sourceArray[randomIndex];
}

/**
 * Function for generating a random birthdate based on the specified age range.
 * @param {number} minAge - Minimum age.
 * @param {number} maxAge - Maximum age.
 * @returns {string} Date in ISO format.
 */
function getRandomBirthdate(minAge, maxAge) {
  const today = new Date();
  const oldest = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
  const youngest = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  const minTime = oldest.getTime();
  const maxTime = youngest.getTime();
  const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return new Date(randomTime).toISOString();
}

/**
 * Function for randomly selecting a workload from the predefined options.
 * @returns {number} Chosen workload (10, 20, 30, or 40).
 */
function getWorkload() {
  const randomIndex = Math.floor(Math.random() * workloads.length);
  return workloads[randomIndex];
}

/**
 * Generates a list of random employees based on the input parameters.
 * @param {DtoIn} dtoIn - Input parameters.
 * @returns {Employee[]} Generated employees.
 */
export function main(dtoIn) {
  // Validate input parameters
  if (dtoIn.count <= 0 || dtoIn.age.min > dtoIn.age.max) {
    console.error("Invalid input: Count must be > 0 and min age must be <= max age.");
    return [];
  }
  // Array for storing generated employee objects
  const employees = [];
  for (let i = 0; i < dtoIn.count; i++) {
    const gender = getRandomGender();
    const birthdate = getRandomBirthdate(dtoIn.age.min, dtoIn.age.max);
    const name = getRandomName(gender);
    const surname = getRandomSurname(gender);
    const workload = getWorkload();
    employees.push(new Employee(gender, birthdate, name, surname, workload));
  }
  const dtoOut = employees;
  return dtoOut;
}


console.table(main({ count: 5, age: { min: 18, max: 65 } }));