import {Request, Response} from "express";
import * as PersonService from "../services/person-service";

export const getPersons = async (req: Request, res: Response) => {
    // Lógica para obter a lista de pessoas
    const httpResponse = await PersonService.getPersonService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}