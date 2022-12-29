"use strict";
const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
const convertMass = (value, from, to) => {
    const targetFrom = unitsMass.indexOf(from);
    const targetTo = unitsMass.indexOf(to);
    return value * Math.pow(10, (targetTo - targetFrom));
};
