const textarea = document.getElementById('myTextareaInput');
const buttonEncrypte = document.getElementsByClassName("btnEcrypte");
// Obtener referencia al textarea, botón y contenido
const myTextarea = document.getElementById("myTextareaInput");
const myButton = document.getElementById("btn");
const content = document.getElementById("content");
const noContent = document.getElementById("noContent");
const answerCodified = document.querySelector(".answer-codified");
console.log(myButton);

myButton.addEventListener("click", myFunction);

function myFunction() {
    const textareaValue = myTextarea.value !== undefined ? myTextarea.value.trim() : '';
    console.log(' value textareaValue: ', textareaValue)
    if (textareaValue !== "") {

        const soloLetrasMinusculas = /^[a-z]*$/.test(textareaValue);

        if (soloLetrasMinusculas) {
            let encriptado = '';

            for (let i = 0; i < textareaValue.length; i++) {
                let caracter = textareaValue[i].toLowerCase(); // Convertir a minúsculas
                switch (caracter) {
                    case 'a':
                        encriptado += 'ai';
                        break;
                    case 'e':
                        encriptado += 'enter';
                        break;
                    case 'i':
                        encriptado += 'imes';
                        break;
                    case 'o':
                        encriptado += 'ober';
                        break;
                    case 'u':
                        encriptado += 'ufat';
                        break;
                    default:
                        // Conservar el caracter original si no es una vocal
                        encriptado += caracter;
                }
            }

            // Mostrar el contenido si hay texto
            content.style.display = "flex";
            // Ocultar el mensaje de no contenido
            noContent.style.display = "none";

            answerCodified.value = encriptado;

        } else {
            alert('El texto debe contener solo letras minúsculas y sin caracteres especiales.')
        }
    } else {
        // Mostrar el mensaje de no contenido si no hay texto
        alert(' Insertar data en el input')
        noContent.style.display = "flex";
        // Ocultar el contenido
        content.style.display = "none";
    }
}
function decrypt() {
    //let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    const textareaValue = myTextarea.value !== undefined ? myTextarea.value.trim() : '';
    console.log(' value textareaValue: ', textareaValue)
    if (textareaValue !== "") {
        const reemplazar = [
            ["e", "enter"],
            ["o", "ober"],
            ["i", "imes"],
            ["a", "ai"],
            ["u", "ufat"]
        ];
        const soloLetrasMinusculas = /^[a-z]*$/.test(textareaValue);

        if (soloLetrasMinusculas) {
            let desencriptado = '';
            let palabraDesencriptada = '';
            let palabrasEncriptadas = textareaValue.split(' ');
            console.log('palabrasEncriptadas', palabrasEncriptadas)
            const desencript = (newtext) => {
                for (let i = 0; i < reemplazar.length; i++) {
                    console.log(newtext.includes(reemplazar[i][1]))
                    if (newtext.includes(reemplazar[i][1])) {
                        newtext = newtext.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                    }
                }
                return newtext;
            };

            desencript(textareaValue);
            // Mostrar el contenido si hay texto
            content.style.display = "flex";
            // Ocultar el mensaje de no contenido
            noContent.style.display = "none";

            answerCodified.value = desencript(textareaValue);

        } else {
            alert('El texto debe contener solo letras minúsculas y sin caracteres especiales.')
            noContent.style.display = "flex";
            // Ocultar el contenido
            content.style.display = "none";

        }
    } else {
        // Mostrar el mensaje de no contenido si no hay texto
        alert(' Insertar data en el input')
        noContent.style.display = "flex";
        // Ocultar el contenido
        content.style.display = "none";
    }
}

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Restaurar la altura a auto para calcular la altura del contenido
    this.style.height = (this.scrollHeight) + 'px'; // Ajustar la altura al contenido
});