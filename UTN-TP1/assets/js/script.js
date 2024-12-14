// Cambiar colores alternativos en el texto de título
const colors = ["#000000", "#555555", "#CCCCCC", "#FFFFFF"];
document.querySelectorAll('#alternating-text span').forEach((span, i) => {
    span.style.color = colors[i % colors.length];
});

// Previsualizar imagen al cargar archivo
document.getElementById('file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return; // Si no hay archivo, salir

    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = document.createElement('img'); // Crear un elemento <img>
        img.src = ev.target.result; // Establecer la imagen cargada como fuente
        img.style.maxWidth = '100%';

        const uploadSection = document.getElementById('upload');
        uploadSection.innerHTML = ''; // Limpiar el contenido actual
        uploadSection.appendChild(img); // Agregar la imagen previsualizada
    };
    reader.readAsDataURL(file); // Leer archivo como DataURL
});
