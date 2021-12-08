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
var fightRatArmy = function (RatArmy) {
    console.log("Army Fights");
};
