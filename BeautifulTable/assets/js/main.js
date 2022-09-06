
if(typeof $window == "undefined"){
    rowData = getMyData_local(1)
    createTable("grid",rowData)

} else {
    $window.on('load', function() {
        rowData = getMyData_local(1)
        createTable("grid",rowData)
    })
}
