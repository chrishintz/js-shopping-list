window.onload = function() {
  var addToList = document.getElementById("addToList");
  var list      = document.getElementById("list");
  var li;

  addToList.addEventListener("submit", function (event) {
    event.preventDefault();
    var addItem   = document.getElementById('addItem').value;
    var entry     = document.createElement('li');
    entry.appendChild(document.createTextNode(addItem));
    list.appendChild(entry);
  });
};


// attempt 3 ----------------- name not appearing ----------------------------
// window.onload = function() {
//   var input = document.getElementById('input');
//   var btn = document.getElementById('btn');
//   var lists = document.getElementById('todo');
//
//   var makeTaskHtml = function(str) {
//     var el = document.createElement('li');
//     return el;
//   };
//
//   var addTask = function(task) {
//     lists.appendChild(task);
//   };
//
//   var onInput = function() {
//     var str   = input.value;
//       addTask(makeTaskHtml(str));
//   };
//
//   btn.addEventListener('click', onInput);
//     input.focus();
// };

// attempt 2 ------------------------------------------
// window.onload = function () {
//   var addToList = document.getElementById("addToList");
//
//   addToList.addEventListener("submit", function (event) {
//     event.preventDefault();
//     var addItem   = addToList.elements.addItem.value;
//     var li = document.getElementById('addItem');
//     var newText = document.createTextNode('blue');
//     li.appendChild(newText);
//   });
//
// };
