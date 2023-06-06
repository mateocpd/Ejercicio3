function contarRepeticiones() {
    const cadena = document.getElementById("cadena").value;
    const caracter = document.getElementById("caracter").value;
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena.charAt(i) === caracter) {
        contador++;
      }
    }
    const resultado = `El carácter "${caracter}" se repite ${contador} veces en "${cadena}".`;
    document.getElementById("resultado").innerText = resultado;
  }