// const showHideIngredient = document.querySelector('#ingredients h4')

// showHideIngredient.addEventListener('click', function () {

//     if (showHideIngredient.innerHTML === "ESCONDER") {
//         showHideIngredient.innerHTML = "MOSTRAR"
//         document.getElementById('ingContent').className = 'topic-content-hidde';

//     } else if (showHideIngredient.innerHTML === "MOSTRAR") {
//         showHideIngredient.innerHTML = "ESCONDER"
//         document.getElementById('ingContent').className = 'topic-content'
//     }
// })


// const showHidePreparation = document.querySelector('#preparation h4')

// showHidePreparation.addEventListener('click', function () {

//     if (showHidePreparation.innerHTML === "ESCONDER") {
//         showHidePreparation.innerHTML = "MOSTRAR"
//         document.getElementById('prepContent').className = 'topic-content-hidde';

//     } else if (showHidePreparation.innerHTML === "MOSTRAR") {
//         showHidePreparation.innerHTML = "ESCONDER"
//         document.getElementById('prepContent').className = 'topic-content'
//     }
// })


// const showHideInformation = document.querySelector('#information h4')

// showHideInformation.addEventListener('click', function () {

//     if (showHideInformation.innerHTML === "ESCONDER") {
//         showHideInformation.innerHTML = "MOSTRAR"
//         document.getElementById('infContent').className = 'topic-content-hidde';

//     } else if (showHideInformation.innerHTML === "MOSTRAR") {
//         showHideInformation.innerHTML = "ESCONDER"
//         document.getElementById('infContent').className = 'topic-content'
//     }
// })


// const formDelete = document.querySelector("#form-delete")
// formDelete.addEventListener("submit", function (event) {
//     const confirmation = confirm("Deseja Deletar?")
//     if (!confirmation) {
//         event.preventDefault()
//     }
// })


function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

function addPreparation() {
    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation");

    // Realiza um clone do último preparatione adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparations.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient)
document.querySelector(".add-pass").addEventListener("click", addPreparation)