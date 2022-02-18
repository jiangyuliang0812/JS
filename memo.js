const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')


const listContent = []

function render(){

    let htmlStr = ''

    listContent.forEach(function(item){
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>Inhalt：${item.content}</p>
                <p>Zeit：${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })

    list.innerHTML = htmlStr

}


addedBtn.addEventListener('click', function(){
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)


    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    render()


})

deletedBtn.addEventListener('click', function(){
    listContent.shift()

    render()
})



