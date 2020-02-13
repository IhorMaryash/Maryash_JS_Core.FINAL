const toggleMultiBlock = document.getElementById("toggle-multiple");
const toggleMultiStyleBlock = document.getElementById("toggle-multi-style");
const toggleSingleBlock = document.getElementById("toggle-single");

toggleMultiBlock.addEventListener("click", function (event) {
  const elem = event.target.closest("button");
  const elemClasses = [...elem.classList];
  if (elemClasses.includes("toggle-in")) {
    elem.classList.remove("toggle-in");
  } else {
    elem.classList.add("toggle-in");
  }
})

toggleMultiStyleBlock.addEventListener("click", function (event) {
  const buttonGroup = toggleMultiStyleBlock.querySelectorAll("button");
  const elem = event.target.closest("button");
  const elemClasses = [...elem.classList];
  if (elemClasses.includes("toggle-in")) {
    buttonGroup.forEach(btn => btn.classList.remove("toggle-in"));
  } else {
    buttonGroup.forEach(btn => btn.classList.remove("toggle-in"));
    elem.classList.add("toggle-in");
  }
})

toggleSingleBlock.addEventListener("click", function (event) {
  const buttonGroup = toggleSingleBlock.querySelectorAll("button");
  const elem = event.target.closest("button");
  buttonGroup.forEach(btn => btn.classList.remove("toggle-in"));
  elem.classList.add("toggle-in");
})

function toggleStyleToLorem(index, cssAtr, cssValue) {
  const DOMElement = document.querySelectorAll(index)[0];
  if (DOMElement.style[cssAtr] === cssValue) {
    addStyleToLorem(index, cssAtr, "");
  } else {
    addStyleToLorem(index, cssAtr, cssValue);
  }
}

function addStyleToLorem(index, cssAtr, cssValue) {
  const DOMContainer = document.querySelectorAll(index);
  DOMContainer.forEach(DOMNode => DOMNode.style[cssAtr] = cssValue);
}

function addStylefromModal(index, cssAtr, cssValue) {
  this.addStyleToLorem(index, cssAtr, cssValue);
  $(".modal").modal("hide");
}

// function for get files path /styles/img/
  function getCustomImage() {
    const file = document.getElementById("inputGroupFile").value;
    const fileName = file.split(`\\`).pop();
    const docUrl = `url(./styles/img/${fileName})`;
    this.addStyleToLorem('#bodyarea', 'background-image', docUrl)
    $(".modal").modal("hide");
    }
  // investigate how to get files path
  // any advice from lector since it's secure info not provided by browsers


function doLogin() {
  const login = document.getElementById("userLogin").value;
  const psw = document.getElementById("userPassword").value;
  if (login === "" || psw === "") {
    document.getElementById("itemIsEmpty").style.cssText =
      "visibility: visible;";
    document.getElementById("itemNotValid").style.cssText =
      "visibility: hidden;";
  } else if (login !== "admin" || psw !== "admin") {
    document.getElementById("itemNotValid").style.cssText =
      "visibility: visible;";
    document.getElementById("itemIsEmpty").style.cssText =
      "visibility: hidden;";
  } else {
    document.getElementsByClassName("cell")[0].disabled = false;
    $(".modal").modal("hide");
    document.getElementById("itemIsEmpty").style.cssText =
      "visibility: hidden;";
    document.getElementById("itemNotValid").style.cssText =
      "visibility: hidden;";
  }
}

function switchContainer() {
  document.getElementsByClassName("container0")[0].style.display = "none";
  document.getElementsByClassName("container1")[0].style.display = "block";
  document.getElementById("codePreview").textContent = document.getElementById("loremBlock").innerHTML;
  document.getElementById("loremBlock").style.display = "none";
}
function switchContainer1() {
  document.getElementsByClassName("container0")[0].style.display = "block";
  document.getElementsByClassName("container1")[0].style.display = "none";
  document.getElementById("pushBlock").innerHTML = document.getElementById("codePreview").value;
}


function createTable() {
  const form = document.getElementById("tableForm").elements;
  const tdStr = `<td style="width: ${form[1].value}px; height: ${form[5].value}px; border: ${form[2].value}px ${form[6].value} ${form[7].value}">TD</td>`;
  const trStr = `<tr>${multiplyString(tdStr, form[4].value)}</tr>`;
  const tblStr = `<table>${multiplyString(trStr, form[0].value)}</table>`;
  const tableNode = document.createElement("p");
  const tableTextnode = document.createTextNode(tblStr);
  $(".modal").modal("hide");
  tableNode.appendChild(tableTextnode);
  document.getElementById("codePreview").value += `${tblStr}`;
  document.getElementById("pushBlock").appendChild(tableNode).innerHTML = tblStr;
}

function multiplyString(string, count) {
  return string.repeat(count);
}

function createUlOrOl(type) {
  const form = document.getElementById(`${type}Form`).elements;
  const liWrap = `<${type} type="${form[1].value}">${createLiString(form[0].value)}</${type}>`;
  const listNode = document.createElement("p");
  const ulTextnode = document.createTextNode(liWrap);
  $(".modal").modal("hide");
  listNode.appendChild(ulTextnode);
  document.getElementById("codePreview").value += `${liWrap}`;
  document.getElementById("pushBlock").appendChild(listNode).innerHTML = liWrap;
}

function createLiString(counter) {
  let initString = '';
  for (i = 1; i <= counter; i++) {
    initString += `<li>item ${i}</li>`;
  }
  return initString;
}

function resetModal(type) {
  const modalElements = document.querySelector(`#${type}Form`).elements;
  const nodesArray = [];
  for (i = 0; i < modalElements.length; i++) {
    if (modalElements[i].className === "custom-select") {
      nodesArray.push((modalElements[i].value = "Choose style"));
    } else {
      nodesArray.push((modalElements[i].value = null));
    }
  }
}

// function addStyleToLorem(cssValue) {
//     const DOMContainer = document.querySelectorAll("#loremBlock p");
//     DOMContainer.forEach(DOMNode => DOMNode.setAttribute("style", cssValue));
// }

// function addStylefromModal(cssValue) {
//     this.addStyleToLorem(cssValue);
//     document.querySelector("button.close").click();
// }

// function switchContainer(num) {
//   const index0 = document.getElementsByClassName("container0");
//   const index1 = document.getElementsByClassName("container1");
//   if (num = 0) {
//     index0[0].style.display = "none";
//     index1[0].style.display = "block";
//     document.getElementById("codePreview").textContent = document.getElementById("loremBlock").innerHTML;
//     document.getElementById("loremBlock").style.display = "none";
//   } else if (num = 1) {
//     index0[0].style.display = "block";
//     index1[0].style.display = "none";     
//     document.getElementById("pushBlock").innerHTML = document.getElementById("codePreview").value;
//   }
// }
//B html поставити також switchContainer(num) 0 і 1
