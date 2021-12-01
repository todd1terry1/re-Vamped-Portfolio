const togglebutton = document.getElementsByClassName('toggle')[0]
const links = document.getElementsByClassName('links')[0]

togglebutton.addEventListener('click', () =>{
    links.classList.toggle('active')
})
