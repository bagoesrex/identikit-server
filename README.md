# User API (To-Do's)

## Create User

Endpoint : POST /api/users

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

## Get All Users

Endpoint : GET /api/users

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

## Update User

Endpoint : PUT /api/users/:id

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

## Delete User

Endpoint : DELETE /api/users/:id

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
