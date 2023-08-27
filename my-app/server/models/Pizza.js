import mongoose from 'mongoose';

const PizzaSchema = new mongoose.Schema({

    title: String,
    category: Number,
    data: [
        {
            _id: false,
            name: String,
            basePrice: Number,
            imageUrl: String,
            sizes: [
                {
                    _id: false,
                    size: Number,
                    addPrice: Number,
                },
            ],
        },
    ],
});

export default mongoose.model('Pizza', PizzaSchema);
