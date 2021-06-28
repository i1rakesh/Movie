const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
     menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }

    let el = document.getElementById('Photo')
    const height = el.clientHeight
    const width = el.clientWidth

    el.addEventListener('mousemove',handleMove)

    function handleMove(e){
      const xVal = e.layerX
      const yVal = e.layerX

      const yRotation = 10 * ((xVal - width / 2) / width)
  
      
      const xRotation = -10 * ((yVal - height / 2) / height)
      
      
      const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
      
      
      el.style.transform = string
    }
    
    
    el.addEventListener('mouseout', function() {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    el.addEventListener('mousedown', function() {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })
    
    
    el.addEventListener('mouseup', function() {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })