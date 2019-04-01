//General Fucntions

function setCookie(cname, cvalue, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++){
		var c = ca[i];
		while(c.charAt(0) == ' '){
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0){
			return c.subtring(name.length, c.length);
		}
	}
	return "";
}

function checkCookie(){
	var user = getCookie("username");
	if(user != ""){
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if(user != "" && user != null){
			setCookie("username", user, 365);
		}
	}
}



//Functions for ROT13.html

function encodeROT13()
	{
		var plain_text = document.getElementById("message").value;
		var cypher_text = [];
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

		for(var i = 0; i<plain_text.length; i++)
		{	
			input = alphabet.indexOf(plain_text[i]);;		
			if(input == -1)
			{
				cypher_text.push(plain_text[i]);
			}
			else
			{
				var coded = (input +13)%26;
				var letter = alphabet[coded];
				cypher_text.push(letter);
			}
		}
		document.getElementById("output").innerHTML = cypher_text.join("");
	}

//Functions for 4Square.html
	
function encode4Square(){
	var plain_text = document.getElementById("message").value;
	var cypher_text = [];
	var key1 = ['q','a','z','w','s','x','e','d','c','r','f','v','t','g','b','y','h','n','u','j','m','i','k','o','l','p'];
	var key2 = ['z','x','c','v','b','n','m','a','s','d','f','g','h','j','k','l','p','o','i','u','y','t','r','e','w','q'];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	
	for(var i = 0; i<plain_text.length; i+=2){
		var letter_pair = plain_text[i] + plain_text[i+1];
		var encrypt_pair= key1.indexOf(plain_text[i]) + key2.indexOf(plain_text[i+1]);
		cypher_text.push(encrypt_pair);
	}
	document.getElementById("output").innerHTML = cypher_text.join("");
}

//Functions for morse.html
var	morse =	{  "a": ".-",		"b": "-...",
			   "c": "-.-.",		"d": "-..",
			   "e": ".",		"f": "..-.",
			   "g": "--.",		"h": "....",
			   "i": "..",		"j": ".---",
			   "k": "-.-",		"l": ".-..",
			   "m": "--",		"n": "-.",
			   "o": "---",		"p": ".--.",
			   "q": "--.-",		"r": ".-.",
			   "s": "...",		"t": "-",
			   "u": "..-",		"v": "...-",
			   "w": ".--",		"x": "-..-",
			   "y": "-.--",		"z": "--..",
			   "1": ".----",	"2": "..---",
			   "3": "...--",	"4": "....-",
			   "5": ".....",	"6": "-....",
			   "7": "--...",	"8": "---..",
			   "9": "----.",	"0": "-----",
			   ".": ".-.-.-",	",": "--..--",
			   "?": "..--..",	":": "---...",
			   "/": "-..-.",	"-": "-....-",
			   "=": "-...-",	"'": ".----.",
			   "(": "-.--.-",	")": "-.-...",
			   "_": "..--.-",	"!": "-.-.--",
			   "&": ".-...",	";": "-.-.-.",
			   "$": "...-..-",	" ": "|"
	};
	
var morse2 = { ".-": "a",		"-...":"b",
			   "-.-.": "c",		"-..": "d",
			   ".": "e",		"..-.": "f",
			   "--.": "g",		"....": "h",
			   "..": "i",		".---": "j",
			   "-.-": "k",		".-..": "l",
			   "--": "m",		"-.": "n",
			   "---": "o",		".--.": "p",
			   "--.-": "q",		".-.": "r",
			   "...": "s",		"-": "t",
			   "..-": "u",		"...-": "v",
			   ".--": "w",		"-..-": "x",
			   "-.--": "y",		"--..": "z",
			   ".----": "1",	"..---": "2",
			   "...--": "3",	"....-": "4",
			   ".....": "5",	"-....": "6", 
			   "--...": "7",	"---..": "8",
			   "----.": "9",	"-----": "0",
			   ".-.-.-": ".",	"--..--": ",",
			   "..--..": "?",	"---...": ":",
			   "-..-.": "/",	"-....-": "-",
			   "-...-": "=",	".----.": "'",
			   "-.--.-": "(",	"-.-...": ")",
			   "..--.-": "_",	"-.-.--": "!",
			   ".-...": "&",	"-.-.-.": ";",
			   "...-..-": "$",	"|": " " 
	};
	
	var plain_text;
	var cypher_text;

function encodeMorse(){	
	
	plain_text = document.getElementById("input");
	cypher_text = plain_text.value.toLowerCase();
	cypher_text = cypher_text.split("");
	
	for(i=0; i<cypher_text.length; i++){
		cypher_text[i]= morse[cypher_text[i]] + " ";
	}
	cypher_text.join(" ");
	document.getElementById("message").innerHTML = cypher_text+",";
}

function decodeMorse(){
	var encrypt_text = document.getElementById("decode");
	var decode_text = String(encrypt_text.value);
	decode_text = decode_text.split(" ,");
	
	for(i = 0; i<decode_text.length; i++){
		decode_text[i]= morse2[decode_text[i]];
	}
	decode_text.join(" ");
	decode_text = String(decode_text);
	document.getElementById("message").innerHTML = decode_text;
}

function listenMorse(){
	var audio = new AudioContext();
	var o = audio.createOscillator();
	var g = audio.createGain();
	o.type = "sine";
	o.frequency.value = 600;
	o.connect(g);
	g.connect(audio.destination);
	
	
	
	
	for(i=0; i<cypher_text.length; i++){
		switch(cypher_text[i]){
			case '.':
				o.start(0);
				g.gain.exponentialRampToValueAtTime(0.00001, audio.currentTime + 1.5);
				break;
			case '-':
				o.start(0);
				g.gain.exponentialRampToValueAtTime(0.00001, audio.currentTime + 3);
				break;
		}
	}
}
	
