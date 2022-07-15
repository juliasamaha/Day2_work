const numberInput = document.getElementById('number-input')
const buttonInput = document.getElementById('button')
const cardBody = document.getElementById('card-body')


buttonInput.addEventListener('click', (event) => {
    const number =  numberInput.value;

    let random = Math.floor(math.random()*10)
    if (random == number) {
        console.log('match')
    }

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = random;
    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);
});