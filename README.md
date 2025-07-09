# 🧩 IdentiKit – User Management API

API backend untuk pengelolaan data pengguna (User Management) berbasis **Node.js**, **TypeScript**, dan **Prisma ORM**. API ini memungkinkan Anda untuk melakukan operasi **CRUD** (Create, Read, Update, Delete) terhadap data pengguna.

---

## ✨ Fitur Utama

- ✅ CRUD User: Tambah, ambil, edit, dan hapus data pengguna
- ✅ Validasi data dan pesan error yang jelas
- ✅ Terintegrasi dengan Prisma ORM dan database MySQL
- ✅ Arsitektur modular & clean code
- ✅ Siap untuk pengembangan frontend dengan REST API standar

---

## 📋 Requirements

- Node.js ≥ 18
- MySQL

---

## 🛠️ Panduan Instalasi

1. Clone repository:

```bash
 git clone https://github.com/bagoesrex/identikit-server.git
 cd identikit-server
```

2. Salin konfigurasi environment:

```bash
cp .env.example .env
```

Sesuaikan nilai `DATABASE_URL` dan `PORT` di file `.env`:

```bash
DATABASE_URL="mysql://root:@localhost:3306/identikit_db"
PORT=5000
```

Format URL MySQL:
`mysql://<username>:<password>@<host>:<port>/<database>`

3. Generate Prisma Client:

```bash
npm run prisma:generate
```

4. Migrasi Database

```bash
prisma migrate dev
```

5. Jalankan server lokal:

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:5000`

---

# 📡 Endpoint API

## 🔹 Create User

POST `/api/users`

Request Body :

```json
{
  "nama": "Megumine",
  "email": "mymine@gmail.com",
  "nomorTelepon": "089xxxxxxxxx",
  "statusAktif": true,
  "departemen": "Manajemen Proyek"
}
```

Response Body (Success) :

```json
{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "id": 1,
    "nama": "Megumine",
    "email": "mymine@gmail.com",
    "nomorTelepon": "089xxxxxxxxx",
    "statusAktif": true,
    "departemen": "Manajemen Proyek",
    "createdAt": "2025-07-08T09:00:00.000Z"
  }
}
```

Response Body (Failed) :

```json
{
  "status": "error",
  "message": "Email already exists",
  "errors": {
    "email": "This email is already taken"
  } // Dynamic berdasarkan kondisi
}
```

## 🔹 Get All Users

GET `/api/users`

Response Body (Success) :

```json
{
  "status": "success",
  "message": "User list retrieved successfully",
  "data": [
    {
      "id": 1,
      "nama": "Megumine",
      "email": "mymine@gmail.com",
      "nomorTelepon": "08xxxxxxxxxx",
      "statusAktif": true,
      "departemen": "Manajemen Proyek",
      "createdAt": "2025-07-08T09:00:00.000Z"
    },
    {
      "id": 2,
      "nama": "Yunyun",
      "email": "yunyun@gmail.com",
      "nomorTelepon": "08xxxxxxxxxx",
      "statusAktif": false,
      "departemen": "Teknologi Informasi",
      "createdAt": "2025-07-08T10:00:00.000Z"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "status": "error",
  "message": "Failed to retrieve user list",
  "errors": {
    "server": "Internal server error"
  }
}
```

## 🔹 Update User

PUT `/api/users/:id`

Request Body :

```json
{
  "nama": "Megumine Ganti Nama",
  "email": "mymine@gmail.com",
  "nomorTelepon": "089xxxxxxxxx",
  "statusAktif": true,
  "departemen": "Manajemen Proyek"
}
```

Response Body (Success) :

```json
{
  "status": "success",
  "message": "User updated successfully",
  "data": {
    "id": 1,
    "nama": "Megumine Ganti Nama",
    "email": "mymine@gmail.com",
    "nomorTelepon": "089xxxxxxxxx",
    "statusAktif": true,
    "departemen": "Manajemen Proyek",
    "createdAt": "2025-07-08T09:00:00.000Z"
  }
}
```

Response Body (Failed) :

```json
{
  "status": "error",
  "message": "Email already exists",
  "errors": {
    "email": "This email is already taken"
  } // Dynamic berdasarkan kondisi
}
```

## 🔹 Delete User

DELETE `/api/users/:id`

Response Body (Success) :

```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

Response Body (Failed) :

```json
{
  "status": "error",
  "message": "User not found",
  "errors": {
    "id": "No user found with ID 1"
  }
}
```
