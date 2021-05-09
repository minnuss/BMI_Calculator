const inputHeight = document.getElementById('height')
const inputWeight = document.getElementById('weight')
const btnCalc = document.querySelector('.calc')
const btnClear = document.querySelector('.clear')
const resultContainer = document.querySelector('.result')

let heightVal = 0
let weightVal = 0

let arrayLegend = ['Underweight', 'Normal', 'Overweight', 'Obese', 'Extremely Obese']
let arrayColor = ['#82ccdd', '#78e08f', '#f6b93b', '#e58e26', '#eb2f06']

// resultColor.style.color = arrayColor[0]

inputHeight.addEventListener('input', (e) => {
    heightVal = +e.target.value
    // console.log(heightVal)
})

inputWeight.addEventListener('input', (e) => {
    weightVal = +e.target.value
    // console.log('ja sam value', inputWeight.value)
    // console.log(weightVal)
})

btnCalc.addEventListener('click', calculateBMI)

btnClear.addEventListener('click', clearAll)

function calculateBMI() {
    clearAll()

    if (heightVal === 0 || weightVal === 0) return

    let resultBMI = (weightVal / (heightVal * heightVal) * 10000).toFixed(2)

    let legendTextVal = resultBMI < 18.5 ? 0 : resultBMI < 24.9 ? 1 : resultBMI < 29.9 ? 2 : resultBMI < 34.9 ? 3 : 4;

    resultContainer.innerHTML = `
    <p>BMI = <span>${resultBMI} kg/㎡</span></p>
    <p class="color">Result: <span >${arrayLegend[legendTextVal]}</span></p>
    `
    const resultColor = document.querySelectorAll('span')

    resultContainer.style.display = 'block'
    resultColor[0].style.color = arrayColor[legendTextVal]
    resultColor[1].style.color = arrayColor[legendTextVal]
}

function clearAll() {
    // console.log('clicked')
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    resultContainer.style.display = 'none'
}


