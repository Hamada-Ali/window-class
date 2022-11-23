// import elements
const modalElements = document.querySelectorAll('.show-modal');
const  modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');


const removeClass = (ele ,className) => {
    ele.classList.remove(className);
}
const addClass = (ele, className) => {
    ele.classList.add(className);
}
for(let modalEle of modalElements) {
    modalEle.addEventListener('click', removeClass.bind(this ,modal, 'hidden'));
    modalEle.addEventListener('click', removeClass.bind(this ,overlay, 'hidden'));
}

closeModal.addEventListener('click', addClass.bind(this, modal,'hidden'));
closeModal.addEventListener('click', addClass.bind(this, overlay,'hidden'));
document.addEventListener('keydown', e => {
    if(e.key === "Escape") {
        if(!modal.classList.contains('hidden')) {
            addClass(modal, 'hidden');
            addClass(overlay, 'hidden');
        }
    }
});