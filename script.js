document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    const response = await fetch('/comentarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, comentario })
    });

    if (response.ok) {
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
        cargarComentarios();
    }
});

async function cargarComentarios() {
    const response = await fetch('/comentarios');
    const comentarios = await response.json();
    const lista = document.getElementById('lista-comentarios');
    lista.innerHTML = comentarios.map(comentario =>
    `<div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${comentario.nombre}</h5>
          <p class="card-text">${comentario.comentario}</p>
        </div>
      </div>
    </div>`
  ).join('');
}

// Cargar comentarios al inicio
cargarComentarios();
