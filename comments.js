const form = document.querySelector ('form');
const ul = $("ul");
const button = document.getElementById('send-comment');
const input = document.getElementById ('comment');
let itemsArray = localStorage.getItem ('comment') ? JSON.parse (localStorage.getItem ('comment')): []
localStorage.setItem ('comments', JSON.stringify (itemsArray))
const data = JSON.parse (localStorage.getItem ('comment'))
const liMaker = text => {
  const li = document.createElement('li');
  var num;
  for (var i = 0; i < text.length; i++) {
    if ((text[i] == "<" && text[i + 1] == "b" && text[i + 2] == "r" && text[i + 3] == ">")
    || (text[i] == "<" && text[i + 1] == "s" && text[i + 2] == "p" && text[i + 3] == ">")) {
      num = i;
      break;
    }
  }
  var name_str = text.slice(0, num);
  li.innerHTML = "<span class='name'>" + name_str + "</span>" + text.slice(num, text.length);
  ul.append(li);
}
form.addEventListener ( 'submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('comment', JSON.stringify(itemsArray));
  liMaker (input.value);
  input.value = '';
})
data.forEach (item => {
  liMaker (item)
})
