const products = [
	{ id: 1, title: "san pham A", price: 450, quantity: 2, discount: 0.1 },
	{ id: 2, title: "B", price: 200, quantity: 1, discount: 0.2 },
	{ id: 3, title: "XX C", price: 300, quantity: 3, discount: 0.3 },
	{ id: 4, title: "san pham D", price: 400, quantity: 2, discount: 0.05 },
];

/**
 * - Sắp xếp sản phẩm từ a - z, từ z - a, giá từ cao đến thấp, giá từ thấp đến cao, sắp xếp theo giảm giá nhiều.
 * valueSelect
 * a - z: 0
 * z - a: 1
 * price cao -> thap: 2
 * price thap -> cao: 3
 * discount giam dan: 4
 */

function sortProduct(data, valueSelect = 0) {
	switch (valueSelect) {
		case 0:
			data.sort((a, b) => {
				if (a.title < b.title) return -1;
			});
			break;

		case 1:
			data.sort((a, b) => {
				if (a.title > b.title) return -1;
			});
			break;

		case 2:
			data.sort((a, b) => b.price - a.price);
			break;

		case 3:
			data.sort((a, b) => a.price - b.price);
			break;

		case 4:
			data.sort((a, b) => b.discount - a.discount);
			break;

		default: {
			console.log("check");
			break;
		}
	}
}

sortProduct(products, 1);

console.table(products);
