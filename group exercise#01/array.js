import React from 'react';

function App() {
  const people = ["Greg", "Mary", "Devon", "James"];

  // 1. Menggunakan for-loop
  console.log("Menggunakan for-loop:");
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }

  // 2. Menggunakan forEach()
  console.log("Menggunakan forEach():");
  people.forEach(person => {
    console.log(person);
  });

  // 3. Menghapus "Greg" dari array
  const indexToRemove1 = people.indexOf("Greg");
  if (indexToRemove1 > -1) {
    people.splice(indexToRemove1, 1);
  }
  console.log("Setelah menghapus Greg:", people);

  // 4. Menghapus "James" dari array
  const indexToRemove2 = people.indexOf("James");
  if (indexToRemove2 > -1) {
    people.splice(indexToRemove2, 1);
  }
  console.log("Setelah menghapus James:", people);

  // 5. Menambahkan "Matt" ke depan array
  people.unshift("Matt");
  console.log("Setelah menambahkan Matt di depan:", people);

  // 6. Menambahkan nama Anda ke akhir array
  const myName = "Nama Saya";
  people.push(myName);
  console.log("Setelah menambahkan nama saya di belakang:", people);

  // 7. Menggunakan for-loop, keluar setelah console.log-ing "Mary"
  console.log("Menggunakan for-loop, keluar setelah console.log-ing Mary:");
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }

  // 8. Membuat salinan array menggunakan slice, tanpa "Mary" dan "Matt"
  const newPeople = people.slice(2);
  console.log("Salinan array baru:", newPeople);

  // 9. Menghapus "Devon" dari array dan menambahkan "Elizabeth" dan "Artie"
  const indexToRemove3 = people.indexOf("Devon");
  if (indexToRemove3 > -1) {
    people.splice(indexToRemove3, 1, "Elizabeth", "Artie");
  }
  console.log("Setelah menghapus Devon dan menambahkan Elizabeth dan Artie:", people);

  // 10. Membuat variabel baru dengan nama withBob, yang berisi array people ditambah "Bob"
  const withBob = [...people, "Bob"];
  console.log("Variabel withBob:", withBob);

  return (
    <div>
      <h1>Array Exercises</h1>
      <p>Lihat konsol untuk hasil dari setiap latihan.</p>
    </div>
  );
}

export default App;
