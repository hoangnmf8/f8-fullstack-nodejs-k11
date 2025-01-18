let h2Element = document.createElement("h2");
h2Element.innerText = "Noi dung";
document.body.appendChild(h2Element);

// document.body.innerHTML = `<div>
//   <p>noi dung</p>
// </div>`;

/**
 * outerHTML
 */

let boxClassElement = document.getElementsByClassName("box")[0];

console.log(boxClassElement); // getter
// boxClassElement.innerHTML = `<p>Noi dung moi cua box</p>`; //setter

// boxClassElement.outerHTML = `<p>Noi dung moi cua box</p>`;

/**
 * innerText -> xử lý nội dung Text
 * outerText -> xử lý nội dung Text (nhưng khi dùng dưới dạng setter thì thay thế cả bản thân phần tử đang thao tác)
 *
 * innerHTML -> xử lý nội dung HTML
 * outerHTML -> xử lý nội dung HTML (nhưng khi dùng dưới dạng setter thì thay thế cả bản thân phần tử đang thao tác)
 *
 * textContent:
 * - chỉ quét và lấy ra toàn bộ content của node mà không cố gắng bố cục, sắp xếp lại -> hiệu suất tốt hơn.
 * - Lấy được cả nội dung display: none.
 */

console.log(boxClassElement.textContent);
console.log(boxClassElement.innerText);
