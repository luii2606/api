

export const validaciones = (e) => {
  e.preventDefault()
  //creamos el objeto para almacenar los datos
    let persona = {}
  console.log(e.target.children);

  //todos los que sean requeridos
  const campos = [...e.target].filter((elemento) => {
     return elemento.hasAttribute('required')
  })
  //capturamos los campos de tipo radio
  const radios = [...campos].filter((elemento) => {
    return elemento.type === 'radio'
  });
  
  //capturamos los campos de tipo checkbox
  const checkbox = [...campos].filter((elemento) => elemento.type === "checkbox");
  // console.log(checkbox);

  //validamos que tengamos al menos 1 campo seleccionado
  const campo_radio = radios.find(((radio) => radio.checked)) || []
 
  const campos_checkbox = checkbox.filter((e) => e.checked);
  // console.log(campos_checkbox);
  
  //validamos que tenga checkbox seleccionados
  if (campos_checkbox.length < 2) {
    persona[checkbox[0].name] = "";
  } else {
    persona[checkbox[0].name] =[...campos_checkbox].map((ele) => ele.value);
  }

  // De no tener un campo de tipo radio seleccionado asignamos un campo vacio
  if (campo_radio.length === 0) {      
    persona[radios[0].name] = "";
  } else {
    persona[campo_radio.name] = campo_radio.value;
  }
  

  //recorremos los elementos
  campos.forEach(campo => {
    if (campo.value == "") {
      if (campo.nextElementSibling) campo.nextElementSibling.remove();
      campo.classList.add("borde_rojo");
      let afterend = document.createElement('span');
      afterend.textContent = "Este campo no puede estar vacio"
      campo.insertAdjacentElement('afterend', afterend);
    }

      let nameCampo = campo.getAttribute("name");
    switch (campo.tagName) {
      case "INPUT":
        if (!campo.value) {
          if (campo.nextElementSibling) campo.nextElementSibling.remove();
          campo.classList.add("form__input");
          let mensaje = document.createElement("span");
          mensaje.classList.add("form__mensaje");
          mensaje.textContent = `Debe ingresar su ${nameCampo}`;
          campo.insertAdjacentElement("afterend", mensaje);
          
        }
          // //  console.log(campo.type);
          // // if (campo.value === "") {
          // //   campo.classList.add("borde_rojo")
          // // }else{
          // persona[campo.name] = campo.value;}
      
          break;
        case "SELECT":
          if (!campo.selectedIndex) {
            if (campo.nextElementSibling) campo.nextElementSibling.remove();
            campo.classList.add("form__input");
            let mensaje = document.createElement("span");
            mensaje.classList.add("form__mensaje");
            mensaje.textContent = `Debe seleccionar una opción de ${nameCampo}`;
            campo.insertAdjacentElement("afterend", mensaje);
          }
          // if (campo.selectedIndex == 0) {
          //   campo.classList.add("borde_rojo")
          // }else{persona[campo.name] = campo.value;}
          break;
        default:
          break;
    }
  });
      if(Object.keys(persona).length > 0) console.log(persona);
}

//cuando pase al otro campo se elimine el mensaje
export const outFocus = (event) => {
  if (event.target.value) {
      event.target.nextSibling.remove();
        event.target.classList.remove("form__input");
  }
}

// limite de solo 10 caracteres
export const limitar = (event) => {
        if (event.target.value.length  == 10) {
          event.preventDefault();
        }
      }