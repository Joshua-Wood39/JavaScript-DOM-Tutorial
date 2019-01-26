const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList);

//Get by Id

let banner = document.getElementById('page-banner');

//Get by Class

let titles = document.getElementsByClassName('title');
    //behaves like an array: titles[0], titles[1] . . . etc.

//Get by Tag

let lis = document.getElementsByTagName('li');
    //also like array: lis[0], lis[1] . . . etc.

for(let i = 0; i < titles.length; i ++) {
    console.log(titles[i]);
}

//Array testing and array transform

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach((item) => {
    console.log(item);
});

//Query selector

const wrap = document.querySelector('#wrapper');
console.log(wrap);

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

let books = document.querySelector('#book-list li .name'); //only returns 1 element
//console.log(books);

books = document.querySelectorAll('#book-list li .name'); //returns a collection
console.log(books); //still not an array

Array.from(books).forEach((book) => {  //transform it to an array, for array function use
    console.log(book);
})