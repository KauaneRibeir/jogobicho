import e from "express";
import jogoController from "../controllers/jogo-controller.js";

const router = e.Router()

router.post("/", jogoController.store)
router.get("/", jogoController.index)
router.get("/:id", jogoController.show)
router.put("/:id", jogoController.update)
router.put("/resolve/:id", jogoController.resolve)
router.delete("/:id", jogoController.destroy)

export default router