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
        console.log(' enter here ')
        // Mostrar el contenido si hay texto
        content.style.display = "flex";
        // Ocultar el mensaje de no contenido
        noContent.style.display = "none";

        answerCodified.value = textareaValue;
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