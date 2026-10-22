let homeEl = document.getElementById('home-el')
let guestEl = document.getElementById('guest-el')

function add1home(){
    homeEl.textContent ++
}

function add2home(){
    homeEl.textContent = Number(homeEl.textContent) + 2
}

function add3home(){
    homeEl.textContent = Number(homeEl.textContent) + 3
}

function add1guest(){
    guestEl.textContent ++
}

function add2guest(){
    guestEl.textContent = Number(guestEl.textContent) + 2
}

function add3guest(){
    guestEl.textContent = Number(guestEl.textContent) + 3
}