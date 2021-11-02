//console.log("Quiubo Parce")

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
const PersonaSchema = require('./Modelos/Persona.js')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Conexion a BaseDeDatos:Password=ProgWebMintic2022
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@findworkj.tayad.mongodb.net/Datos?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/',(req,res) =>{
    res.send('El inicio de mi API');
})

router.get('/persona',(req,res) =>{
    PersonaSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo las Personas");
        }else{
            res.send(datos);
        }
        
    
    })
});

router.post('/persona',(req,res) =>{
    let nuevaPersona = new PersonaSchema({
        idPersona : req.body.id,
        documentoPersona : req.body.documento,
        nombrePersona : req.body.nombre,
        apellidoPersona : req.body.apeliido,
        direccionPersona : req.body.direccion,
        emailPersona : req.body.email,
        t_fijoPersona : req.body.telefono_fijo,
        t_celPersona : req.body.telefono_celular,
        urlPersona : req.body.url,
        perfilPersona : req.body.perfil
    });

    nuevaPersona.save(function(err,datos){
        if(err){
            console.log(error);
        }
        res.send("Persona almacenada correctamente.")
    })
});

app.use(router);
app.listen(3000,() =>{
    console.log("Servidor corriendo en el puerto 3000")
});