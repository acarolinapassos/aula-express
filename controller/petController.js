const petModel =require("../model/pet")

const petController = {
 index: (req,res) =>{
     
     res.send(petModel.listarPets());
 },
 add: (req,res) =>{
     let novoPet = req.params;
     petModel.adicionarPet(novoPet)
     res.send(`${novoPet.nome} foi adicionado(a)!`);
 },
 show: (req,res) =>{
     res.send("Exibe um pet expecífico");
 }
};

module.exports = petController;