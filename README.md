## NEXCOM Cloud ERP System 🚀

A modular, scalable, and cloud-native ERP solution designed for modern enterprises and federal deployments. Built with a microservices architecture using Node.js, Docker, and RESTful APIs, this system handles everything from user authentication to inventory, finance, and HR processes.

---

## 📁 Project Structure

```

nexcom-cloud-erp/
├── services/
│   ├── auth-service/          # User auth, login, roles
│   ├── inventory-service/     # Inventory management
│   ├── finance-service/       # Finance & billing
│   ├── hr-service/            # HR, payroll, attendance
│   └── gateway/               # API Gateway / routing
├── shared/
│   └── utils/                 # Common configs, logging
├── docker-compose.yml         # Docker multi-container orchestration
├── .env                       # Environment variables
└── README.md                  # Project overview & instructions

````

---

## 🧠 Core Features

- **User Authentication & Roles (JWT-based)**
- **Inventory Tracking & Management**
- **Finance Transactions & Billing Logic**
- **HR Operations: Employee Records & Payroll**
- **Microservice Architecture with Service Discovery**
- **RESTful APIs with Express.js**
- **Centralized Logging, Dockerized Services**

---

## 🛠️ Tech Stack

| Layer            | Tech                                    |
|------------------|------------------------------------------|
| Language         | JavaScript (Node.js)                     |
| API Framework    | Express.js                               |
| Authentication   | JWT, Bcrypt                              |
| Database         | MongoDB (Mongoose ORM)                   |
| Containerization | Docker, Docker Compose                   |
| Gateway          | Express-based API Gateway                |
| DevOps Ready     | .env, Config, Service-based deployment   |

---

## 🔧 Installation

```bash
# Clone the project
git clone https://github.com/your-org/nexcom-cloud-erp.git
cd nexcom-cloud-erp

# Copy environment variables
cp .env.example .env

# Start all services
docker-compose up --build
````

> Ensure Docker and Node.js are installed on your system.

---

## 🔐 Auth Service

Handles registration, login, JWT token issuance, and middleware role-checking.

* `/register`
* `/login`
* Middleware: `authMiddleware.js`

---

## 📦 Inventory Service

Manage and track products or assets.

* `/inventory/add`
* `/inventory/list`
* `/inventory/:id`

---

## 💰 Finance Service

Track payments, invoices, and generate billing reports.

* `/transactions/create`
* `/transactions/:id`
* `/billing/generate`

---

## 👥 HR Service

Employee and attendance management with payroll processing.

* `/employee/add`
* `/attendance/record`
* `/payroll/run`

---

## 🌐 API Gateway

Unified entry point to route requests to respective services. All external traffic goes through this layer.

* `/auth/*`
* `/inventory/*`
* `/finance/*`
* `/hr/*`

---

## 📦 Dockerized Setup

All services are containerized and orchestrated via Docker Compose:

```bash
docker-compose up --build
```

This will spin up:

* MongoDB container
* All four microservices
* Gateway service

---

## 📁 Environment Variables (`.env`)

```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://mongo:27017/nexcom_erp
```

---

## 🚀 Production Checklist

* [ ] Configure environment-based logging
* [ ] Add CI/CD workflow (GitHub Actions / Jenkins)
* [ ] Add CORS policies & rate limiting
* [ ] Connect to production-grade DB
* [ ] Add monitoring via Prometheus + Grafana

---

## 📄 License

MIT License. See [`LICENSE`](LICENSE) for details.

---

## 🤝 Contribution

We welcome PRs and suggestions. Please fork the repo and raise a pull request, or open an issue for discussions.

---

## 👨‍💻 Maintainers

* [Harsh Sonkar](https://github.com/hq969) — Full Stack Developer



