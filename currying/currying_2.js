const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Pamela",
    email: "pam@example.com",
  },
  {
    id: 4,
    name: "Liz",
    email: "liz@example.com",
  },
];

//The simplest way is to do it in this way:
const noJohn = list.filter((item) => item.name !== "John");
console.log(noJohn);

//here is where currying comes to action!
// we add another function on top of the previous
const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
  return list.filter(filtering(name));
};

console.log(filterByName(list, "John"));
