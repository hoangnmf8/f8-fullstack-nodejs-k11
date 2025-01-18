let ulElement = document.getElementsByTagName("ul")[0];
ulElement.className = "list";

let anchorElement = document.getElementsByTagName("a")[0];
anchorElement.href = "https://google.com";
anchorElement.innerText = "Trang chu google";

anchorElement.setAttribute("data-id", "7");
// anchorElement.getAttribute("data-id");
console.log(anchorElement.attributes);
