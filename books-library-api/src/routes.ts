import {Router} from "express";
import * as BookController from "./controllers/book-controller";
import * as PersonController from "./controllers/person-controller";

const router = Router();

router.get('/api/books/list', BookController.getBooks);
router.get('/api/books/:id', BookController.getBookById);
router.patch('/api/books/:id', BookController.updateBook);
router.post('/api/books', BookController.createBook);
router.delete('/api/books/:id', BookController.deleteBook);
router.get('/api/persons/list', PersonController.getPersons);

export default router;