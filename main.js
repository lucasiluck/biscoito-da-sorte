const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscoito = document.querySelector("#biscoito")
const phrase = document.querySelector("#phrase")

const randomPhrases = ["A vida trará coisas boas se tiver paciência.",
"Demonstre amor e sabedoria em todas as suas ações.",
"O sucesso está na jornada, não no destino final.",
"Acredite em si mesmo e tudo será possível.",
"A sorte favorece os corajosos.",
"Aprenda com os erros do passado para construir um futuro melhor.",
"A amizade é o maior tesouro da vida.",
"O otimismo é a chave para o sucesso.",
"A criatividade está dentro de você, deixe-a fluir.",
"Seja grato pelo que você tem; mais virá em seu caminho.",];

function handleMouseOver(event){
    setTimeout(function(){
    event.preventDefault()
    toggleScreen()
}, 1000);
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function randomPhrase(){
    var randomIndex = Math.floor(Math.random() * randomPhrases.length)
    return randomPhrases[randomIndex]
}

biscoito.addEventListener('mouseover',handleMouseOver)
phrase.textContent = randomPhrase()



