import { addEntryToDb, getEntryFromDb, clearAllEntries } from "./database.js"

const addWord = (e) => {
    e.preventDefault();
    addEntryToDb('programmingwords', document.querySelector('#inputWord').value);
}

const deleteList = (e) => {
    e.preventDefault();
    clearAllEntries('programmingwords');
}

const showWordList = async (e) => {
  e.preventDefault()
  
  wordListTag.innerHTML = ""
  
  const wordList = await getEntryFromDb('programmingwords')
  wordList.forEach(word => {
    wordListTag.innerHTML += `<li>${word}</li>`
  })
}

const getListButton = document.querySelector('#buttonGetWordList')
const wordListTag = document.querySelector('#wordList')

const wordInput = document.querySelector('#inputWord')
const addWordButton = document.querySelector('#buttonAddWord')

const deleteListButton = document.querySelector('#buttonDeleteAll')

getListButton.addEventListener("click", showWordList)
addWordButton.addEventListener("click", addWord)
deleteListButton.addEventListener("click", deleteList)