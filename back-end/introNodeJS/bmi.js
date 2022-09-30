const readline = require('readline-sync');

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = (weight / heightSquared);
  
  return bmi;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  
  const bmi = handleBMI(weight, height);
  
  console.log(bmi);
  switch (bmi) {
    case bmi < 18,5:
      console.log('Status: Underweight (thin)');
      break;
    case bmi >= 18,5 && bmi < 25:
      console.log('Status: Normal weight');
      break;
    case bmi >= 25 && bmi < 30:
      console.log('Status: Overweight (overweight)');
      break;
    case bmi >= 30 && bmi < 35:
      console.log('Status: Grade I obesity');
      break;
    case bmi >= 35 && bmi < 40:
      console.log('Status: Grade II obesity');
      break;  
    default:
      console.log(`Status: Obesity grades III and IV`);
      break;
  }
}

main();
