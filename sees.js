const ul = document.getElementById('div-comment');
const input = 0;
var likes = 0;
let itemsArray = localStorage.getItem('sees') ? JSON.parse(localStorage.getItem('sees')) : []
localStorage.setItem('sees', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('sees'));
const liMaker = text => {
 likes++;
 const li = document.getElementById('div');
 li.innerHTML = likes;
}
window.onload = (e) => {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('sees', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
}
data.forEach(items => {
 liMaker(items);
})
