export const AlertError = {
    element: document.getElementById('header'),
    open(){
        AlertError.element.classList.add('open')
    },
    close(){
        AlertError.element.classList.remove('open')
    }
}