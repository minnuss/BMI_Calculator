const inputHeight = document.getElementById('height')
const inputWeight = document.getElementById('weight')
const inputAge = document.getElementById('age')
const maleCheck = document.getElementById('male')
const femaleCheck = document.getElementById('female')
const btnCalc = document.querySelector('.calc')
const btnClear = document.querySelector('.clear')
const resultContainer = document.querySelector('.result')

maleCheck.checked = true
let ageVal = 0
let heightVal = 0
let weightVal = 0
let male;

// Text types array printed as final result
let arrayLegend = ['Underweight', 'Normal', 'Overweight', 'Obese', 'Extremely Obese']
// Color for types array, for coloring final result
let arrayColor = ['#82ccdd', '#78e08f', '#f6b93b', '#e58e26', '#eb2f06']

// initial legend for man from 18-24 age
// https://www.nivea.rs/novo-od-brenda-nivea/online-bmi-kalkulator-nivea?gclid=Cj0KCQjws-OEBhCkARIsAPhOkIbolgHufqOk9MwEhXdVRagEgDL7QCnd0wzKwk3qb0l-40nYHvRKeHAaAv4oEALw_w
let arrayAge = [25, 35, 45, 55, 65, 100]
let legendClass = [20, 25, 30, 40, 100]

// result from calculateBMI() 
let resultBMI;

// index of arrayAge defined from age input
let arrayAgeIdx;

// index of legendClass defined from resultBMI varable
let legendClassIdx;

inputAge.addEventListener('input', (e) => {
    ageVal = +inputAge.value

    // get the index of arrayAge from age input field
    for (let i = 0; i < arrayAge.length; i++) {
        if (ageVal < arrayAge[i]) {
            arrayAgeIdx = i
            break
        }
    }
    // console.log(arrayAgeIdx)
})

maleCheck.addEventListener('change', (e) => {
    if (maleCheck.checked) {
        male = true
        femaleCheck.checked = false
        legendClass = [20, 25, 30, 40, 100]
    }
})

femaleCheck.addEventListener('change', (e) => {
    if (femaleCheck.checked) {
        male = false
        maleCheck.checked = false
        legendClass = [19, 24, 29, 39, 100]
    }
})

inputHeight.addEventListener('input', (e) => {
    heightVal = +e.target.value
})

inputWeight.addEventListener('input', (e) => {
    weightVal = +e.target.value
})
btnCalc.addEventListener('click', calculateBMI)
btnClear.addEventListener('click', clearAll)



// CALCULATE UNIVERSAL BMI
function calculateBMI() {

    // clear all every time someone click calculate
    // clearAll()

    // if inputs are zero, return
    if (heightVal === 0 || weightVal === 0) return

    // universal formula for BMI calculation
    resultBMI = (weightVal / (heightVal * heightVal) * 10000).toFixed(2)
    printResult()
}

// COMPARE BMI WITH GENDER/AGE AND PRINT RESULT  
function printResult() {
    // put age difference to legendManClass
    let finalLegend = legendClass.map(val => val + arrayAgeIdx)
    // console.log(finalLegend)
    let arrayLegendIdx;

    // get the index of finalLegend
    for (let i = 0; i < finalLegend.length; i++) {
        if (resultBMI < finalLegend[i]) {
            arrayLegendIdx = i
            break
        }
    }
    // console.log('ja sam arrayLegendIdx', arrayLegendIdx)

    // legend text is arrayLegendIdx of arrayLegend
    let legendTextVal = arrayLegend[arrayLegendIdx]

    // result printed
    resultContainer.innerHTML = `
    <p>BMI = <span>${resultBMI} kg/㎡</span></p>
    <p class="color">Result: <span >${legendTextVal}</span></p>
    `
    const resultColor = document.querySelectorAll('span')

    resultContainer.style.display = 'block'
    resultColor[0].style.color = arrayColor[arrayLegendIdx]
    resultColor[1].style.color = arrayColor[arrayLegendIdx]
}

// CLEAR ALL FIELDS
function clearAll() {
    // console.log('clicked')
    inputAge.value = ''
    maleCheck.checked = false
    femaleCheck.checked = false
    inputHeight.value = ''
    inputWeight.value = ''
    resultContainer.style.display = 'none'
}


