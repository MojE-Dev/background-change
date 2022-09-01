const input = document.getElementById('change')
const body = document.getElementById('body')

input.addEventListener('keyup' , function() {
    body.style.backgroundColor = input.value
})