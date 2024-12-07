let bmi = 19;

switch (true) {
	case bmi < 18.5:
		console.log("Gay");
		break;
	case bmi >= 18.5 && bmi < 23:
		console.log("Binh thuong");
		break;
	default:
		console.log("Beo");
}

let day = 1;

switch (day) {
	case 1:
		console.log("chu nhat");
		break;
	case 2:
		console.log("thu 2");
		break;
}

let month = 100;

switch (month) {
	case 0:
	case 1:
	case 2:
		console.log("Thang nay thuoc quy I");
		break;

	case 3:
	case 4:
	case 5:
		console.log("Thang nay thuoc quy II");
		break;

	case 6:
	case 7:
	case 8:
		console.log("Thang nay thuoc quy III");
		break;

	case 9:
	case 10:
	case 11:
		console.log("Thang nay thuoc quy IV");
		break;

	default:
		console.log("Gia tri month khong hop le!");
}
