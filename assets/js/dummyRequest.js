const getTotalPage = () =>{
    return 2
}

const getMyData_local = (page) => {
    const rowDataPage1 = [
        {
            "id":"Not Selectable",
            "name":"테스터",
            "button":"버튼", 
            "image":"https://unsplash.it/100/100",
            "selectable":false
        },
        {
            "id":"테스트",
            "name":"테스터",
            "button":"버튼", 
            "image":"https://unsplash.it/100/100",
        },
        {
            "id":"test",
            "name":"tester",
            "button":"button", 
            "image":"https://unsplash.it/150/100",
        },
        {
            "id":"myidisverylongcatchmeifyoucan",
            "name":"TEST VERY LONG TEXT SORRY MY NAME IS SO LONG HAHA BUT THIS IS NOT MY NAME. My Name is longlongago",
            "button":"TEST This button is very long but button is short HAHA", 
            "image":"https://unsplash.it/300/200",
        },
        {
            "id":"test2",
            "name":"tester2",
            "button":"button", 
            "image":"https://unsplash.it/150/100",
        },
        {
            "id":"test3",
            "name":"tester3",
            "button":"button", 
            "image":"https://unsplash.it/150/100",
        },
    ]
    const rowDataPage2 = [
        {
            "id":"테스트2",
            "name":"테스터2",
            "button":"버튼2", 
            "image":"https://unsplash.it/100/100",
        }
    ]
    if(page == 1) return rowDataPage1
    else return rowDataPage2
}

const _origin = window.location.origin

const getMyData_online = (url = _origin) =>{
    console.log(url)
    fetch(url)
    .then(response => response.text())
    .then(text => {
      json = JSON.parse(text)
      if(json.code == 200){
        rowData = json.data.rows
        for(var i in rowData){
         //Processing  
        }
        gridOptions.api.setRowData(rowData);
      }
    })
}