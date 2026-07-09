export function updateStudent(updatedStudent) {
  localStorage.setItem("currentStudent", JSON.stringify(updatedStudent));
}

export function getCurrentStudent() {
  return JSON.parse(localStorage.getItem("currentStudent"));
}
