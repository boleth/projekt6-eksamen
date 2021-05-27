var arr = [
  "NORQi ApS",
  "Cikorievej 82",
  "DK-5220 Odense SØ",
  "Tel.: + 45 71 95 60 31",
  "Mail: info@norqi.dk"
];

 // var a = document.createElement('a');
 // var linkText = document.createTextNode("my title text");
 // a.appendChild(linkText);
 // a.title = "my title text";
 // a.href = "http://example.com";
 // document.body.appendChild(a);

var ul = document.getElementById("first-ul")

var button = document.getElementById("button")

button.addEventListener("click", function() {
  arr.forEach(function(e){
    var li = document.createElement('li');
    li.innerText = e;
    ul.append(li)
  })
})
