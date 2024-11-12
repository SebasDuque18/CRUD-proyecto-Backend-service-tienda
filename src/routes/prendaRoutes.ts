import { Router } from "express";
import {
  getAllPrendas,
  getPrendaById,
  createPrenda,
  updatePrenda,
  deletePrenda,
} from "../controllers/prendaControllers";

const prendaRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Prenda
 *   description: CRUD relacionado con productos
 */

/**
 * @swagger
 * /api/prenda:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Prendas]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
prendaRoutes.get("/", getAllPrendas);

/**
 * @swagger
 * /api/prenda/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Prendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Detalles del producto
 *       404:
 *         description: Producto no encontrado
 */
prendaRoutes.get("/:id", getPrendaById);

/**
 * @swagger
 * /api/prendas:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Prendas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 *       500:
 *         description: Error en el servidor
 */
prendaRoutes.post("/", createPrenda);

/**
 * @swagger
 * /api/prendas/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Prenda actualizado
 *       404:
 *         description: Prenda no encontrado
 *       500:
 *         description: Error en el servidor
 */
prendaRoutes.put("/:id", updatePrenda);

/**
 * @swagger
 * /api/prendas/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Prendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la prenda
 *     responses:
 *       200:
 *         description: Prenda eliminado
 *       404:
 *         description: Prenda no encontrado
 *       500:
 *         description: Error en el servidor
 */
prendaRoutes.delete("/:id", deletePrenda);

export default prendaRoutes;