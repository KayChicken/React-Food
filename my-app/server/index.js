import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Pizza from './models/Pizza.js'



const app = express()
app.use(cors())

mongoose.connect('mongodb+srv://kaychik:52oputih@cluster0.1pefs.mongodb.net/pizzaBD?retryWrites=true&w=majority').then(() => {
    console.log("connected to BD")
}).catch((e) => {
    console.log(e)
})

app.get('/addPizza', async (req, res) => {

    const pizzaData = {


        "title": "Сытная",
        "category": 0,
        "data": [
            {
                "name": "Толстое",
                "basePrice": 400,
                "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/57157f013c164840a24c1d49c7adb3b6_292x292.jpeg",
                "sizes": [
                    {
                        "size": 30,
                        "addPrice": 122
                    },
                    {
                        "size": 45,
                        "addPrice": 253
                    },
                    {
                        "size": 50,
                        "addPrice": 289
                    }
                ]
            },
            {
                "name": "Тонкое",
                "basePrice": 250,
                "imageUrl": "https://cdn.dodostatic.net/static/Img/Products/f440c85c436a4284afad6ecfc43c1fab_292x292.jpeg",
                "sizes": [
                    {
                        "size": 30,
                        "addPrice": 100
                    },
                    {
                        "size": 45,
                        "addPrice": 230
                    },
                    {
                        "size": 50,
                        "addPrice": 300
                    }
                ]
            }
        ]

    }






    try {
        const pizza = new Pizza(pizzaData);
        await pizza.save();
        console.log('Pizza saved successfully');
        res.send('Pizza saved successfully');
    } catch (error) {
        console.error('Error saving pizza:', error);
        res.status(500).send('Error saving pizza');
    }


});






app.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (err) {
        console.error('Error fetching pizzas:', err);
        res.status(500).send('Error fetching pizzas');
    }
})



app.listen(4040, () => {
    console.log("Server is Starterd")
})