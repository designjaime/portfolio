// // bodymovin animation
// var animation = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'data.json'
// })

// const words = ["UX DESIGNER", "PROBLEM-SOLVER", ""];
// let i = 0;
// let timer;

// function typingEffect() {
// 	let word = words[i].split("");
// 	var loopTyping = function() {
// 		if (word.length > 0) {
// 			document.getElementById('word').innerHTML += word.shift();
// 		} else {
// 			deletingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopTyping, 100);
// 	};
// 	loopTyping();
// };

// function deletingEffect() {
// 	let word = words[i].split("");
// 	var loopDeleting = function() {
// 		if (word.length > 0) {
// 			word.pop();
// 			document.getElementById('word').innerHTML = word.join("");
// 		} else {
// 			if (words.length > (i + 1)) {
// 				i++;
// 			} else {
// 				i = 0;
// 			};
// 			typingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopDeleting, 150);
// 	};
// 	loopDeleting();
// };

// typingEffect();

// List of sentences
var _CONTENT = ["UX DESIGNER", "PROBLEM-SOLVER", "VISUAL DESIGNER", "PIXEL PERFECTER"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#roles");

// Implements typing effect
function Type() {
	var roles = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = roles;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if (roles === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function () {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var roles = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = roles;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if (roles === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if (_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function () {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);