const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

const convertMass = (value: number, from: string, to: string): number => {
  const targetFrom = unitsMass.indexOf(from);
  const targetTo = unitsMass.indexOf(to); 
  return value * Math.pow(10,  (targetTo - targetFrom));
};