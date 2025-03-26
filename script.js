var list = document.querySelector("ul")
function getTask() {
    var task = document.querySelector("input").value;
    console.log(task);
    var li = document.createElement('li')
    li.innerHTML = `${task} <div><span class="complete">✔</span><span class="remove">✘</span></div>`
    list.append(li)
}

var removeBtn = document.querySelector('.remove')
removeBtn.addEventListener('click', ()=>removetask())

function removetask(){
    list.removeChild('li')
}