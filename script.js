let homeEl = document.getElementById('home-el')
let guestEl = document.getElementById('guest-el')

function add1home(){
    homeEl.textContent ++
    whoIsLeading()
}

function add2home(){
    homeEl.textContent = Number(homeEl.textContent) + 2
    whoIsLeading()
}

function add3home(){
    homeEl.textContent = Number(homeEl.textContent) + 3
    whoIsLeading()
}

function add1guest(){
    guestEl.textContent ++
    whoIsLeading()
}

function add2guest(){
    guestEl.textContent = Number(guestEl.textContent) + 2
    whoIsLeading()
}

function add3guest(){
    guestEl.textContent = Number(guestEl.textContent) + 3
    whoIsLeading()
}

function reset(){
    homeEl.textContent = 0
    guestEl.textContent = 0
    whoIsLeading()
}

function whoIsLeading(){
    if(Number(homeEl.textContent) > Number(guestEl.textContent)){
        homeEl.classList.add("leader")
        guestEl.classList.remove('leader')
    } else if(Number(guestEl.textContent) > Number(homeEl.textContent)){
        homeEl.classList.remove('leader')
        guestEl.classList.add('leader')
    } else{
        homeEl.classList.remove('leader')
        guestEl.classList.remove('leader')
    }
}