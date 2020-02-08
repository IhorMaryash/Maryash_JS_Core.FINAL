const setButtons = () => {};

function addStyleToLorem(index, cssValue) {
  const DOMContainer = document.querySelectorAll(index);
  DOMContainer.forEach(DOMNode => DOMNode.setAttribute("style", cssValue));
}

function addStylefromModal(index, cssValue) {
  this.addStyleToLorem(index, cssValue);
  document.querySelector("button.close").click();
}

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
}

function switchContainer1() {
  document.getElementsByClassName("container0")[0].style.display = "block";
  document.getElementsByClassName("container1")[0].style.display = "none";
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
  document.getElementById("codePreview").appendChild(tableNode);
  document.getElementById("pushBlock").innerHTML = tblStr;
}

function multiplyString(string, count) {
  return string.repeat(count);
}

 function createUl() {
   const form1 = document.getElementById("ulForm").elements;
   const liStr = `<li>item ${form1[0].value}</li>`;
   const ulStr = `<ul type="${form1[1].value}">${multiplyString(liStr, form1[0].value)}</ul>`;
   const ulNode = document.createElement("p");
   const ulTextnode = document.createTextNode(ulStr);
   $(".modal").modal("hide");
   ulNode.appendChild(ulTextnode);
   document.getElementById("codePreview").appendChild(ulNode);
   document.getElementById("pushBlock").innerHTML = ulStr;
 }

 function createOl() {
  const form2 = document.getElementById("olForm").elements;
  const liStr = `<li>item ${form2[0].value}</li>`;
  const olStr = `<ol type="${form2[1].value}">${multiplyString(liStr, form2[0].value)}</ol>`;
  const ulNode = document.createElement("p");
  const olTextnode = document.createTextNode(olStr);
  $(".modal").modal("hide");
  ulNode.appendChild(olTextnode);
  document.getElementById("codePreview").appendChild(olNode);
  document.getElementById("pushBlock").innerHTML = olStr;
}




// function addStyleToLorem(cssValue) {
//     const DOMContainer = document.querySelectorAll("#loremBlock p");
//     DOMContainer.forEach(DOMNode => DOMNode.setAttribute("style", cssValue));
// }

// function addStylefromModal(cssValue) {
//     this.addStyleToLorem(cssValue);
//     document.querySelector("button.close").click();
// }



// function switchContainer() { 
//   if(document.getElementsByClassName("cell")[0]) {
//       document.getElementsByClassName("container0")[0].style.display = "none";
//       document.getElementsByClassName("container1")[0].style.display = "block"; 
//     }else if(document.getElementsByClassName("cell")[13]){ //якщо onclick="switchContainer()"
//       document.getElementsByClassName("container0")[0].style.display = "block";
//       document.getElementsByClassName("container1")[0].style.display = "none"; 
//     }   
// }