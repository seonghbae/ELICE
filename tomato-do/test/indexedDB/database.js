const onRequest = indexedDB.open('programming', 1)

// addEntryToDb 함수를 작성합니다.
const addEntryToDb = (storeName, entry) => {
    const database = onRequest.result;
    const transaction = database.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.add(entry);
}

// clearAllEntries 함수를 작성합니다.
const clearAllEntries = (storeName) => {
    const database = onRequest.result;
    const transaction = database.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.clear();
}


//여기서부터 아래의 모든 주석은 참고용, 학습용입니다. 
//수정하지 않아도 됩니다.

onRequest.onsuccess = async () => {
  const initialData = await getEntryFromDb("programmingwords")
  // initialData는 배열인데, 길이가 0이라면 초기 데이터가 없다는 의미이며, 0이 아니면 있는 경우임.
  const isInitialData = initialData.length === 0 ? false : true
  
  // 이미 초기 데이터 삽입되어 있다면, 다시 삽입할 필요 없음.
  if (isInitialData) {
    return
  }
  
  // 초기 데이터 삽입
  addEntryToDb('programmingwords', 'react')
  addEntryToDb('programmingwords', 'express')
  addEntryToDb('programmingwords', 'webpack')
  addEntryToDb('programmingwords', 'esbuild')
  addEntryToDb('programmingwords', 'babel')
}

onRequest.onupgradeneeded = () => {
  const database = onRequest.result
  database.createObjectStore('programmingwords', {autoIncrement: true})
}

onRequest.onerror = () => {
  alert('Error creating or accessing db')
}


const getEntryFromDb = (storeName, id) => {
  // 비동기 처리로 데이터를 가져옵니다. 
  // 데이터를 가져오는 행위는 항상 비동기로 이루어집니다. 비동기 과목에서 배울 내용이므로, 우선 참고만 해 주세요.
  const data = new Promise((resolve, reject) => {
    const database = onRequest.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    
    // id 인자가 있다면 특정 id의 데이터만 가져오면 되며, 인자가 없다면 모든 데이터를 가져옴.
    const request = id ? store.get(id) : store.getAll()
    request.onerror = () => {
      reject(request.error)
      console.log('error getting data from the store');
    }

    request.onsuccess = () => {
      resolve(request.result)
    }
  })
  
  return Promise.resolve(data)
}


export { addEntryToDb, getEntryFromDb, clearAllEntries }