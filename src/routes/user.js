const express = require("express")
const userSchema = require ("../models/user")

const router = express.Router();

//crear usuario
router.post('/users', (req, res) =>{
   const user = userSchema(req.body)
   user
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }))
})
//llamar todos los usuarios
router.get('/users', (req, res) =>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
 })
 // Llamar usuario específico 
 router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
 // actualizar usuario  
 router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email } = req.body
    userSchema
        .updateOne({ _id: id}, { $set: {name, age, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
 // eliminar usuario  
 router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;