import Bicho from "../models/bicho.js";

async function store(req, res) {
  try {
    await Bicho.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await Bicho.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function show(req, res) {
  try {
    const content = await Bicho.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function update(req, res) {
  try {
    await Bicho.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}
async function destroy(req, res) {
  try {
    await Bicho.findByIdAndDelete(req.params.id).exec();
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
};