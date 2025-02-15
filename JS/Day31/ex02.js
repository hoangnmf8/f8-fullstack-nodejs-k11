// let ulElement = document.getElementsByTagName("ul")[0];
// ulElement.className = "list";

// let anchorElement = document.getElementsByTagName("a")[0];
// anchorElement.href = "https://google.com";
// anchorElement.innerText = "Trang chu google";

const dataMenu = [
	{ id: 1, name: "Trang chủ", slug: "/" },
	{ id: 2, name: "Sản phẩm", slug: "/san-pham" },
	{ id: 3, name: "Về chúng tôi", slug: "/ve-chung-toi" },
	{ id: 4, name: "Phụ kiện", slug: "/phu-kien", parentId: 2 },
];

/**
 * Bước 1:
 * - Lấy ulElement đầu tiên trong header ra.
 *
 * Bước 2:
 * - Duyệt qua từng phần tử của mảng, thêm li, a, href, textnode.
 *
 * Bước 3: Kiểm tra parentId:
 * - Không có: thêm phần tử vào ulElement
 * - Có:
 *  - Kiểm tra xem có ulElement trong danh mục cha chưa? -> tạo.
 *  - Thêm danh mục con vào danh mục cha.
 *
 */

// for loop
for (let i = 0; i < 100; i++) {
	console.log(i);
}

// đệ quy
function count(i) {
	if (i >= 100) {
		return;
	}
	console.log(i);
	count(++i);
}

count(0);
