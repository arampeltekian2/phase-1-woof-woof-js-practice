etch("http://localhost:3000/dogs")
.then(r =>r.json())
.then(data=> data.forEach((dog) => {
  renderDogs(dog)
}))

function renderDogs(dog){
    const dogBar = document.getElementById("dog-bar")
    const spanElement = document.createElement("span")
    spanElement.textContent= dog.name
    dogBar.append(spanElement)

    const dogInfo = document.getElementById