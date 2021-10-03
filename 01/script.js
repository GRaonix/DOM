console.log('Hello, Console!')
console.log(document.title)
document.title = "Modifying the DOM"

  for (child of document.body.children) {
    console.log(child);
  }
