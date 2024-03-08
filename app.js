

var englishMarks = document.querySelector('#eng');
var urduMarks = document.querySelector('#urd');
var mathsMarks = document.querySelector('#mth');
var biologyMarks = document.querySelector('#bio');
var computerMarks = document.querySelector('#com');



function showresult()
{
console.log("English    = " + englishMarks.value);
console.log("Urdu       = " + urduMarks.value);
console.log("Maths      = " + mathsMarks.value);
console.log("Biology    = " + biologyMarks.value);
console.log("Computer   = " + computerMarks.value);


    var totalMarks = 500;
    var obtainedMarks = +englishMarks.value + +urduMarks.value + +mathsMarks.value + +biologyMarks.value + +computerMarks.value;
    var percentage = (obtainedMarks / totalMarks) * 100;


    console.log("Total Marks    ==> " + totalMarks +"/-");
    console.log("Obtained Marks ==> " + obtainedMarks +"/-");
    console.log("Percentage     ==> " + percentage + "%");

}







