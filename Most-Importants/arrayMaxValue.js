// Max value of the array numbers:
var marks = [10, 50, 20, 60, 30, 70, 40];
var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is: ", max);
