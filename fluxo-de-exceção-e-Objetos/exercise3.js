const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addInfoToObj(obj, key, value) {
  return obj[key] = value;
}
addInfoToObj(lesson2, 'turno', 'noite');
// console.log(lesson2);

function returnObjKeysList(obj) {
  return Object.keys(obj);
}
// console.log(returnObjKeysList(lesson1))

function showObjLength(obj) {
  console.log(Object.keys(obj).length);
}
// showObjLength(lesson2);

const objValueList = (obj) => Object.values(obj);
// console.log(objValueList(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

function returnTotalStudents(obj) {
  const students1 = obj.lesson1.numeroEstudantes;
  const students2 = obj.lesson2.numeroEstudantes;
  const students3 = obj.lesson3.numeroEstudantes;

  return students1 + students2 + students3;
}
console.log(returnTotalStudents(allLessons));