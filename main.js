export function main(dtoIn) {
  // Arrays of names, surnames, workloads, and genders
  const femalenames = ["Adéla", "Alena", "Alexandra", "Alice", "Alžběta", "Andrea", "Aneta", "Anežka", "Anna", "Barbora", "Blanka", "Bohumila", "Dagmar", "Dana", "Daniela", "Denisa", "Dominika", "Dita", "Edita", "Eliška", "Ema", "Eva", "Gabriela", "Hana", "Helena", "Irena", "Iva", "Ivana", "Iveta", "Ivona", "Jana", "Jarmila", "Jaroslava", "Jindřiška", "Jiřina", "Jitka", "Kamila", "Karolína", "Kateřina", "Klára", "Kristýna", "Lenka", "Libuše", "Linda", "Lucie", "Ludmila", "Magdaléna", "Mahulena", "Marie", "Markéta", "Marta", "Martina", "Michaela", "Milada", "Milena", "Miloslava", "Monika", "Naděžda", "Natálie", "Nikola", "Olga", "Pavla", "Pavlína", "Petra", "Radka", "Romana", "Růžena", "Simona", "Stanislava", "Šárka", "Tereza", "Vendula", "Věra", "Veronika", "Zuzana"];
  const malenames = ["Adam", "Aleš", "Alois", "Antonín", "Bedřich", "Bohumil", "Bohuslav", "Daniel", "David", "Dominik", "Dušan", "Eduard", "Emil", "Erik", "Filip", "František", "Hanuš", "Hynek", "Igor", "Ivan", "Ivo", "Jáchym", "Jakub", "Jan", "Jaromír", "Jaroslav", "Jindřich", "Jiří", "Josef", "Kamil", "Karel", "Kryštof", "Ladislav", "Libor", "Lubomír", "Luboš", "Luděk", "Ludvík", "Lukáš", "Lumír", "Marcel", "Marek", "Marian", "Martin", "Matěj", "Matouš", "Michal", "Milan", "Miloš", "Miloslav", "Miroslav", "Oldřich", "Ondřej", "Patrik", "Pavel", "Petr", "Prokop", "Radek", "Radim", "Radomír", "René", "Richard", "Robert", "Roman", "Rostislav", "Rudolf", "Stanislav", "Šimon", "Štěpán", "Tadeáš", "Tomáš", "Václav", "Viktor", "Vilém", "Vojtěch"];
  const femalesurnames = ["Bártová", "Bartošová", "Bednářová", "Benešová", "Beranová", "Bláhová", "Blažková", "Burešová", "Čermáková", "Černá", "Doležalová", "Dostálová", "Dušková", "Dvořáková", "Fialová", "Hájková", "Havlíčková", "Holubová", "Horáková", "Hrdličková", "Hrubá", "Hrušková", "Jandová", "Jelínková", "Kadlecová", "Kolářová", "Konečná", "Kopecká", "Kovářová", "Králová", "Kratochvílová", "Křížová", "Kučerová", "Kunová", "Lišková", "Machová", "Malá", "Marková", "Marešová", "Mašková", "Moravcová", "Müllerová", "Musilová", "Navrátilová", "Němcová", "Nováková", "Novotná", "Pavlíková", "Pokorná", "Poláková", "Pospíšilová", "Procházková", "Růžičková", "Říhová", "Sedláčková", "Sikorová", "Slavíková", "Soukupová", "Staňková", "Svobodová", "Sýkorová", "Šafářová", "Ševčíková", "Šimková", "Šťastná", "Štěpánková", "Tichá", "Tůmová", "Urbanová", "Váchová", "Vachová", "Vaňková", "Vávrová", "Veselá", "Vítová", "Vlčková", "Zemanová"];
  const malesurnames = ["Bárta", "Bartoš", "Bednář", "Beneš", "Beran", "Bláha", "Blažek", "Bureš", "Čermák", "Černý", "Doležal", "Dostál", "Dušek", "Dvořák", "Fiala", "Hájek", "Havlíček", "Holub", "Horák", "Hrdlička", "Hrubý", "Hruška", "Janda", "Jelínek", "Kadlec", "Kolář", "Konečný", "Kopecký", "Kovář", "Král", "Kratochvíl", "Kříž", "Kučera", "Kuna", "Liška", "Mach", "Malý", "Marek", "Mareš", "Mašek", "Moravec", "Müller", "Musil", "Navrátil", "Němec", "Novák", "Novotný", "Pavlík", "Pokorný", "Polák", "Pospíšil", "Procházka", "Růžička", "Říha", "Sedláček", "Šubrt", "Sýkora", "Slavík", "Soukup", "Staněk", "Svoboda", "Ševčík", "Šimek", "Šťastný", "Štěpánek", "Tichý", "Tůma", "Urban", "Vácha", "Vach", "Vaněk", "Vávra", "Veselý", "Vít", "Vlček", "Zeman"];
  const workloads = [10, 20, 30, 40];
  const genders = ["male", "female"];
  // Array for storing created employee objects
  const employees = [];
  // Class for employee object creation
  class Employee {
    constructor(gender, birthdate, name, surname, workload) {
      this.gender = gender;
      this.birthdate = birthdate;
      this.name = name;
      this.surname = surname;
      this.workload = workload;
    }
  }
  // Loop for creating employee objects based on input count and age range
  for (let i = 0; i < dtoIn.count; i++) {
    const gender = getRandomGender();
    const birthdate = getRandomBirthdate(dtoIn.age.min, dtoIn.age.max);
    const name = getRandomName(gender);
    const surname = getRandomSurname(gender);
    const workload = getWorkload();
    employees.push(new Employee(gender, birthdate, name, surname, workload));
  }
  // Function for randomly selecting a gender
  function getRandomGender() {
    const randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
  }
  // Function for randomly selecting a name based on gender
  function getRandomName(gender) {
    let sourceArray;
    if (gender === "male") {
      sourceArray = malenames;
    } else {
      sourceArray = femalenames;
    }
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    return sourceArray[randomIndex];
  }
  // Function for randomly selecting a surname based on gender
  function getRandomSurname(gender) {
    let sourceArray;
    if (gender === "male") {
      sourceArray = malesurnames;
    } else {
      sourceArray = femalesurnames;
    }
    const randomIndex = Math.floor(Math.random() * sourceArray.length);
    return sourceArray[randomIndex];
  }
  // Function for random birthdate generation within specified range
  function getRandomBirthdate(minAge, maxAge) {
    const today = new Date();
    const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
    const birthYear = today.getFullYear() - age;
    return new Date(birthYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString();
  }
  // Function for randomly selecting a workload
  function getWorkload() {
    const randomIndex = Math.floor(Math.random() * workloads.length);
    return workloads[randomIndex];
  }
  const dtoOut = employees;
  return dtoOut;
}