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
