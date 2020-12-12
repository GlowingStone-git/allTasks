"use strict";

let sortPrice = document.querySelector('#sort-price-btn').addEventListener("click", () => {
    let sortType = document.querySelector('#sort-price');

    if (sortType.checked == false) {
        mySort('data-price', 'sort-asc');
        document.querySelector('#sort-price-label').className = 'sort-arrow-down';
    } else if (sortType.checked == true) {
        mySort('data-price', 'sort-desc');
        document.querySelector('#sort-price-label').className = 'sort-arrow-up';
    }

    let clearCheck = document.querySelector('#sort-age');
    clearCheck.checked = false;
    document.querySelector('#sort-age-label').className = 'sort-arrow-down';
});

let sortAge = document.querySelector('#sort-age-btn').addEventListener("click", () => {
    let sortType = document.querySelector('#sort-age');

    if (sortType.checked == false) {
        mySort('data-age', 'sort-asc');
        document.querySelector('#sort-age-label').className = 'sort-arrow-down';
    } else if (sortType.checked == true) {
        mySort('data-age', 'sort-desc');
        document.querySelector('#sort-age-label').className = 'sort-arrow-up';
    }

    let clearCheck = document.querySelector('#sort-price');
    clearCheck.checked = false;
    document.querySelector('#sort-price-label').className = 'sort-arrow-down';
});

let mySort = (dataSet, sortType) => {
    if (sortType == 'sort-asc') {
        let temp = document.querySelector('.card-row');
        for (let i = 0; i < temp.children.length; i++) {
            for (let j = i; j < temp.children.length; j++) {
                if (+temp.children[i].getAttribute(dataSet) >= +temp.children[j].getAttribute(dataSet)) {
                    let replacedNode = temp.replaceChild(temp.children[j], temp.children[i]);
                    insertAfter(replacedNode, temp.children[i]);
                    if (dataSet == 'data-age') {
                        let dataType = document.querySelector('#sort-age');
                        dataType.checked = true;
                    } else if (dataSet == 'data-price') {
                        let dataType = document.querySelector('#sort-price');
                        dataType.checked = true;
                    }
                }
            }
        }
    } else if (sortType == 'sort-desc') {
        let temp = document.querySelector('.card-row');
        for (let i = 0; i < temp.children.length; i++) {
            for (let j = i; j < temp.children.length; j++) {
                if (+temp.children[i].getAttribute(dataSet) <= +temp.children[j].getAttribute(dataSet)) {
                    let replacedNode = temp.replaceChild(temp.children[j], temp.children[i]);
                    insertAfter(replacedNode, temp.children[i]);
                    if (dataSet == 'data-age') {
                        let dataType = document.querySelector('#sort-age');
                        dataType.checked = false;
                    } else if (dataSet == 'data-price') {
                        let dataType = document.querySelector('#sort-price');
                        dataType.checked = false;
                    }
                }
            }
        }

    }
}

let insertAfter = (el, refEl) => {
    return refEl.parentNode.insertBefore(el, refEl.nextSibling);
}


let btn = document.querySelector('.scroll-btn')

function scrollBtn() {
    if (window.pageYOffset > 100) {
        btn.style.opacity = '1';
    } else {
        btn.style.opacity = '0';
    }
}

btn.onclick = function () {
    /*window.scrollTo(0, 0);*/

    let t, s;
    s = document.body.scrollTop || window.pageYOffset;
    t = setInterval(function () {
        if (s > 0) window.scroll(0, s -= 10);
        else clearInterval(t)
    }, 5);
}

window.onscroll = scrollBtn;

let formCheck = document.querySelector('#form-btn');
formCheck.addEventListener('click', () => {
    let input = document.querySelector('#form-input').value;
    if (input == '') {
        alert('Заполните форму');
    } else {
        alert('Спасибо за подписку');
        input.value = '';
    }
});
/*
let like = document.querySelectorAll('.card-like');
like.addEventListener('click', () => {
    document.querySelector('.card-like').classList.add('card-like-active');
    alert('Добавлено в избранное');
});*/

let buttons = document.querySelectorAll('.card-like'),
    button;

for (let i = 0; i < buttons.length; i++) {
    button = buttons[i];
    button.addEventListener('click', () => {
        let temp = document.querySelectorAll('.card-like');
        temp[i].classList.add('card-like-active');
        alert('Добавлено в избранное');
        event.preventDefault();
    });
}
