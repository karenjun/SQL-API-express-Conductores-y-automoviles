

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// GET /conductores
app.get('/conductores', async (req, res) => {
  const result = await pool.query('SELECT * FROM conductores');
  res.json(result.rows);
});

// GET /automoviles
app.get('/automoviles', async (req, res) => {
  const result = await pool.query('SELECT * FROM automoviles');
  res.json(result.rows);
});

// GET /conductoressinauto?edad=<numero>
app.get('/conductoressinauto', async (req, res) => {
  const { edad } = req.query;
  const result = await pool.query(`
    SELECT c.* FROM conductores c
    WHERE c.edad < $1
    AND c.nombre NOT IN (SELECT nombre_conductor FROM automoviles)
  `, [edad]);

  //res.json(result.rows); - Lo reemplazo por:
  if (result.rows.length > 0) {
    res.status(200).json(result.rows);
  } else {
    res.status(404).json({ error: 'No se encontraron conductores sin auto con esa edad' });
  }
});

// GET /solitos
app.get('/solitos', async (req, res) => {
  const conductoresSinAuto = await pool.query(`
    SELECT * FROM conductores
    WHERE nombre NOT IN (SELECT nombre_conductor FROM automoviles)
  `);
  const autosSinConductor = await pool.query(`
    SELECT * FROM automoviles
    WHERE nombre_conductor NOT IN (SELECT nombre FROM conductores)
  `);
  //res.json({
  //  conductores: conductoresSinAuto.rows,
  //  automoviles: autosSinConductor.rows
 //}); - Lo reemplazo por:
  if (conductoresSinAuto.rows.length > 0 || autosSinConductor.rows.length > 0) {
    res.status(200).json({
      conductores: conductoresSinAuto.rows,
      automoviles: autosSinConductor.rows
    });
  } else {
    res.status(404).json({ error: 'No se encontraron conductores sin auto ni autos sin conductor' });
  }
});

// GET /auto?patente=<string>
app.get('/auto', async (req, res) => {
  const { patente, iniciopatente } = req.query;
  if (patente) {
    const result = await pool.query(`
      SELECT a.*, c.edad FROM automoviles a
      LEFT JOIN conductores c ON a.nombre_conductor = c.nombre
      WHERE a.patente = $1
    `, [patente]);

    //res.json(result.rows); - Lo reemplazo por:
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ error: 'No se encontró el auto con esa patente' });
    }



  } else if (iniciopatente) {
    const result = await pool.query(`
      SELECT a.*, c.edad FROM automoviles a
      LEFT JOIN conductores c ON a.nombre_conductor = c.nombre
      WHERE a.patente LIKE $1
    `, [iniciopatente + '%']);

   //res.json(result.rows); - lo reemplazo por:
   if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ error: 'No se encontraron autos con ese inicio de patente' });
    }

  } else {
    res.status(400).json({ error: 'Debes enviar patente o iniciopatente' });
  }
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
