import conn from "../conn.js"

const Schema = conn.Schema;

const apostaSchema = new Schema({
    valor: {
        type: Schema.Types.Number,
        min: 0,
        required: true
    },
    retorno: {
        type: Schema.Types.Number,
        required: false,
        default: 0
    },
    bichos: {
        type: [Schema.Types.ObjectId],
        ref: "Bicho",
        validate(v) {
            return v.length <= 5
        },
        required: true
    },
    chavePix: {
        type: Schema.Types.String,
        required: true
    },
    jogo: {
        type: Schema.Types.ObjectId,
        ref: "Jogo"
    }
}, {
    timestamps: true
})

const Aposta = conn.model("Aposta", apostaSchema);

export default Aposta;