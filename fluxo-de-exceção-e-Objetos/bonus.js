const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

function getMathStudents(obj) {
  const ob = Object.values(obj);
  let totalMathStudents = 0;

  for (let i = 0; i < ob.length; i += 1) {
    if (ob[i].materia === 'Matemática') {
      totalMathStudents += ob[i].numeroEstudantes;
    }
  }
  return totalMathStudents;
}
console.log(getMathStudents(allLessons));