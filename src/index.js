document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    createList(e.target.task_description.value)
    
  })

})

function createList(toDo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${toDo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()

}