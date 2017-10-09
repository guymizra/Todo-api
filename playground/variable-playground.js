// var person = {
// 	nam: 'Guy',
// 	age: 21
// };

// function updatePerson(obj){
// 	// obj = {
// 	// 	name: 'Guy',
// 	// 	age: 38
// 	// };
// 	obj.age = 38;
// }

// updatePerson(person);
// console.log(person);

var myGradeArr = [95, 99];

function addGrade(arr, grade){
	arr.push(grade);
	debugger;
}

function addGrade2(arr, grade){
	arr = [95, 99];
	arr.push(grade);
	debugger;

}
debugger;
addGrade(myGradeArr, 100);
console.log(myGradeArr);

addGrade2(myGradeArr, 50);
console.log(myGradeArr);