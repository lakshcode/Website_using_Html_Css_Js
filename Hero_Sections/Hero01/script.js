const togglebutton = document.getElementsByClassName('toggle-button')[0]
        const navbaritems = document.getElementsByClassName('nav-items')[0]
        togglebutton.addEventListener('click',()=>{
            navbaritems.classList.toggle('active')
})
