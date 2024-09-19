import Jogo from "../models/jogo.js";

async function store(req, res) {
  try {
    await Jogo.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await Jogo.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await Jogo.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await Jogo.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy(req, res) {
  try {
    await Jogo.findByIdAndDelete(req.params.id).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function resolve(req, res) {
  try {

    const numeroEscolhido = [
      Math.ceil(Math.random() * 100),
      Math.ceil(Math.random() * 100),
      Math.ceil(Math.random() * 100),
      Math.ceil(Math.random() * 100),
      Math.ceil(Math.random() * 100),
    ]

    await Jogo.findByIdAndUpdate(req.params.id, {
      numeroEscolhido
    })

    // TODO Implementar logica de pagamento

    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

export default {
  store,
  index,
  show,
  update,
  destroy,
  resolve,
};