import { BookModel } from "../models/book-model";

const bookDatabase: BookModel[] = require('../data/book-data.json');

export const findAllBooks = async(): Promise<BookModel[]> => {
    return bookDatabase;
}

export const findBookById = async(id: number): Promise<BookModel | null> => {
    const book = bookDatabase.find(book => book.id === id);
    return book || null;
}

export const findAndUpdateBook = async(id: number, bookData: Partial<BookModel>): Promise<BookModel | null> => {
    const bookIndex = bookDatabase.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;
    const updatedBook = {...bookDatabase[bookIndex], ...bookData};
    bookDatabase[bookIndex] = updatedBook;
    return updatedBook;
}

export const insertBook = async(bookData: Omit<BookModel, 'id'>): Promise<BookModel> => {
    const newBook: BookModel = {
        id: bookDatabase.length + 1,
        ...bookData
    };
    bookDatabase.push(newBook);
    return newBook;
}

export const deleteBook = async(id: number): Promise<boolean> => {
    const bookIndex = bookDatabase.findIndex(book => book.id === id);
    if (bookIndex === -1) return false;
    bookDatabase.splice(bookIndex, 1);
    return true;
}