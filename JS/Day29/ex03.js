// const time1 = new Date();

// console.log(time1);
// console.log(typeof time1);

// const now = Date.now();
// console.log(now);
// console.log(Date.prototype);
// const time3 = new Date("2025-12-02");
// console.log(new Date(time3));
// console.log(new Date(1736564380880));
// console.log({ time3 });
// console.log(time3.getTime());
// console.log(time3.getDay());
// console.log(time3.getMonth());
// console.log(time3.getYear());

/**
 * 1. Tính số ngày bạn đã sống tính đến thời điểm hiện tại, làm tròn đến 2 chữ số phần thập phân.
 * 2. Tính số phút tính từ đầu tuần cho đến thời điểm hiện tại (coi đầu tuần là 00:00:00 ngày thứ 2).
 */

const now = Date.now();
const dateNow = new Date();
const birth = new Date("1992-11-27");

const timestamp = now - birth;
console.log(timestamp / (1000 * 60 * 60 * 24));

// console.log(new Date("2025-01-05").getDay()); // 0 =  chu nhat,
console.log(dateNow.getDay());

console.log(window);
