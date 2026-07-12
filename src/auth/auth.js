import { getStudents, saveStudents, saveCurrentStudent } from "./storage";

/**
 * Register a new student
 */
export function registerStudent(studentData) {
  const students = getStudents();

  // Check duplicate Roll Number
  const rollExists = students.some(
    (student) =>
      student.rollNo.trim().toLowerCase() ===
      studentData.rollNo.trim().toLowerCase(),
  );

  if (rollExists) {
    return {
      success: false,
      message: "Roll Number already exists.",
    };
  }

  // Check duplicate Email
  const emailExists = students.some(
    (student) =>
      student.email.trim().toLowerCase() ===
      studentData.email.trim().toLowerCase(),
  );

  if (emailExists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  // Create new student
  const newStudent = {
    id: crypto.randomUUID(),

    // Signup data
    ...studentData,

    // Profile fields (editable later)
    phone: "",
    address: "",
    bloodGroup: "",
    emergencyContact: "",
    profilePhoto: "",

    // Optional future fields
    bio: "",
    achievements: [],
    registeredSports: [],
    registeredEvents: [],

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
 * Login Student
 */
export function loginStudent(rollNo, password) {
  const students = getStudents();

  const student = students.find(
    (student) =>
      student.rollNo.trim().toLowerCase() === rollNo.trim().toLowerCase() &&
      student.password === password,
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
