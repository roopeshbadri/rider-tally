// document.getElementById("count-el").innerText = 5;let 
let countEl = document.getElementById("count-el");
//console.log(countEl)
let saveEl=document.getElementById("save-el")
let count = 0;
const increment = () => {
    count += 1 
    countEl.innerText = count
    //console.log(countEl)
    console.log(count)
}
const save = () => {
    console.log(count)
    let prevEntries = count + " - "
    saveEl.textContent += prevEntries
    count = 0;
    countEl.textContent = count;
}
