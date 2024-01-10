const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const path = require("path");

const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected with Mongodb")
}).catch((err)=>{
    console.log(err)
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

//GET Tasks 
app.get("/api/v1/products", async (req, res) => {
    try {
    const products = await Product.find();

    res.status(200).json({
        success: true,
        products,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
    }
});

app.get("/api/v1/product/:id", async (req, res) => {
    const productId = req.params.id;

    try {
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({
        success: false,
        message: "Task not found",
        });
    }

    res.status(200).json({
        success: true,
        product,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
    }
});


//create task
const candidateName = "RajeshSingh";
const getRandomCharacters = (inputString, count) => {
    const shuffled = inputString.split('').sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).join('');
};

const productSchema = new mongoose.Schema({
name: String,
id: String,
assignee: String,
project: String,
startTime: Date,
[`${candidateName.toLowerCase()}Property`]: {
    type: String,
    default: getRandomCharacters(candidateName, 5),
    },
});

const Product = mongoose.model('Product', productSchema);

app.put("/api/v1/product/new",async(req,res)=>{
const product = await Product.create(req.body)
res.status(200).json({
    success:true,
    product
})
}
)

//Read Task

app.get("/api/v1/products", async (req,res)=>{

    const products =await Product.find()

    res.status(200).json({success:true,products})
})

//delete task

app.delete("/api/v1/product/:id",async(req,res)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not Found"
        })
    }

        await product.deleteOne();

        res.status(200).json({
            success:true,
            message:"Task is Deleted Successfully"
    })
})

//get tasks by name 

app.get("/api/v1/products/searchByName/:name", async (req, res) => {
    const name = req.params.name;
    try {
    const foundProducts = await Product.find({ name: { $regex: name, $options: "i" } });

    if (foundProducts.length === 0) {
        return res.status(404).json({
        success: false,
        message: "No tasks found with the provided name.",
        });
    }

    res.status(200).json({
        success: true,
        products: foundProducts,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
    }
});


//get first 10 tasks by assignee
app.get("/api/v1/products/searchByAssignee/:assignee", async (req, res) => {
    const assignee = req.params.assignee;

    try {
    const foundProducts = await Product.find({ assignee })
        .sort({ startTime: 1 })
        .limit(10);

    if (foundProducts.length === 0) {
        return res.status(404).json({
        success: false,
        message: "No tasks found with the provided assignee.",
        });
    }

    res.status(200).json({
        success: true,
        products: foundProducts,
    });
    } catch (error) {
    console.error(error);
    res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
    }
});



app.listen(4500,()=>{
console.log("server is Working http://localhost:4500")
})