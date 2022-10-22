const ratingForm = document.querySelector('#rating-form')
const submitBtn = document.querySelector('#submit-btn')
const container = document.querySelector('.container')

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputChecked = ratingForm.querySelector('input:checked')

    if (!inputChecked) {
        return document.querySelector('.required').style.display = 'block'
    }

    container.innerHTML = `
    <div class="thanks-image-container">
    <img src="/images/illustration-thank-you.svg" alt="Obrigado">
    </div>
    <div class="thanks-container">
    <p class="rating-choice">Avaliação: ${inputChecked.value} estrelas</p>
    <h2>Obrigado!</h2>
    <p>Se precisar de mais informações não hesite em nos chamar!</p>
    <p class="projects">Outros projetos: <a href="https://github.com/ValeItalo" target="_blank">github.com/ValeItalo</a></p>
    </div>
    `
})
