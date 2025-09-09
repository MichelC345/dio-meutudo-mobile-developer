import {Request, Response} from "express";
import * as BookService from "../services/book-service";

export const getBooks = async (req: Request, res: Response) => {
    // Lógica para obter a lista de livros
    const httpResponse = await BookService.getBookService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getBookById = async (req: Request, res: Response) => {
    // Lógica para obter um livro por ID
    const bookId = parseInt(req.params.id);
    const httpResponse = await BookService.getBookService(bookId);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const createBook = async (req: Request, res: Response) => {
    // Lógica para criar um novo livro
    const bookData = req.body;
    const httpResponse = await BookService.createBookService(bookData);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updateBook = async (req: Request, res: Response) => {
    // Lógica para atualizar um livro
    const bookId = parseInt(req.params.id);
    const bookData = req.body;
    const httpResponse = await BookService.updateBookService(bookId, bookData);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deleteBook = async (req: Request, res: Response) => {
    // Lógica para deletar um livro
    const bookId = parseInt(req.params.id);
    const httpResponse = await BookService.deleteBookService(bookId);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}