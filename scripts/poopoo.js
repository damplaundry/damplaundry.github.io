let color = ["mediumblue", "mediumpurple", "mediumslateblue", "mediumspringgreen", "mediumseagreen", "maroon", "powderblue"];
let list = document.createElement('ul');

for (let i = 0; i < color.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = color[i];
    listItem.style.color = color[i];
    list.appendChild(listItem);
  }

document.body.appendChild(list);


oneElement.appendChild(anotherElement);
  