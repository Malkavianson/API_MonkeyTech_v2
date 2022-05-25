import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProdutoSchema = new Schema(
    {
        produto: {
            type: String,
            required: true,
            unique: true
        },
        descricao: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
    },
    { versionKey: false },
);

const Produto = model('produtos', ProdutoSchema);

export default Produto;
