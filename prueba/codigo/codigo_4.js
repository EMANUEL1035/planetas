let hideText_btn_2 = document.getElementById('hideText_btn_2');
let hideText_2 = document.getElementById('hideText_2');


hideText_btn_2.addEventListener('click', toggleText);

function toggleText() {
    hideText_2.classList.toggle ('show');

    if(hideText_2.classList.contains('show')) {
        hideText_btn_2.innerHTML = 'Read Less';
    }
    else {
        hideText_btn_2.innerHTML = 'Read More'
    }
}
