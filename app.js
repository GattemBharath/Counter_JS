const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector('.counter__value');
const counterTitle = document.querySelector('.counter__title');
const counterEl = document.querySelector('.counter');

const increaseCounter = () => {
    if (counterValueEl.textContent >= 5) {
        counterValueEl.textContent = 5;
        counterEl.classList.add('counter--limit');
        increaseButtonEl.setAttribute("disabled", 'true');
        decreaseButtonEl.setAttribute("disabled", 'true');
        counterTitle.innerHTML = 'Limit! Buy <b>PRO</b> for > 5';
    } else {
        counterValueEl.textContent++;
    }
    // unfocus (blur)
    increaseButtonEl.blur();
};


increaseButtonEl.addEventListener('click', increaseCounter);

decreaseButtonEl.addEventListener('click', () => {
    if (counterValueEl.textContent > 0) {
        counterValueEl.textContent--;
    }

    // unfocus (blur)
    decreaseButtonEl.blur();
});

resetButtonEl.addEventListener('click', () => {
    counterValueEl.textContent = 0;
    counterEl.classList.remove('counter--limit');
    increaseButtonEl.removeAttribute("disabled");
    decreaseButtonEl.removeAttribute("disabled");
    counterTitle.textContent = 'Fancy Counter';

    // unfocus (blur)
    resetButtonEl.blur();
});

document.addEventListener('keydown', increaseCounter);