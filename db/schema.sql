USE kb8je7otrbkp671t;

CREATE TABLE teacher(
teacher_id INT NOT NULL auto_increment,
teacherName VARCHAR(255) not null,
createdAt timestamp,
updatedAt timestamp,
PRIMARY KEY(teacher_id)
);

CREATE TABLE task(
task_id INT NOT NULL auto_increment,
task_name VARCHAR(255),
task_complete BOOLEAN DEFAULT,
teacher_id int, 
createdAt timestamp,
updatedAt timestamp,
PRIMARY KEY(task_id),
FOREIGN KEY(teacher_id) REFERENCES employees(teacher_id)
);

CREATE TABLE student(
student_name VARCHAR(255),
task_id int,
teacher_id int,
createdAt timestamp,
updatedAt timestamp,
FOREIGN KEY(teacher_id) REFERENCES teacher(teacher_id),
FOREIGN KEY(task_id) REFERENCES task(task_id)
);







