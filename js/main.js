var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  
  loopLines(banner, "", 80);
  
  
  textarea.focus();
  play();
}, 100);
addLine(discord[0], "no-animation", 1200);
//czeka na input
window.addEventListener("keyup", enterKey);

console.log(
  "%cAle ze hasło to papiezgituwa ",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);


//init
textarea.value = "";
command.innerHTML = textarea.value;
console.log();

//Po kliknieciu

function enterKey(e) {
  //console.log("enterKey"+e.keyCode);
  // let keyCode = e.keyCode;
  // let chrCode = keyCode - 48 * Math.floor(keyCode / 48);
  // let chr = String.fromCharCode((96 <= keyCode && keyCode <= 105) ? keyCode-48 : keyCode);
  // command.innerHTML += chr;
  //TODO mozliwosc pisania bez klikania w pole tekstowe
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  //jesli tryb hasla
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) { // jesli dobre haslo
      pwd = true;
    }
    if (pwd && e.keyCode == 13) { //po enterze obsluga poprawnosi hasla
      document.getElementById("music").src = "barka.mp3";
      document.getElementById('audio').load();
      document.getElementById('audio').play()
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML); //lista uzytych
      git = commands.length; // ile uzyto komend
      addLine("zaq1@egzaminy-zawodowe:~$ " + command.innerHTML, "no-animation", 0);
      console.log("zaq1@egzaminy-zawodowe:~$ " + command.innerHTML);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    //dzialanie strzalek
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "dlakogo":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    
    case "sudo":
      addLine("Oh no, you're not an admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "password":
      addLine("<span class=\"inherit\"> xD </span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Brak danych', "color2", 80);
      newTab(email);
      break;
    case "play":
        addLine('Playing music...', "color2", 80);
        document.getElementById("music").src = "music.mp3";
        document.getElementById('audio').load();
        play2();
      break;
    case "no video":
        addLine("Wyłączanie wideo...", "color2", 80);
        document.getElementById("full").style="filter:opacity(0%);";
        document.getElementById("window").style = "background: rgba(33, 29, 27, 1);";
      break;
    case "video":
        addLine("Włączanie wideo...", "color2", 80);
        document.getElementById("full").style="filter:opacity(70%);";
        document.getElementById("window").style = "background: rgba(0, 0, 0, 0.705);";
      break;
    case "mute":
        addLine('Stopping the music...', "color2", 80);
        mute();
        
      break;
    case "home":
      
      loopLines(banner, "no-animation", 80);
      addLine(discord[0], "no-animation", 1100);
      textarea.focus();
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "discord":
      addLine('Loading...', "color2", 80);
      setTimeout(function() {
  
        loopLines(discord, "no-animation", 130);
        
        
        textarea.focus();
        play();
      }, 1300);
      
      //addLine(discord[0], "no-animation", 1100);
      textarea.focus();
      break;
    
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "sort":
      const cond = document.getElementById('array') || false
      if (cond) {
        const newItem = document.createElement('div');
        newItem.className = "podmiana";
        newItem.innerHTML = "Posortowana"
        document.getElementById('array').parentNode.replaceChild(newItem, document.getElementById('array'));
        //document.getElementById('array').remove();
      } else {
          console.log("ok");
      } 
        addLine("Generating an array...", "color2", 80);
        addLine("<div id='array'></div>","no-animation",120);
        addLine("<br>","no-animation",120);
        // generator
        setTimeout(function() {
  
          generatearray();
          BubbleSort();
          
          
          
        }, 1300);
        
        addLine("Sorting...", "color2", 80);
      // bubble
        
      break;
    case "ip":
        addLine("Your IP addres is...", "color2", 0);
        loopLines(ip, "no-animation", 80);
        $.getJSON("https://api.ipify.org?format=json", function (data) {
        $(".ip").text(data.ip);
        });
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}
//dodanie linii
function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.getElementById("window").offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style,  index * time); //kazdy element tablicy pojawia sie w czasie po sobie
  });
}


var  audioeo = document.getElementById("audio");
function play(){
    if(document.getElementById("audio").muted===true){
        document.getElementById('audio').play()
        
        document.getElementById("audio").muted=false
    }
    else{
        document.getElementById('bnt').style='background-image: url("mute.png");'
        document.getElementById("audio").pause()
        document.getElementById("audio").muted=true
        
    }
    
}
function play2(){

    document.getElementById('audio').play()
    
    document.getElementById("audio").muted=false;
    
    
}
function mute(){

  document.getElementById('audio').play()
  
  document.getElementById("audio").muted=true;
  
  
}








//generoqwanie
function generatearray() {
  var container = document.getElementById("array");
	for (var i = 0; i < 20; i++) {

		
		var value = Math.ceil(Math.random() * 100);

		// tworzenie diva
		var array_ele = document.createElement("div");

		// dodanie klasy block
		array_ele.classList.add("block");

		// dodanie cssa
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;

		// 
		// rozmiar
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;

		// dodanie do index.html
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

// swap 
function swap(el1, el2) {
  var container = document.getElementById("array");
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// wait 
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 150);
		});
	});
}

// buble sort asynchroniczny 
async function BubbleSort(delay = 10) {
	var blocks = document.querySelectorAll(".block");
  var container = document.getElementById("array");
	// algorytm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// zmiana tla
			// porownanych blokow
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// w8 1s
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			// porownanie wartosci 2 blokow
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			// zmiana koloru pierwszego
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		//zmiana koloru wiekszegho
		
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
}