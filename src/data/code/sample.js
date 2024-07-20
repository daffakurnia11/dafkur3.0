// Javascript
const arr = ["Daffa", "Kurnia", "Fatah"];

function greeting() {
  const name = arr.find((item) => item === "Daffa");
  return `Hello, ${name}!`;
}

console.log(greeting()); // Hello, Daffa!
