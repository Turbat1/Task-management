-- Table: Role
CREATE TABLE Role (
    RoleID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

-- Table: Department
CREATE TABLE Department (
    DepartmentID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

-- Table: "User"
CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    RoleID INT,
    DepartmentID INT,
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID) DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

-- Table: Task
CREATE TABLE Task (
    TaskID SERIAL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Status VARCHAR(50),
    Deadline DATE,
    UserID INT,
    ProjectID INT,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID) DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

-- Table: Project
CREATE TABLE Project (
    ProjectID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    UserID INT,
    ClientID INT,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID) DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY (ClientID) REFERENCES Client(ClientID)
);

-- Table: Team
CREATE TABLE Team (
    TeamID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

-- Table: Client
CREATE TABLE Client (
    ClientID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    ContactPerson VARCHAR(255),
    Email VARCHAR(255),
    Phone VARCHAR(20),
    Address VARCHAR(255)
);

-- Table: Permission
CREATE TABLE Permission (
    PermissionID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

-- Table: UserPermission (For Many-to-Many Relationship between User and Permission)
CREATE TABLE UserPermission (
    UserID INT,
    PermissionID INT,
    PRIMARY KEY (UserID, PermissionID),
    FOREIGN KEY (UserID) REFERENCES "User"(UserID) DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY (PermissionID) REFERENCES Permission(PermissionID)
);

-- Table: RolePermission (For Many-to-Many Relationship between Role and Permission)
CREATE TABLE RolePermission (
    RoleID INT,
    PermissionID INT,
    PRIMARY KEY (RoleID, PermissionID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID) DEFERRABLE INITIALLY DEFERRED,
    FOREIGN KEY (PermissionID) REFERENCES Permission(PermissionID)
);

-- Table: Notification
CREATE TABLE Notification (
    NotificationID SERIAL PRIMARY KEY,
    Content TEXT NOT NULL,
    Type VARCHAR(50),
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID) DEFERRABLE INITIALLY DEFERRED
);

-- Table: TaskLog
CREATE TABLE TaskLog (
    LogID SERIAL PRIMARY KEY,
    TaskID INT NOT NULL,
    UserID INT NOT NULL,
    LogTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LogContent TEXT,
    FOREIGN KEY (TaskID) REFERENCES Task(TaskID) ON DELETE CASCADE,
    FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);
