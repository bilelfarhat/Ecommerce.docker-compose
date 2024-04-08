// Appel des packages
const express = require("express");
const mongoose = require("mongoose");
const router=express.Router();
const config = require("config");
const cors = require("cors");

// Lancer le module express avec le format JSON
const app = express();
app.use(express.json());
//pour assurer l'affichage des modifications de database
app.use(cors());
//pour restart automatique de server




//Appeler le chemin de connexion
const mongo_url = config.get("mongo_url");

//Permet l'interaction avec MongoDB
mongoose.set("strict", true);
mongoose
  .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Bien connecté à MongoDB");
    
    //link users route
   
    const usersRouter = require('./routes/api/users');
    app.use('/users', usersRouter);
    
    
    //login
    const authRouter = require('./routes/api/auth');
    app.use('/auth', authRouter);
   //add produit
   const addProductRouter=require("./routes/api/products");
   app.use("/products",addProductRouter);

    
    //Démarrer le serveur
    const port = process.env.PORT || 3001;
    app.listen(port, () => console.log(`Bien connecté au serveur via le port ${port}`));
  })
  .catch((err) => console.log(err));