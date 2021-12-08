const sum = (a : number , b : number ) => {
    return a + b
}

const ans = sum(8 , 9)

console.log(ans);

//boolean
let isCool: boolean = true;

//number
let age: number = 34;

//string
let eyeColor: string = "brown";
let favouriteQuotes: string = `${age} year's old`;

//array
let pets: string[] = ["cats" , "dog" , "Rabbit"];
let pets2: Array<string> = ["lions" , "Dragon" , "Lizards"];

//object
let wizards: object = {
    a : "nathaniels"
}

//null & undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string , number];
basket  = ["basketball" , 5];

//Enum
enum Size {Small = 1, Medium = 2, large = 3};
let sizeName: number = Size.Medium

//Any - !!!!!!! BE CAREFUL (ignoring all typescript function)
let whatever: any = "experience";
whatever = "experience";

//void (function that doesn't return anything)
let singlet = (): void => {
    console.log("Whatever you log");
}

//never (doesn't have an endpoint)
let error = (): never => {
  throw new Error("ooops")
}

// interface (helps to create a new valid object like schema)

interface RobotArmy {
    count : number,
    type : string ,
    magic : string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("Army Fights");
}

// Type assertion
interface CatArmy {
    count : number,
    type : string ,
    magic : string
}

let dog = {} as CatArmy
dog.count

//optional properties
interface RatArmy {
    count : number,
    type : string ,
    magic? : string
}
 

let fightRatArmy = (robots :RatArmy) => {
    console.log("Army Fights");
}
fightRatArmy({count : 6 , type : "hello world"})

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log("What going on");
}

let fightRobotArmy4 = (robots: {count : 6 , type : "hello world"}): number => {
    console.log("always return number");
    return 56
}

//classes  (we can have both public & private properties)
class Animal {
    public sing: string = "allalalal"
    constructor(sound: string) {
        this.sing = sound;
    }

 greet(): string {
     return `Hello ${this.sing}`
 }
    
}

let lion = new Animal("RAAAAWWWR");
lion.sing

//union
let confused: string | number| boolean = true;