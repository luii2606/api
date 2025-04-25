export const validaciones = (e) => {
  e.preventDefault()
  console.log(e.target.children);
  //todos los que sean requeridos
  const campos = [...e.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento;
    }
  })
  campos.forEach(campo => {
    console.log(campo);

    switch (campo.tagName) {
      case 'INPUT':
        console.log(campo.type);
        
        break;
      //falta validar spaaaaan
       case 'SELECT':
        console.log(campo.type);
        
        break;
    
      default:
        break;
    }
    if (campo.value === "") {
      campo.classList.add("borde_rojo");
    }
  });
  
}