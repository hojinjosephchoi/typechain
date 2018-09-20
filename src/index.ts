class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    //클래스가 시작할 때마다 호출된다.
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
};


const hojin = new Human('Hojin', 22, 'male');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(hojin));

export {};