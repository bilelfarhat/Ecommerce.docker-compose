const express=require("express");
const router=express.Router();
const config=require("config");
const Product=require("../../models/Product");

router.post("/addProduct",async (req,res)=>{
    const { name, price, quantity = 'product' } = req.body;
    const existingProduit = await Product.findOne({ name });


    if (existingProduit) {
        return res.status(400).json({ msg: 'Ce nom existe déjà' });
    }
    const newProduct = new Product({ name, price, quantity});
    
    try {
        // Enregistrement dans la base de données
        await newProduct.save();


        // Rechercher le produit fraîchement ajouté
        const produit = await Product.findOne({ name });


        res.json({
            produit: {
                id: produit.id,
                name: produit.name,
                price: produit.price,
                quantity: produit.quantity,
            },
        });
    } catch (error) {
        res.status(500).json({ msg: 'Une erreur s\'est produite lors de l\'ajout du produit' });
    }
})
module.exports = router;