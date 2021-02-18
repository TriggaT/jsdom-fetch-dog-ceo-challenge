console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 


function postImage(array) {
    let placePics = document.getElementById("dog-image-container");
    for (const element of array) {
    let image = document.createElement('img')
    image.src = element 
    placePics.appendChild(image)
};}

function postBreeds(object) {
    let placeBreed= document.getElementById("dog-breeds")
    for (const key in object) {
        let list = document.createElement('li')
        list.innerText = `${key}`; 
        list.id = `${key}`; 
        list.addEventListener("click", changeColor) 
        if (!!object[key] && object[key] != ""){
            let subList = document.createElement('ul')
            for (const element of object[key]) {
            let newList = document.createElement("li")
            newList.innerText = element
            subList.appendChild(newList)
            list.appendChild(subList)
        } }
        placeBreed.appendChild(list)

};}

function changeColor(){
    this.style.color = "green";
}


document.addEventListener("DOMContentLoaded", function(e) {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => postImage(json["message"]))
});

document.addEventListener("DOMContentLoaded", function(e) {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => postBreeds(json["message"]))
});

document.addEventListener("DOMContentLoaded", function(e) {

    


    document.getElementById("breed-dropdown").addEventListener("change", (e) => {
        const breed = document.getElementsByTagName("li") 

        let arrayBreed = Array.from(breed)
        
        if (e.target.value === "a"){
            arrayBreed.forEach(e => {
                if (e.id != "" && !e.id.startsWith("a"))
                {e.style.display = "none"}
                if (e.id != "" && e.id.startsWith("a"))
                {e.style.display = "list-item";}
            })
        }
        if (e.target.value === "b"){ 
            arrayBreed.forEach(e => {
            if (e.id != "" && !e.id.startsWith("b"))
            {e.style.display = "none"} 
            if (e.id != "" && e.id.startsWith("b"))
                {e.style.display = "list-item";}
        })}
        if (e.target.value === "c"){
            arrayBreed.forEach(e => {
                if (e.id != "" && !e.id.startsWith("c"))
                {e.style.display = "none"}
                if (e.id != "" && e.id.startsWith("c"))
                {e.style.display = "list-item";} 
            })
        }
        if (e.target.value === "d"){
            arrayBreed.forEach(e => {
            if (e.id != "" && !e.id.startsWith("d"))
            {e.style.display = "none"} 
            if (e.id != "" && e.id.startsWith("d"))
                {e.style.display = "list-item";}
        })}


})


})
