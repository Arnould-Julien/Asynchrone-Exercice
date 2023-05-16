


const request = fetch("file.json");
console.log("Making the request:", request);

const response = request.then((response) => response.text());
console.log("Threating the response", response);
response.then((text) => {
    console.log(text);
});

    fetch("document.txt")
	.then((response) => response.text())
	.then((text) => {
		const p = document.createElement("p");
		p.textContent = text;
        
		document.body.appendChild(p);
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});

    const fetchName = (name) => fetch("https://api.agify.io/?name=" + name);

    fetchName("keith")
        .then((reponse) => response.json())
        .then((json) => {
            console.log(json.age);
            console.log(json.count);

        })
        .catch((error) => {
            console.log("There was an error!", error);
        });