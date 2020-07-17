const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

// Schema: diz para o banco de dados sobre como devemos armazenar um registro
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//  cria um modelo a partir de um esquema
mongoose.model("Product", ProductSchema);
