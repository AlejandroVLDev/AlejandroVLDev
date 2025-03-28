var permited = false;

function parseText(text) {
    text = text.replaceAll('&lt;', '<');
    text = text.replaceAll('&gt;', '>');
    return text;
}

function copyToClipboard(button) {
    const pre = button.parentElement.parentElement.querySelector('pre');
    navigator.clipboard.writeText(parseText(pre.innerHTML))
    .then(() => {console.log('Contenido copiado al portapapeles');
    },() => {console.error('Error al copiar');});
}
