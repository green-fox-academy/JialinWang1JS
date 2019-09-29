
let BMI = (mass:number, height:number): { mass:number, height:number, bmi:number } => {
    return {mass:mass, height:height, bmi: mass / Math.sqrt(height)}
}

console.log(BMI(20,10));
