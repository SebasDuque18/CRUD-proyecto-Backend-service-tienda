
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Prenda } from "./entities/Prenda";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Prenda],
  migrations:[],
  subscribers:[]
});