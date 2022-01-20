const toggle_btn = document.querySelector('#btn');
let click = false;
const headers2 = document.querySelectorAll('.b2');
const headers1 = document.querySelectorAll('.b1');
toggle_btn.addEventListener('click', function (e) {
    if (!click) {
        e.preventDefault();
        toggle_btn.classList.add('cls1');
        toggle_btn.classList.remove('cls2');
        click = true;

        for(let h=0;h<headers1.length;h++){
           headers1[h].style.display='none';
           headers2[h].style.display='block'
        }


    } else {
        toggle_btn.classList.add('cls2');
        toggle_btn.classList.remove('cls1');
        click = false;
        for(let h=0;h<headers1.length;h++){
            headers2[h].style.display='none';
            headers1[h].style.display='block'
         }

    }
})

