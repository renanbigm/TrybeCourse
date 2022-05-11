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

function getTotalStudents(obj, name) {
  const objValues = Object.values(obj);
  let totalMathStudents = 0;

  for (let i = 0; i < objValues.length; i += 1) {
    if (objValues[i].professor === name) {
      totalMathStudents += objValues[i].numeroEstudantes;
    }
  }
  return totalMathStudents;
}
//console.log(getMathStudents(allLessons, 'Matemática'));

const report = (obj, name) => {
  return Object.values(obj).reduce((objAcumulador, objAtual) => {
    if (objAtual.professor === name) {
      objAcumulador.aulas.push(objAtual.materia);
    }
    return objAcumulador;
  }, {
    professor: name,
    aulas: [],
    estudantes: getTotalStudents(obj, name)
  }); 
}
console.log(report(allLessons, 'Carlos'));

// for (let i = 0; i < objValues.length; i += 1) {
//   if (objValues[i].professor === name) {
//     report.aulas.push(objValues[i].materia);
//     report.estudantes = getTotalStudents(obj, objValues[i].materia)
//   } 
// }