import { darkMode } from './darkmode.js'

darkMode();



const blockQuote = document.querySelector('.quoteBlock')
const button = document.querySelector('button')
const imgdiv = document.createElement('div')
imgdiv.classList.add('imgdiv')


document.addEventListener('DOMContentLoaded', function(){

    displayLoading();

    fetch("https://thatsthespir.it/api")

	.then((response) => response.json())
	.then((elem) => {

        hideLoading();

        const quote = elem.quote
        const author = elem.author
        const photo = elem.photo
        const numb = elem.total_quotes

        const quoteElem = document.createElement('blockquote')
        const quoteAuthor = document.createElement('p')
        const quotePhoto = document.createElement('img')
        const totalQuotes = document.createElement('p')

        quoteElem.textContent = quote;
        quoteElem.classList.add('quote')
        quoteAuthor.textContent = `— ${author},`;
        quoteAuthor.classList.add('author')
        totalQuotes.textContent = `Quotes : ${numb}`;
        quotePhoto.setAttribute('src', photo)
        quotePhoto.setAttribute('alt', `${author}'s photo`)
        quotePhoto.classList.add('photo')

        const authorBlock = document.createElement('div')
        totalQuotes.classList.add('quoteNumb')

        authorBlock.appendChild(quoteAuthor)
        authorBlock.appendChild(totalQuotes)
        imgdiv.appendChild(quotePhoto)

        blockQuote.appendChild(quoteElem)
        blockQuote.appendChild(imgdiv)
        blockQuote.appendChild(authorBlock)


	})

	.catch((error) => {
		console.log("There was an error!", error);

	});

})


button.addEventListener('click', function(){

    displayLoading();


    fetch("https://thatsthespir.it/api")

	.then((response) => response.json())
	.then((elem) => {

        hideLoading();

        const quote = elem.quote
        const author = elem.author
        const photo = elem.photo
        const numb = elem.total_quotes

        const quoteElem = document.querySelector('blockquote')
        const quoteAuthor = document.querySelector('.author')
        const quotePhoto = document.querySelector('.photo')
        const totalQuotes = document.querySelector('.quoteNumb')

        quoteElem.textContent = quote;
        quoteAuthor.textContent = `— ${author},`;
        totalQuotes.textContent = `Quotes : ${numb}`;
        quotePhoto.setAttribute('src', photo)
        quotePhoto.setAttribute('alt', `${author}'s photo`)

	})

	.catch((error) => {
		console.log("There was an error!", error);

	});

})

const loader = document.querySelector('#loader')

function displayLoading() {
    loader.classList.add('display')

    setTimeout(() => {
        loader.classList.remove('display')
    }, 5000)
}

function hideLoading() {
    loader.classList.remove('display')
}