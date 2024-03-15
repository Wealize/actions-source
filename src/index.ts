import express from 'express';

(async () => {
  const app = express();
  // Ruta para obtener el JWK
  app.get('/jwk', (req, res) => {
    res.json({
      "abc": "This is from the branch example"
    });
  });
  // Iniciar el servidor
  await app.listen(process.env.PORT);
  console.log(`Server listening in http://localhost:${process.env.PORT}`);
})();