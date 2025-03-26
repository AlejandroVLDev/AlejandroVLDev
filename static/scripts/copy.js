var permited = false;

//navigator.permissions.query({ name: "write-on-clipboard" }).then((resultado) => {permited = resultado.state == "granted" || resultado.state == "prompt";});

function parseText(text) {
    text = text.replaceAll('&lt;', '<');
    text = text.replaceAll('&gt;', '>');
    return text;
}

function copyToClipboard(id) {
    const code = document.getElementById(id);
    navigator.clipboard.writeText(parseText(code.innerHTML))
    .then(() => {console.log('Contenido copiado al portapapeles');
    },() => {console.error('Error al copiar');});
}
