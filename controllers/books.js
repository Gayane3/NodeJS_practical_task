import books from "../books.json" assert { type: 'json' };
import fs from "fs";

books.sort( (a, b) => {
    return a.id - b.id
})

export const getAllUsers = (req, res) => {
    res.json(books);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    res.json(books.filter( (book) => book.id === parseInt(id)));
}

export const addNewUser = (req, res) => {
    const body = req.body;
    books.push(body);
    fs.writeFile("books.json", JSON.stringify(books, null, 2), function (err) {
        if (err) throw err;
    });
    res.send(`The book with the name ${body.name} has been added`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    books.forEach( (book, index) => {
        if (book.id === parseInt(id)) {
            books[index] = body;
        }
    });
    fs.writeFile("books.json", JSON.stringify(books, null, 2), function (err) {
        if (err) throw err;
    });
    res.send(`The book with the id ${id} has been updated`);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    books.forEach( (book, index) => {
        if (book.id === parseInt(id)) {
            books.splice(index, 1);
        }
    });
    fs.writeFile("books.json", JSON.stringify(books, null, 2), function (err) {
        if (err) throw err;
    });
    res.send(`The book with the id ${id} has been deleted`)
}

