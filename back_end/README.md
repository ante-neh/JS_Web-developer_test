# Fastify API - User Count

This Fastify RESTful API connects to a MySQL database (`test001`) and retrieves the total number of rows from the `user_list` table.

## Steps to Set Up and Run the API

### 1. **Clone the Repository**

```bash
git clone https://github.com/ante-neh/JS_Web-developer_test
cd back_end
```

### 2. **Install Dependencies**

```bash
npm install
```

### 4. **Create .env File**
Add the following to a .env file in the root directory:

makefile
Copy code
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=test001

### 5. **Run the API**
npm start

### 6. **Test the API**
Access the GET /api/usercount endpoint:

```bash
curl http://localhost:3000/api/usercount