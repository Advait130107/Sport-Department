import { getStudents, saveStudents, saveCurrentStudent } from "./storage";

/**
 * Register a new student
 */
export function registerStudent(studentData) {
  const students = getStudents();

  // Check duplicate roll number
  const rollExists = students.some(
    (student) =>
      student.rollNo.toLowerCase() === studentData.rollNo.toLowerCase(),
  );

  if (rollExists) {
    return {
      success: false,
      message: "Roll Number already exists.",
    };
  }

  // Check duplicate email
  const emailExists = students.some(
    (student) =>
      student.email.toLowerCase() === studentData.email.toLowerCase(),
  );

  if (emailExists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  const newStudent = {
    id: crypto.randomUUID(),
    ...studentData,
    createdAt: new Date().toISOString(),
  };

  students.push(newStudent);

  saveStudents(students);

  return {
    success: true,
    student: newStudent,
  };
}

/**
 * Login
 */
export function loginStudent(rollNo, password) {
  const students = getStudents();

  const student = students.find(
    (student) => student.rollNo === rollNo && student.password === password,
  );

  if (!student) {
    return {
      success: false,
      message: "Invalid Roll Number or Password.",
    };
  }

  saveCurrentStudent(student);

  return {
    success: true,
    student,
  };
}
