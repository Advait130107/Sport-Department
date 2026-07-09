const STUDENTS_KEY = "students";
const CURRENT_STUDENT_KEY = "student";

export function getStudents() {
  return JSON.parse(localStorage.getItem(STUDENTS_KEY)) || [];
}

export function saveStudents(students) {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
}

export function getCurrentStudent() {
  return JSON.parse(localStorage.getItem(CURRENT_STUDENT_KEY));
}

export function saveCurrentStudent(student) {
  localStorage.setItem(CURRENT_STUDENT_KEY, JSON.stringify(student));
}

export function logoutStudent() {
  localStorage.removeItem(CURRENT_STUDENT_KEY);
}
export function updateCurrentStudent(updatedStudent) {
  const students = getStudents();

  const updatedStudents = students.map((student) =>
    student.id === updatedStudent.id ? updatedStudent : student,
  );

  saveStudents(updatedStudents);
  saveCurrentStudent(updatedStudent);
}
