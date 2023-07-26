import { Modal } from './modal.js'

function calcAndReturnImc(weight, height){
    let imc = (weight / ( (height / 100) ** 2)).toFixed(2) 

    Modal.result.innerText = 'Seu imc é de ' + imc
    Modal.open()
}

function isNotANumber(value){
    return isNaN(value) || value == ""
}

export { calcAndReturnImc, isNotANumber }