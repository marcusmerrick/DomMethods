
//button makes image/link appear/disappear

//body
let body = document.querySelector('body')

let main = document.createElement('main')
let btn = document.createElement('button')

//main
let IMG = document.createElement('IMG')
let A = document.createElement('A')

//prepend
body.prepend(main)
body.prepend(btn)
main.prepend(A)
main.prepend(IMG)

//image
IMG.src = './office.png'
let src = document.getElementsByClassName('IMG')



//link
let link = document.createTextNode("if you could click me, that would be greeeaaat")
A.append(link)
A.title = "if you could click me, that would be greeeaaat"
A.href = "https://en.wikipedia.org/wiki/Office_Space"


//button
btn.addEventListener('click', function() {
    main.remove()
})
