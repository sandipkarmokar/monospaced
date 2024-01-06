export const Javascript = `
const Person = {
  firstName: string,
  lastName: string,
  age: number,
};

function greetPerson(person) {
  const { firstName, lastName, age } = person;
  return \`Hello, \${firstName} \${lastName}! You are \${age} years old.\`;
}

function isAdult(person) {
  return person.age >= 18;
}

const john = { firstName: "John", lastName: "Doe", age: 25 };

console.log(greetPerson(john));
console.log(isAdult(john));
`;
