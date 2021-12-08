var sum = function (a, b) {
    return a + b;
};
var ans = sum(8, 9);
console.log(ans);
//boolean
var isCool = true;
//number
var age = 34;
//string
var eyeColor = "brown";
var favouriteQuotes = "".concat(age, " year's old");
//array
var pets = ["cats", "dog", "Rabbit"];
var pets2 = ["lions", "Dragon", "Lizards"];
//object
var wizards = {
    a: "nathaniels"
};
//null & undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ["basketball", 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
;
var sizeName = Size.Medium;
//Any - !!!!!!! BE CAREFUL (ignoring all typescript function)
var whatever = "experience";
whatever = "experience";
//void (function that doesn't return anything)
var singlet = function () {
    console.log("Whatever you log");
};
//never (doesn't have an endpoint)
var error = function () {
    throw new Error("ooops");
};
var fightRobotArmy = function (robots) {
    console.log("Army Fights");
};
var dog = {};
dog.count;
var fightRatArmy = function (robots) {
    console.log("Army Fights");
};
fightRatArmy({ count: 6, type: "hello world" });
// Function
var fightRobotArmy3 = function (robots) {
    console.log("What going on");
};
var fightRobotArmy4 = function (robots) {
    console.log("always return number");
    return 56;
};
//classes  (we can have both public & private properties)
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "allalalal";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("RAAAAWWWR");
lion.sing;
//union
var confused = true;
