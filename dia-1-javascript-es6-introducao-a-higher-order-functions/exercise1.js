const returnaFullNameAndEmail = (name) => {
  const email = `${name.split(' ').join('_').toLowerCase()}@trybe.com`;
  return `{ ${name}, email:${email} }`
}
const newEmployees = (returnaFullNameAndEmail) => ({ id: returnaFullNameAndEmail('Renan Fagundes') })

console.log(newEmployees(returnaFullNameAndEmail));

