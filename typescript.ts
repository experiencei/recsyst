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