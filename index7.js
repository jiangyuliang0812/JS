// window.alert('')

// EventListener
window.addEventListener('load', function(){
    let p1 = document.getElementById("a")
    console.log(p1)
    p1.innerText = "Julain good"

    let b = document.getElementById("b")
    b.addEventListener('click', function(){
        console.log("按下去了")
    })

    // HTML
    let box1 = document.getElementById('box1')
    box1.innerHTML = '<p>Test</p>'

    
    let input = document.getElementById("input1")
    input.addEventListener('keyup', function(e){
        console.log(e.target.value)
    })

})


