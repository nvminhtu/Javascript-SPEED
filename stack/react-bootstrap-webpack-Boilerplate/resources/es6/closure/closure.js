// Closure code here

// 1- simple function
function showMessage(message) {
	console.log(`${message}`);
}

showMessage('hello there');

// 2- closure - assign to a variable
function showData(data) {
	return function() {
		console.log(`${data}`);
	}
}

var dataNow = showData("User A");

dataNow();

// 3- closure - has parameter
function showResult(message){
	return function(time){ // parameter for closure
        for (var i = 1; i <= time; i++){
            console.log(message + ' Minhtu.net');
        }
    };
}

var greetingMessage = showResult('Welcome to ');

greetingMessage(2); // assgin data to paremeter of closure

// 4- closure - full and manage variables

function Student() {
	var name = '';
	var age = '';

	return {
		set: function(in_name, in_age) {
			name = in_name;
			age  = in_age;
		},
		getName: function() {
			return name;
		},
		getAge: function() {
			return age;
		}
	}
}

// -- init closure
var student = Student();

// -- running closure
student.set("Tu Nguyen",29);
console.log(student.getName());
console.log(student.getAge());

// 5- closure - return many closure func
// the same above - you must use object for return
function Member() {
	return {
		functionA(){
			console.log(`Function A`);
		},
		functionB() {
			console.log(`Function B`);
		}
	}
}

var member = Member();
member.functionA();
member.functionB();

// 6- Priority of variables in closure function

var gameTitle = "Ice cream maker";
function gameIntroduction(){
	var gameTitle = "Ice cream for kids";
	return function() {
		console.log(gameTitle);
	}
}

var gameApp = gameIntroduction();

// run 
gameApp();