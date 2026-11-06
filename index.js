const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: "¡API desplegada con éxito!",
        estado: "OK"
    });
});

// Ruta de ejemplo adicional
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: "Hola desde tu nueva API en Render" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});