# Xây dựng ứng dụng todo list với các tính năng cụ thể sau:

## Tính năng đăng ký

- Đăng ký với json-server-auth (email, password)
- Validation email, password (password phải có ít nhất 6 ký tự)
- Lưu thông tin user vào file `db.json` với mật khẩu được mã hoá.

- POST /register
  - Request body: { email, password }

## Tính năng đăng nhập

- Đăng nhập với json-server-auth (email, password)
- Validation email, password (password phải có ít nhất 6 ký tự)
- Trả về token khi đăng nhập thành công.

- POST /login
  - Request body: { email, password }
  - Response: { token }
  - Lưu token và thông tin đăng nhập vào local storage để dễ quản lý.

## Quản lý task

- Thêm task mới (title, status, priority, userId)

  - POST /tasks
    - Request body: { title, status, priority, userId }

- Update task (title, status, priority, status)

  - PATCH /tasks/:taskId
    - Request body: { title, status, priority}

- Delete task (taskId)

  - DELETE /tasks/:taskId

- Lấy và hiển thị danh sách task của user hiện tại (khi user đã đăng nhập) (Gợi ý: nên sử dụng dạng bảng để hiển thị)

  - GET /tasks

**Model data:**

- title: string
- status: string (todo, doing, done)
- priority: number (1, 2, 3)

## Tính năng bổ sung

- Lọc task theo status (todo, doing, done) (Gợi ý sử dụng select box).
- Sắp xếp task theo priority (1, 2, 3) tăng dần hoặc giảm dần.
- Tìm kiếm task theo title (Gợi ý sử dụng input search)
