var container = document.getElementById("array");

//generoqwanie
function generatearray() {
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


