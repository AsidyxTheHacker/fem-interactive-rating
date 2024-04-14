let rating;
let numbers = document.querySelectorAll('.rating-num');
let modal = document.querySelector('.modal-container');
let submitBtn = document.getElementById('submitBtn');

numbers.forEach((n) => {
        n.addEventListener('click', () => {
        numbers.forEach(i => i.classList.remove('selected'));
        n.classList.add('selected');
        rating = eval(document.querySelector('.selected').innerText);
    });
});

function submit() {
    modal.innerHTML = `
    <div class="image-container">
        <img src="./images/illustration-thank-you.svg" alt="Thank you image">
        <p class="rating-text">You selected ${rating} out of 5</p>
    </div>
    <div class="text-container">
        <h2 class="title-text">Thank you!</h2>
        <p class="paragraph-text">
            We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to get in touch!
        </p>
    </div>`
    modal.style.justifyContent = 'center';
    document.querySelector('.text-container').style.textAlign = 'center';
};

submitBtn.addEventListener('click', submit);