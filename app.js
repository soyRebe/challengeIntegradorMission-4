
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const PORT = 3000;


app.use('/', mainRoutes);
app.use('/shop', shopRoutes); // pongo el prefijo shop en la barra asi en la ruta evito repetir el codigo
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use(express.static('public')); // use es un middleware 
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));

app.use((req, res, next)=>{
    res.status(404).send('Pagina no encontrada');
 })


app.listen(PORT, ()=>{

    console.log('Servidor Express estoy conectado en el  puerto http://localhost:3000');
});


