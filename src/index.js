const express = require("express"); 
const v1ProductRouter = require("./v1/routes/productRoutes");
const bodyParser = require("body-parser");

const app = express(); 
const PORT = process.env.PORT || 3030; 


app.use(bodyParser.json());
app.use("/api/v1/products", v1ProductRouter);

app.listen(PORT, () => { 
    console.log(`🚀🚀API is listening on port ${PORT}`); 
});