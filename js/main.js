import { AlertError } from './alertError.js'
import { calcAndReturnImc, isNotANumber } from './utils.js'

const formSubmit = document.querySelector('form')

const inputWeight = document.getElementById('weight')
let inputHeight = document.getElementById('height')

formSubmit.onsubmit = handleOpenModal
formSubmit.oninput = () =>{
    AlertError.close()
}

function handleOpenModal(e){
    e.preventDefault()

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    

    const showAlertError = isNotANumber(weight)  || isNotANumber(height)

    if(showAlertError){
        AlertError.open()
    } else{
        calcAndReturnImc(weight, height)
        AlertError.close()
    }
}

