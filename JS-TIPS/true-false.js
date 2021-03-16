// Truthy and Falsy values:
/*
01. 0 <-------------|           +            |---------> 01. "0"
02. ""              |           +            |           02. " "
03. undefind         ===> Falsy + Truthy <===            03. []
04. null            |           +            |           04. {}
05. NaN             |           +            |           05. "false"
06. false <---------|           +            |---------> 06. 
*/

// Step: 01 (number)
const age = 0;
if (age) {
    console.log("condition is true");
}
else {
    console.log("condition is false"); // (0 == false)
}

// Step: 02 (string)
const name = 0;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");// (false == true
}


