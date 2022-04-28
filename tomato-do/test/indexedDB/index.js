import { addEntryToDb, getEntryFromDb, clearAllEntries } from "./database.js"

// addWord 함수를 작성합니다.
const addWord = (e) => {
    e.preventDefault();
    addEntryToDb('programmingwords', document.querySelector('#inputWord').value);
}

// deleteList 함수를 작성합니다.
const deleteList = (e) => {
    e.preventDefault();
    clearAllEntries('programmingwords');
}


//여기서부터 아래의 코드는, 수정하지 않아도 됩니다.
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