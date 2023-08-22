let hideText_btn_1 = document.getElementById('hideText_btn_1');
let hideText_1 = document.getElementById('hideText_1');


hideText_btn_1.addEventListener('click', toggleText);

function toggleText() {
    hideText_1.classList.toggle ('show');

    if(hideText_1.classList.contains('show')) {
        hideText_btn_1.innerHTML = 'Read Less';
    }
    else {
        hideText_btn_1.innerHTML = 'Read More'
    }
}
