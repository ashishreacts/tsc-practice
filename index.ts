// 1
const arr1: number[] = [1, 2, 3, 4, 5];
const result1: number[] = arr1.map((num: number) => num * 2);
console.log(result1);
// 2
const arr2: number[] = [1, 2, 2, 3, 4, 4, 5];
const result2: number[] = arr2.filter((value, index) => arr2.indexOf(value) === index);
console.log(result2);
// 3
const arr3: string[] = ["apple", "banana", "orange"];
const result3: string[] = arr3.map((value) => value.toUpperCase());
console.log(result3);
// 4
const arr4: string[] = ["apple", "banana", "orange", "kiwi"];
const result4: string[] = arr4.filter((value: string) => value.length <= 5);
console.log(result4);
// 5
const arr5: string[] = ["hello", "world", "javascript"];
const result5: string[] = arr5.map((value: string) => value.split("").reverse().join(""));
console.log(result5);
// 6
const arr6: number[] = [5, 2, 8, 1, 4];
console.log(arr6.sort());
// 7
const arr7: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(arr7.flat());

const array7: number[][][] = [
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
];
console.log(array7.flat().flat());

// 8
const arr8: number[] = [1, 2];
const array8: number[] = [3, 4];

console.log(arr8.concat(array8));

9
type Person = {
  id: number;
  name: string;
};

const arr9: Person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Charlie" },
];

const result9: { [id: number]: Person[] } = arr9.reduce((acc, person) => {
  acc[person.id] = acc[person.id] || [];
  acc[person.id].push(person);
  return acc;
}, {});

console.log(result9);

// 10
type Item = {
  x: number;
}

const arr10: Item[] = [{ x: 1 }, { x: 2 }, { x: 3 }];
const result10: number[] = arr10.map((value: Item) => value.x);
console.log(result10);

// 11.
type PersonWithAge = {
  id: number;
  name: string;
  age: number;
}

const arr11: PersonWithAge[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const result11 = arr11.map(({ age, ...value }) => value);
console.log(result11);

// 12.
const arr12: PersonWithAge[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];
const result12 = arr12.filter((value) => value.age < 30);
console.log(result12);

// 13

const arr13: Person[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const result13 = arr13.map(({ id, name }) => ({ userId: id, fullName: name }));
console.log(result13);

// 14.
const arr14: (number | null | undefined)[] = [1, null, 3, undefined, 5];
const result14: number[] = arr14.filter((value) => value !== null && value !== undefined) as number[];
console.log(result14);

// 15.
const arr15: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
const result15: number[] = arr15.map((value) =>
  value.reduce((value, index) => value + index)
);
console.log(result15);

// 16.
type InputValue = {
  value: number;
}
const arr16: InputValue[] = [{ value: 10 }, { value: 20 }, { value: 15 }];
const result16 = arr16.reduce((max, idx) =>
  idx.value > max.value ? idx : max
);
console.log(result16);

// 17.
const array = require("lodash");
const arr17 = ["a", "b", "c"];
const arr017 = [1, 2, 3];

const result17 = array.zipObject(arr17, arr017);
console.log(result17);

// 18
const arr18: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result18: number[][] = arr18.map((value, index) =>
  arr18.map((row) => row[index]).reverse()
);

console.log(result18);

// 19.

const arr19: number[] = [1, 2, 3, 4, 5, 6, 7];
const groupSize: number = 3;

const result19: Number[][] = [];

for (let i = 0; i < arr19.length; i += groupSize) {
  result19.push(arr19.slice(i, i + groupSize));
}

console.log(result19);

// 20.

const arr20: number[] = [1, 2, 3, 4];
const array20: number[] = [3, 4, 5, 6];

const result20: number[] = arr20.filter((value) => array20.includes(value));
console.log(result20);

// 21
const arr21: Person[] = [
  { id: 2, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const result21: string[] = arr21
  .sort((value, idx) => value.id - idx.id)
  .map((values) => values.name);
console.log(result21);

// 22
type Item1 = {
  type: string;
};

const arr22: Item1[] = [
  { type: "A" },
  { type: "B" },
  { type: "A" },
  { type: "C" },
  { type: "B" },
];

const result22: { [key: string]: number } = arr22.reduce((acc, obj) => {
  acc[obj.type] = (acc[obj.type] || 0) + 1;
  return acc;
}, {});

console.log(result22);

// 23
type PersonWithCity={
    id:number;
    age?:number;
    name?:string;
    city?:string;
  }
  const arr23:PersonWithCity[] = [
    { id: 1, name: "Alice" },
    { id: 2, age: 25 },
    { id: 1, city: "New York" },
  ];
  
  const result23 = arr23.reduce((value, idx) => {
    value[idx.id] = { ...(value[idx.id] || {}), ...idx };
    return value;
  }, {});
  
  console.log(result23);