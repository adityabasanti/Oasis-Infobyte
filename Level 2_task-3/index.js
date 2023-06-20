let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let tasks = document.querySelector('.tasks')


// add button
input.addEventListener('keyup',()=>{
    if(input.value.trim()!=0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')

    }
})

// add tasks to list
addBtn.addEventListener('click', ()=>{
    if(input.value.trim()!=0){
        let newtask = document.createElement('div')
        newtask.classList.add('item')
        newtask.innerHTML= `
        <p>${input.value}</p>
        <div class="item-btn">
        <iconify-icon icon="cil:task" class="mark" style="color: black;" width="35" height="35"></iconify-icon>
        <iconify-icon icon="mdi:close-outline" class="delete" style="color: black;" width="35" height="35"></iconify-icon>
        </div>`
        tasks.appendChild(newtask)
        input.value= ' '
    }
    else{
        alert("Please enter a task")
    }
})

// delete item from lists
tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
    }

})

//mark complete item from lists
tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('mark')){
        e.target.parentElement.parentElement.classList.toggle('completed')
    }

})
