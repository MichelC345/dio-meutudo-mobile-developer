import * as PersonRepository from "../repositories/person-repository";
import { noContent, ok } from "../utils/http-helper";

export const getPersonService = async (id?: number) => {
    // Lógica para obter a lista de pessoas ou uma pessoa específica
    const data = await PersonRepository.findAllPersons();
    let response = null;
    if (data) {
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}