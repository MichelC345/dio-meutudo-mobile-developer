import * as httpResponse from "../utils/http-helper";
import * as BookRepository from "../repositories/book-repository";
import { BookModel } from "../models/book-model";

//make id a optional parameter
export const getBookService = async (id?: number) => {
    const data = !id ? await BookRepository.findAllBooks() : await BookRepository.findBookById(id);
    let response = null;

    if (data) {
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }

    // Lógica para obter a lista de livros
    return response;
}

export const updateBookService = async (id: number, bookData: BookModel) => {
    // Lógica para atualizar um livro
    const data = await BookRepository.findAndUpdateBook(id, bookData);
    let response = null;
    if (data) {
        response = await httpResponse.ok("Book updated successfully");
    }else{
        response = await httpResponse.badRequest();
    }
    return response;
}

export const createBookService = async (bookData: BookModel) => {
    // Lógica para criar um novo livro
    const data = await BookRepository.insertBook(bookData);
    let response = null;
    if (data) {
        response = await httpResponse.created(data);
    }else{
        response = await httpResponse.badRequest("Error creating book");
    }
    return response;
}

export const deleteBookService = async (id: number) => {
    // Lógica para deletar um livro
    const deleted = await BookRepository.deleteBook(id);
    let response = null;
    if (deleted) {
        response = await httpResponse.ok("Book deleted successfully");
    }else{
        response = await httpResponse.badRequest();
    }
    return response;
}