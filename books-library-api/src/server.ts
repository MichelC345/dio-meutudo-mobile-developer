import express, {Request, Response} from "express";
import createApp from "./app";


const PORT = process.env.PORT || 3333;
const app = createApp();


app.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Hello World!'});
});

app.listen(PORT, () => {  
    console.log('Server running at port', PORT, '...');
});
