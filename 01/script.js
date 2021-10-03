console.log('Hello, Console!')
console.log(document.title)
document.title = "Modifying the DOM"

  for (child of document.body.children) {
    console.log(child);
  }

  const rand = (max) => {
    return Math.floor(Math.random() * max +1);
}
document.querySelector("body").style.backgroundColor = `rgb(${rand(225)},${rand(225)},${rand(225)})`;