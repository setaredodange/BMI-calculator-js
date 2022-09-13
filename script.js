
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')
const weightVal = document.querySelector('#weight-val')
const heightVal = document.querySelector('#height-val')
const bmiResult = document.querySelector('#result')
const categoryElem = document.querySelector('#category')


function bmiCalculator(){
    // console.log('BMI')
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = weightInputValue + 'kg'
    heightVal.innerHTML = heightInputValue + 'cm'

    let bmiValue = (weightInputValue/(Math.pow(heightInputValue/100, 2))).toFixed(2)
    console.log(bmiValue);

    bmiResult.innerHTML = bmiValue
    if(bmiValue < 18.5){
        categoryElem.innerHTML = 'UnderWeight' 
        bmiResult.style.color = 'white'
        
    }else if(bmiValue>= 18.5 && bmiValue<= 24.9){
        categoryElem.innerHTML = 'Normal Weight' 
        bmiResult.style.color = 'green'

    }else if(bmiValue>= 25 && bmiValue<= 29.9){
        categoryElem.innerHTML = 'OverWeight' 
        bmiResult.style.color = 'blue'

    }else{
        categoryElem.innerHTML = 'Obese' 
        bmiResult.style.color = 'red'
    }


}

weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)