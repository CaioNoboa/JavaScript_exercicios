/*
    Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria, faça:
        1. Contar o número de categorias e o número de livros em cada categoria
        2. Contar o número de autores
        3. Mostrar livros do autor Augusto Cury
        4. Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/

// Array:
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },    
];

// 1
function numeroDeCategorias(array) {
    let numberOfCategories = 0;
    let categories = [];
    for (let i = 0; i < array.length; i++) {
        categories.push(" " + array[i].category);
        numberOfCategories += 1;
    }
    return `O número de categorias é ${numberOfCategories} e são:${categories}.`;
}
// console.log(numeroDeCategorias(booksByCategory));

// 2
function numeroDeAutores(array) {
    let books = [];
    for (books of array) {
        books.push(array.books);
    }
    
    // let books = [];
    // for (let i = 0; i < array.length; i++) {
    //     books.push(array[i].books);
    // }
    // return books;

    // let authors;
    // for (let i = 0; i < books.length; i++) {
    //     authors.push(books[i].author);
    // }
    return books;
}
console.log(numeroDeAutores(booksByCategory));