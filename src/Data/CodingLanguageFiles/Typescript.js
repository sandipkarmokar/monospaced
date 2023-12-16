export const Typescript = `
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function greetPerson(person: Person): string {
  const { firstName, lastName, age } = person;
  return \`Hello, \${firstName} \${lastName}! You are \${age} years old.\`;
}

function isAdult(person: Person): boolean {
  return person.age >= 18;
}

const john: Person = { firstName: "John", lastName: "Doe", age: 25 };

console.log(greetPerson(john)); // Output: Hello, John Doe! You are 25 years old.
console.log(isAdult(john));
`;
