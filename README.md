# Praktikum 8 – RESTful API dengan Express.js & MySQL

**_Praktikum 8_** ini membahas cara membuat **RESTful API sederhana** menggunakan **Express.js** dan **MySQL** untuk mengelola data pengguna (_CRUD: Create, Read, Update, Delete_).  
Struktur project menggunakan pola **MVC (Model-View-Controller)** dan diuji menggunakan **Postman**.

---

## **Langkah-Langkah Pengerjaan**

### **Membuat Database**
```sql
CREATE DATABASE IF NOT EXISTS dbpraktikum8;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **Menambahkan Data Dummy**
```sql
INSERT INTO users (name, email, password) VALUES
('Riska Safitri', 'riska@mail.com', '123456'),
('Josephine', 'josep@mail.com', 'abcdef'),
('Moh. Ilham', 'ilham@mail.com', 'qwerty');
```

### **Menjalankan Project**
```sql
npm install express mysql2
node server.js
```
Pastikan server berjalan di http://localhost:8001

### **Pengujian API dengan Postman**
* Gunakan endpoint berikut untuk menguji API :

Method	Endpoint	Deskripsi

GET	/	Cek koneksi server

GET	/api/users	Ambil semua data user

GET	/api/users/1	Ambil user berdasarkan ID

POST	/api/users	Tambah user baru

PUT	/api/users/:id	Update user

DELETE	/api/users/:id	Hapus user

### **Contoh Body (POST / PUT)**
```json
{
  "name": "Budi Santoso",
  "email": "budi@example.com"
}
```

### **Tautan Repository**
➡️ https://drive.google.com/file/d/1ZnV9BrXNT8oRJClBEiP1_oTMmeD2-wAB/view?usp=sharing

### **Teknologi yang Digunakan**
* Node.js
* Express.js
* MySQL
* Postman

_Dibuat untuk keperluan pembelajaran mata kuliah Praktikum Pemrograman Web (Praktikum 8)._
📅 2025

