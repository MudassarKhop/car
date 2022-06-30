let cars = JSON.parse(localStorage.getItem("cars"))
	? JSON.parse(localStorage.getItem("cars"))
	: [
			{
				id: "1",
				title: "Lamborghini Aventador",
				brand: "Lamborghini",
				description: "From the Italian giants, supercar from heaven",
				color: "Professional",
				horsepower: "750",
				topSpeed: "400",
				price: "3",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/aventador.jpg",
			},
			{
				id: "2",
				title: "Ferrari Pista",
				brand: "Ferrari",
				description: "Ferrari's latest edition to their vast catalogue",
				color: "Professional",
				horsepower: "550",
				topSpeed: "340",
				price: "2.7",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/ferrari%202.jpg",
			},
			{
				id: "3",
				title: "Ferrari 458",
				brand: "Ferrari",
				description:
					"Completed modified beast, shipped in for fast and the furious",
				color: "Sports",
				horsepower: "850",
				topSpeed: "280",
				price: "1.8",
				img: "https://github.com/MudassarKhop/car/blob/main/ferrari.jpg?raw=true",
			},
			{
				id: "4",
				title: "Maserati Birdcage",
				brand: "Maserati",
				description: "Maserati's spin on concept cars brought to life",
				color: "Professional",
				horsepower: "400",
				topSpeed: "370",
				price: "5.2",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/maserati.jpg",
			},
			{
				id: "5",
				title: "Mclaren P1",
				brand: "Mclaren",
				description: "Legendary Mclaren P1 with its signature butterfly doors",
				color: "Sports",
				horsepower: "750",
				topSpeed: "290",
				price: "1.9",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/mclaren.jpg",
			},
			{
				id: "6",
				title: "Mclaren P1 Blue",
				brand: "Mclaren",
				description: "Legendary Mclaren P1 with its signature butterfly doors",
				color: "Sports",
				horsepower: "680",
				topSpeed: "290",
				price: "1.9",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/mclaren2.jpg",
			},
			{
				id: "7",
				title: "Mercedes GT",
				brand: "Mercedes",
				description: "Be classy but sporty with the new Mercedes GT",
				color: "Sports",
				horsepower: "500",
				topSpeed: "290",
				price: "1.9",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/merc.jpg",
			},
			{
				id: "8",
				title: "Lamborghini Sian",
				brand: "Lamborghini",
				description: "One of 19 in the world, this car is special",
				color: "Sports",
				horsepower: "750",
				topSpeed: "290",
				price: "20",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/sian.jpg",
			},
			{
				id: "9",
				title: "Ferrari 458 Yellow",
				brand: "Ferrari",
				description: "Stock Ferrari 458, shipped in from Italy",
				color: "Sports",
				horsepower: "750",
				topSpeed: "290",
				price: "1.9",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/ferrari3.jpg",
			},
			{
				id: "10",
				title: "Bentley",
				brand: "Bentley",
				description: "Luxury but fast",
				color: "Professional",
				horsepower: "250",
				topSpeed: "190",
				price: "1.3",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/bentley.jpg",
			},
			{
				id: "11",
				title: "Rolls Royce Phantom",
				brand: "Rolls Royce",
				description: "Epitome of class.",
				color: "Professional",
				horsepower: "250",
				topSpeed: "170",
				price: "1.9",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/RR.jpg",
			},
			{
				id: "12",
				title: "Nissan GTR GODZILLA",
				brand: "Nissan",
				description: "You already know.",
				color: "Sports",
				horsepower: "950",
				topSpeed: "390",
				price: "2.4",
				img: "https://raw.githubusercontent.com/MudassarKhop/car/main/gtr.jpg",
			},
	  ];
localStorage.setItem("cars", JSON.stringify(cars));
display = () => {
	document.querySelector("#target").innerHTML = "";
	JSON.parse(localStorage.cars).forEach((car) => {
		document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img" src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
        ${car.description}
        </p>
        <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
	});
};
display();

function sort() {
	if (document.querySelector("#sortcars").value == "horsepower") {
		let horsepower = cars.sort((a, b) => {
			return b.horsepower - a.horsepower;
		});
		let newArray = horsepower;
		console.log(newArray);
		document.querySelector("#target").innerHTML = "";
		horsepower.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img" src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
        ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
		});
	} else if (document.querySelector("#sortcars").value == "price") {
		let price = cars.sort((a, b) => {
			return b.price - a.price;
		});
		let newArray = price;
		console.log(newArray);
		document.querySelector("#target").innerHTML = "";
		price.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
        ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
		});
	} else if (document.querySelector("#sortcars").value == "top speed") {
		let topSpeed = cars.sort((a, b) => {
			return b.topSpeed - a.topSpeed;
		});
		let newArray = topSpeed;
		console.log(newArray);
		document.querySelector("#target").innerHTML = "";
		topSpeed.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img" src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
        ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
		});
	} else if (document.querySelector("#sortcars").value == "color") {
		let color = cars.sort((a, b) => (a.color > b.color ? 1 : -1));
		let newArray = color;
		console.log(newArray);
		document.querySelector("#target").innerHTML = "";
		color.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img"  src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
       ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
		});
	}
}
filter = () => {
	let FilterOption = document.querySelector("#filcars").value;
	if (FilterOption !== "all") {
		console.log(FilterOption);
		document.querySelector("#target").innerHTML = "";
		let specificView = cars.filter((car) => car.brand == FilterOption);
		specificView.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img" src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
       ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
			console.log(specificView);
		});
	} else {
		display();
	}
};
filter2 = () => {
	let FilterOption = document.querySelector("#filcars2").value;
	if (FilterOption !== "all") {
		console.log(FilterOption);
		document.querySelector("#target").innerHTML = "";
		let specificView = cars.filter((car) => car.color == FilterOption);
		specificView.forEach((car) => {
			document.querySelector("#target").innerHTML += `
        <div id="cards" class="card col-lg-4" style="width: 290px">
        <img id="card-img" src= ${car.img} class="card-img-top"  />
        <div class="card-body">
        <h5 class="card-title">${car.title}</h5>
        <p class="card-text">
       ${car.description}
        </p>
         <p><i class="fa-solid fa-bolt-lightning"></i> ${car.topSpeed}km/h</p>
        <p><i class="fa-solid fa-horse-head"></i> ${car.horsepower}hp</p>
        <p><i class="fa-solid fa-dollar-sign"></i> ${car.price}M</p>
        <p><i class="fa-solid fa-droplet"></i> ${car.color}</p>
        </div>
        </div>
        `;
			console.log(specificView);
		});
	} else {
		display();
	}
};
searchCars = () => {
	let SearchTerm = document.querySelector("#search").value;
	if (SearchTerm == "") {
		alert(`enter a cars's name`);
	} else {
		document.querySelector("#target").innerHTML = "";
		let item = cars.find((o) => o.name === SearchTerm);
		document.querySelector("#target").innerHTML = ` <div id="empty">
    <h1>No Cars Found</h1>
    </div>`;
	}
};
