# **College Level Counselling (CLC) Portal**

## **Overview**
The **College Level Counselling (CLC) Portal** is a web-based application designed to automate and streamline the college admission process. The system ensures a **fair, transparent, and efficient** allocation of seats based on students' **exam ranks** while reducing manual intervention and eliminating biases.

## **Features**
- **Student Registration & Login**: Students can register using their **qualifying exam roll number** and log in to track their admission status.
- **Rank-Based Seat Allocation**: Students are admitted based on their **exam ranks**, ensuring a **merit-based selection process**.
- **Real-time Seat Updates**: Admission officers can manage vacant seats and update student statuses.
- **User Roles**:
  - **Students**: Register, log in, and track admission status.
  - **Admission Officers**: Manage student admissions and seat allocation.
  - **Admin**: Add or remove admission officers.
- **Standing Page**: Displays the **top 15 students** ranked based on their scores.
- **Secure & Scalable**: Built using **Spring Boot (Java), PostgreSQL, HTML, CSS, and JavaScript** with a **microservices architecture** for scalability.

## **Technology Stack**
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Java (Spring Boot)
- **Database**: PostgreSQL
- **Architecture**: Microservices

## **API Endpoints**
### **Authentication APIs**
1. **Sign In** - `POST /api/signIn`
   ```json
   {
       "role": "admin",
       "email": "bhanusinghx100@gmail.com",
       "password": "123456"
   }
   ```
2. **Sign Up** - `POST /api/signUp`
   ```json
   {
       "fullName": "Atul Pandit",
       "email": "atul@gmail.com",
       "password": "123456",
       "role": "student"
   }
   ```
3. **Forgot Password** - `POST /api/forgot`
   ```json
   {
       "email": "bhanusinghx100@gmail.com"
   }
   ```

### **Student Management APIs**
4. **Student Registration** - `POST /api/studentRegistration`
   ```json
   {
       "fullName": "Nikhil Meena",
       "gender": "Male",
       "category": "OBC",
       "branch": "Mining Engineering",
       "status": "pending",
       "rollno": "M2132",
       "rank": 1083,
       "email": "nikhil@gmail.com",
       "phoneno": "87875654534",
       "address": "Vidisha",
       "fatherName": "Ramesh",
       "date": "2025-02-11"
   }
   ```
5. **Edit Student Details** - `POST /api/editStudentDetails`
   ```json
   {
       "fullName": "Nikhil Meena",
       "gender": "Male",
       "category": "OBC",
       "branch": "Mining Engineering",
       "status": "pending",
       "rollno": "M2132",
       "rank": 1083,
       "email": "nikhil@gmail.com",
       "phoneno": "87875654534",
       "address": "Vidisha",
       "fatherName": "Ramesh",
       "date": "2025-02-11"
   }
   ```
6. **Accept Student** - `POST /api/acceptStudent`
   ```json
   {
       "email": "nikhil@gmail.com"
   }
   ```
7. **Reject Student** - `POST /api/rejectStudent`
   ```json
   {
       "email": "nikhil@gmail.com"
   }
   ```

### **Seat Management APIs**
8. **Update Seats** - `POST /api/updateSeats`
   ```json
   {
       "branch": "Chemical Engineering",
       "seats": "5"
   }
   ```

### **Admin APIs**
9. **Add Admission Officer** - `POST /api/addAdmissionOfficer`
   ```json
   {
       "email": "atul@gmail.com"
   }
   ```
10. **Remove Admission Officer** - `POST /api/removeAdmissionOfficer`
    ```json
    {
        "email": "atul@gmail.com"
    }
    ```

### **Data Retrieval APIs**
11. **Top 15 Students** - `GET /api/top15StudentTable`
12. **All Students** - `GET /api/allStudentTable`
13. **Seat Table** - `GET /api/seatTable`
14. **Admission Officers Table** - `GET /api/officerTable`

## **Database Design (ER Diagram)**
### **Entities**
1. **Student**
   - `id`
   - `fullName`
   - `gender`
   - `category`
   - `branch`
   - `rank`
   - `rollno`
   - `email`
   - `phoneNo`
   - `address`
   - `fatherName`
   - `status`
   - `date`

2. **User**
   - `id`
   - `fullName`
   - `email`
   - `password`
   - `role`

3. **Seat**
   - `id`
   - `branch`
   - `totalSeats`
   - `availableSeats`

### **Relationships**
- **One-to-Many**: A **branch** can have multiple **students**.
- **One-to-Many**: An **admin** can add multiple **admission officers**.

## **Installation Guide**
### **Prerequisites**
- Java 17
- PostgreSQL
- Spring Boot
- React + vite

### **Setup Instructions**
1. Clone the repository:
   ```sh
   git clone https://github.com/Nucleusteq.git
   ```
2. Navigate to the project directory:
   ```sh
   cd CollegeLevelCounselling_project
   ```
3. Install dependencies in fronted and backend:
   ```sh
   cd CollegeLevelCounselling_frontend
   npm install
   npm run dev
   cd
   cd  collegeLevelCounselling
   mvn install
   ```
4. Configure the database in `application.properties`:
   ```properties
      spring.application.name=collegeLevelCounselling
      # PostgreSQL Database Configuration
      spring.datasource.url=jdbc:postgresql://localhost:5432/CollegeLevelCounselling
      spring.datasource.username=your-username
      spring.datasource.password=your-password
      spring.datasource.driver-class-name=org.postgresql.Driver

      # Hibernate & JPA Configuration
      spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
      spring.jpa.hibernate.ddl-auto=update

      spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration



   ```
5. Run the application:
   ```sh
   mvn spring-boot:run
   ```

## **Contributors**
- **Project Owner**: Pratham Joya
- **Developers**: Bhanu Pratap Singh


