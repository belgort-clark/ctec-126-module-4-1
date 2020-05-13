const calc = () => {
    const num1 = parseInt(document.querySelector('#value1').value)
    const num2 = parseInt(document.querySelector('#value2').value)
    const operator = document.querySelector('#operator').value
    const result = document.querySelector('[data-result]')
    let calculation
