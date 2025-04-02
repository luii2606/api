import express from "express";
import bodyParser from "body-parser";
import categoriasRouters from "./rutas/categoriasRouters.js";
import productosRouters from "./rutas/productosRouter.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/categorias", categoriasRouters);

app.use("/productos", productosRouters);



app.listen(3000, () => {
  console.log("Funciona bien");

});