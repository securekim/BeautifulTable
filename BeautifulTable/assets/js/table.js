
/*
        {
            "id":"테스트",
            "name":"테스터",
            "button":"버튼", 
            "image":"https://unsplash.it/100/100",
        },
*/
const imageConfig = 
    {
        width : 110,
        height : 110,
        maxWidth: 120,
        maxHeight: 120,
        marginTop : -8,
        marginLeft: -13
    }

const imageRenderer = url => {
    return `<img style='
        margin-left:${imageConfig.marginLeft};
        margin-top:${imageConfig.marginTop}; 
        width:${imageConfig.width}; 
        height:${imageConfig.height}' 
        src='${url.value}'>`
};

const hrefButtonRenderer = row =>{
    onclickParam = JSON.stringify(row.data);
    buttonText = "SUBMIT"
    return `<a href="#" class="button" onclick='testAlert(${onclickParam})'>${buttonText}</a>`
}

const buttonRenderer = row =>{
    onclickParam = JSON.stringify(row.data);
    buttonText = "Submit"
    return `<div class="myForm"><button class="button" onclick='testAlert(${onclickParam})'>${buttonText}</a></div>`
}

let columnDefs = [
    {
        headerName: "", 
        field:"checkbox", 
        maxWidth:55, 
        cellClass: 'cell-wrap-text',
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        showDisabledCheckboxes: true,
    },
    {headerName: "아이디", field: "id"},
    {headerName: "이름", field: "name"},
    {headerName: "이미지", field: "image", cellRenderer:imageRenderer, maxHeight:imageConfig.maxHeight, maxWidth:imageConfig.maxWidth, width: imageConfig.width, height : imageConfig.height },
    {headerName: "Click", field: "button", cellRenderer:hrefButtonRenderer, maxWidth:100, isRowSelectable:false},
  ];


let gridOptions = {}

const onQuickFilterChanged = async (divId) => {
    gridOptions.api.setQuickFilter(document.getElementById(divId).value);
}

const createTable = async(divId, rowData) => {
    gridOptions = {
      rowHeight: 110,
      defaultColDef: {
          filter:true,
          resizable: true,
          sortable: true,
          suppressSizeToFit: false
        },
      columnDefs: columnDefs,
      rowData: rowData,
      rowSelection :'multiple',
      rowMultiSelectWithClick :true,
      pagination:true,
      //paginationAutoPageSize=true,
      isRowSelectable: (params) => {
        if(!!params.data && typeof params.data.selectable !="undefined" && !params.data.selectable){
            return false
        } 
        return true
      },
    };
    var gridDiv = document.querySelector('#'+divId);
    new agGrid.Grid(gridDiv, gridOptions);
    gridOptions.api.sizeColumnsToFit()
}

const updateTable = async (rowData) => {
    gridOptions.api.setRowData(rowData);
}

const testAlert = (data) =>{
    Swal.fire({
        title: 'Submit!',
        text: JSON.stringify(data),
        icon: 'success',
        confirmButtonText: 'Cool'
      })
}

const testSubmit = (data) =>{
    Swal.fire({
        title: 'Submit!',
        text: JSON.stringify(getSelectedRowData()),
        icon: 'info',
        confirmButtonText: 'Cool'
      })
}

const getSelectedRowData = () => {
    const selectedData = gridOptions.api.getSelectedRows();
    return selectedData;
}

