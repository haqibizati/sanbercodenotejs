const people = [
  { name: "John", age: 28 },
  { name: "Haqi", age: 26 },
  { name: "Sanz", age: 22 },
];

const above25 = people.filter((person) => person.age > 25);

console.log(above25);
