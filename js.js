document.addEventListener("click", (event)=>{

if(event.target.matches(".question")){

    let $eventButton = event.target; //selecciona el elemento que desencadeno el click
    let $parrafo = $eventButton.parentNode.nextElementSibling; //seleccion al padre y despues al hermano para llegara los parrafos
    let $arrowIcon = $eventButton.nextElementSibling; // seleccion al hermano del que desencadeno elevento para llegar al icono 


    if($eventButton.classList.contains("active")){
        $eventButton.classList.toggle("active");
        $parrafo.classList.toggle("visible");
        $arrowIcon.classList.toggle("rotate");
    
    }else{

        let $buttons = document.querySelectorAll(".question");  // selecciona todos los botones y les quita la clase active
        $buttons.forEach( element =>{
            element.classList.remove("active");
        })

        let $parrafos = document.querySelectorAll(".response")  //selecciona todas las respuestas y les quita la clase visible
        $parrafos.forEach(element=>{
        element.classList.remove("visible");
        })

        let $arrowIcons = document.querySelectorAll(".arrow-icon"); //selecciona todos los elementos que tienen la clase arrow-icon y se las quita
        $arrowIcons.forEach(element=>{
            element.classList.remove("rotate");
        })

        $eventButton.classList.add("active");  // agrega la clase active al boton que desencadeno el evento
        $parrafo.classList.add("visible");      // agrega la clase visible al parrafo correspondiente.
        $arrowIcon.classList.add("rotate");    // agrega la clase rotate al iconito de flecha correspondiente

    }















/*
    let $button = event.target;
    $button.classList.toggle("active");  // Swichea la clase active en el h3
    




*/

}


})