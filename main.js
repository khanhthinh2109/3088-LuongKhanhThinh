// Câu 1: Tạo mảng users chứa dữ liệu mẫu
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Câu 2: Viết hàm getAllUsers() để lấy tất cả users
function getAllUsers() {
    return users;
}

// Câu 3: Viết hàm getUserById(id) để lấy user theo id
function getUserById(id) {
    return users.find(user => user.id === id);
}

// Câu 4: Viết hàm createUser(user) để tạo user mới
function createUser(user) {
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, ...user };
    users.push(newUser);
    return newUser;
}

// Câu 5: Viết hàm updateUser(id, user) để cập nhật user
function updateUser(id, updatedUser) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        return users[index];
    }
    return null;
}

// Câu 6: Viết hàm deleteUser(id) để xóa user
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        return deletedUser[0];
    }
    return null;
}

// Câu 7: Gọi hàm getAllUsers() và log kết quả
console.log('--- Câu 7: getAllUsers() ---');
console.log(getAllUsers());

// Câu 8: Gọi hàm getUserById(1) và log kết quả
console.log('--- Câu 8: getUserById(1) ---');
console.log(getUserById(1));

// Câu 9: Gọi hàm createUser({name: "Bob", email: "bob@example.com"}) và log kết quả
console.log('--- Câu 9: createUser({name: "Bob", email: "bob@example.com"}) ---');
console.log(createUser({ name: 'Bob', email: 'bob@example.com' }));

// Câu 10: Gọi hàm deleteUser(2) và log kết quả
console.log('--- Câu 10: deleteUser(2) ---');
console.log(deleteUser(2));

// Log lại danh sách users sau các thao tác
console.log('--- Danh sách users sau khi thực hiện các thao tác ---');
console.log(getAllUsers());
