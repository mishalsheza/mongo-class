const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://sheza23bcs10184:R7dYEDEb0BXKgLeu@cluster0.x96vffi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

  const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    isInStock:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    }
  })
  const productModel = mongoose.model("products",productSchema);
//CREATION
app.post('/api/products' , async(req,res) =>{
    const body = req.body;
    const product = productModel.create({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        isInStock:req.body.isInStock,
        category:req.body.category
        
    })
    console.log(product)

    return res.status(201).json({mesage: "Product Created"});
}

);

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});