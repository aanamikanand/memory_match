$ (document).ready(function() {

var arr = [
						'rat', 
						'rat', 
						'elephant', 
						'elephant', 
						'cat', 
						'cat', 
						'dragon', 
						'dragon',
	 					'fish', 
	 					'fish', 
	 					'penguin', 
	 					'penguin', 
	 					'rabbit', 
	 					'rabbit', 
	 					'tweety', 
	 					'tweety'
 					];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
	}

	shuffle(arr);

	var num1 = "";
	var num2 = "";

	$('.grid-cell').click(function(event) {
		if($(this).hasClass('selected-cell'))  {
		} else { 
			$(this).text(arr[event.target.id]).addClass('selected-cell');
			$(this).text(arr[event.target.id]).addClass('scrub-cell');
			assignNums();
		}
		checkForWin();
	});

	function assignNums() {
		if(num1 == "") {
			num1 = arr[event.target.id];
		} else {
			num2 = arr[event.target.id];
		};
	}

	function checkForWin() {
		if($('.selected-cell').length == 16) {
			$('.winner').text('YOU WIN!');
		} else if($('.selected-cell').length % 2 == 0) {
    	checkForMatch();
		};
	}

	function checkForMatch() {
		if(num1 == num2) {
  		$('.scrub-cell').removeClass('scrub-cell');
  		num1 = "";
			num2 = "";
  	} else {
  		alert('try again!');
			$('.scrub-cell').text('').removeClass('selected-cell');
			num1 = "";
			num2 = "";
  	};
	}

});