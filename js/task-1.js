const list = document.querySelectorAll(".item")
const catLength = `Number of categories: ${list.length}`;
console.log(catLength);


list.forEach(item => {
    const titelEl = item.querySelector("h2").textContent;
    const lengthEl = item.querySelectorAll("ul li").length;

    console.log(`Category: ${titelEl}`);
    console.log(`Elements: ${lengthEl}`);
    
});
 