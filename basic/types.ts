/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple Type
} = {
  name: '김동규',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}; */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */
enum Role { ADMIN = 5, READ_ONLY = 'READ_ONLY', AUTHOR = 200 };

const person = {
  name: '김동규',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// array
// let fa: string[];
let fa: any[];

fa = ['Sports', 1];

console.log(person.name);

// tuple
// person.role.push('admin');

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log(Role.ADMIN);
  console.log(Role.READ_ONLY);
  console.log(Role.AUTHOR);
}