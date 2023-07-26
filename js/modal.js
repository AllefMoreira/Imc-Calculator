export const Modal = {

    modal: document.getElementById('modal'),
    result: document.getElementById('result'),
    closeBtn: document.getElementById('btn-close'),

    open() {
        Modal.modal.classList.add('open')
    },
    close(){
        Modal.modal.classList.remove('open')
    }
}

Modal.closeBtn.onclick = () =>{Modal.close()} 

window.addEventListener('keydown', (event) =>{
    if(event.key == 'Escape'){
        Modal.close()
    }
})

