import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Prenda } from "../entities/Prenda";

const prendaRepository = AppDataSource.getRepository(Prenda);

// GET - Obtener Todos los Productos
export const getAllPrendas = async(red: Request, res: Response) => {
  try {
    const prenda = await prendaRepository.find();
    res.json(prenda);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener productos." });
  }
};

// GET by ID - Obetener Producto por ID
export const getPrendaById = async(req: Request, res: Response) => {
  try {
    const prenda = await prendaRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(prenda) {
      res.json(prenda);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el producto." });
  }
};

// POST - Crear un nuevo Producto
export const createPrenda = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const prenda = new Prenda();
    prenda.name = name;
    prenda.description = description;
    prenda.price = price;

    await prendaRepository.save(prenda);
    res.status(201).json(prenda);
  } catch(error) {
    res.status(500).json({ message: "Error al crear el producto." });
  }
};

// PUT - Actualizar un Producto existente
export const updatePrenda = async(req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const prenda = await prendaRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(prenda) {
      prenda.name = name ?? prenda.name;
      prenda.description = description ?? prenda.description;
      prenda.price = price ?? prenda.price;

      await prendaRepository.save(prenda);
      res.json(prenda);
    } else {
      res.status(404).json({ message: "Prenda no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el producto." });
  }
};

// DELETE - Borrar un Producto
export const deletePrenda = async(req: Request, res: Response) => {
  try {
    const prenda = await prendaRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (prenda) {
      await prendaRepository.remove(prenda);
      res.json({ message: "Producto eliminado." });
    } else {
      res.status(404).json({ message: "Prenda no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el producto." });
  }
};