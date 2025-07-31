const express = require('express');
const app = express();
const corsMiddleware = require ('./middlewares/corsMiddleware')
const loggerMiddleware = require ("./middlewares/loggerMiddleware")
const projectsRouter = require('./routes/ProjectsRoutes')

app.use(express.json());

//Middlewares
app.use(corsMiddleware)
app.use(loggerMiddleware)

//Routes
app.use('/api/projects', projectsRouter)

app.get('/api/status', (req, res) => {
  res.status(200).json({ message: 'API Plateforme éducative lancée !' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});