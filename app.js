import express from "express";
import bodyParser from "body-parser";
import categoriasRouters from "./rutas/categoriasRouters.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/categorias", categoriasRouters);



app.listen(3000, () => {
  console.log("Funciona bien");

});