 
## Genius Clone Application

This project is a full-stack application consisting of a Spring Boot backend, an Angular frontend, a PostgreSQL database, and pgAdmin for database management. The entire setup is containerized using Docker Compose.

### Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Project Structure

```
project-root
│
├── backend
│   └── genius-clone
│       ├── src
│       ├── build.gradle
│       ├── Dockerfile
│       └── ...
│
├── frontend
│   ├── src
│   ├── package.json
│   ├── Dockerfile
│   └── ...
│
└── docker-compose.yml
```

### Getting Started

To start the application, follow these steps:

1. **Clone the repository** (if you haven't already):

    ```sh
    git clone https://github.com/NikolaOgnjenovic/GeniusClone
    cd GeniusClone
    ```

2. **Build and run the application using Docker Compose**:

    ```sh
    docker-compose up --build
    ```

This command will build the Docker images and start the containers for the backend, frontend, database, and pgAdmin.

### Developing the application

While working on the application, run the backend and frontend locally and run the database using Docker Compose.

1. **Run the database using Docker Compose:**
  ```sh
    docker-compose up --build db
  ```

2. **Run the backend using an IDE, or in your terminal:**
  ```sh
    cd backend/genius-clone
    ./gradlew bootRun
  ```

3. **Run the frontend using an IDE, or in your terminal:**
  ```sh
    cd ../../frontend
    npm install
    npm start
  ```

### Accessing the Services

- **Backend (Spring Boot)**: The backend service will be available at `http://localhost:8080`.

  Example endpoint: `http://localhost:8080/api/endpoint`

- **Frontend (Angular)**: The frontend service will be available at `http://localhost:4200`.

- **pgAdmin**: pgAdmin, the database management tool, will be available at `http://localhost:5050`.

  - **Login Credentials**:
    - Email: `admin@admin.com`
    - Password: `admin`

  - **Connecting to the PostgreSQL Database**:
    - Host: `db`
    - Port: `5432`
    - Username: `postgres`
    - Password: `postgres`
    - Database: `genius_clone`

### Stopping the Application

To stop the application and remove the containers, run:

```sh
docker-compose down
```

### Notes

- Ensure that the ports `8080`, `4200`, `5432`, and `5050` are not being used by other applications on your local machine to avoid conflicts.
- You may need to adjust configurations and environment variables in the `docker-compose.yml` file based on your specific requirements.

### Troubleshooting

- If you encounter issues with the build, ensure that Docker and Docker Compose are correctly installed and that you have sufficient permissions to run Docker commands.
- For any other issues, check the logs of the individual services:

    ```sh
    docker-compose logs backend
    docker-compose logs frontend
    docker-compose logs db
    docker-compose logs pgadmin
    ```

This should give you a comprehensive guide on how to start, use, and manage the application using Docker Compose.
