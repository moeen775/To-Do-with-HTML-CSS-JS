var newArray = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
// console.log(dataFormStorage);
if (dataFormStorage) {
  newArray = dataFormStorage;
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].status === "pending") {
    var table = document
      .getElementById("storeList1")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell_1 = row.insertCell(0);
    cell_1.innerHTML = dataFormStorage[i].id;
    var cell_2 = row.insertCell(1);
    cell_2.innerHTML = dataFormStorage[i].taskName;
    var cell_3 = row.insertCell(2);
    cell_3.innerHTML = dataFormStorage[i].date;
    var cell_4 = row.insertCell(3);
    cell_4.innerHTML = dataFormStorage[i].shift;
    var cell_5 = row.insertCell(5);
    cell_5.innerHTML = dataFormStorage[i].status;
    var cell_6 = row.insertCell(4);
    cell_b.innerHTML = dataFormStorage[i].timeNeed;
    

    var cell_7 = row.insertCell(6);
    cell_7.innerHTML = `<button class="btn btn-primary btn-sm" onclick="onMoveComplete(this)">Move to Complete</button> <button class="btn btn-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}

function onMoveComplete(table) {
  debugger;
  var selectedRow = table.parentElement.parentElement;

  var updateInput = {
    id: selectedRow.cells[0].innerHTML,
    name: selectedRow.cells[1].innerHTML,
    status: selectedRow.cells[2].innerHTML,
  };

  // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
  newArray = newArray.map((item) => {
    if (item.id === updateInput.id) {
      item.status = "complete";
    }
    return item;
  });
  localStorage.setItem("localData", JSON.stringify(newArray));
  var row = table.parentElement.parentElement;
  console.log(row);
  document.getElementById("storeList1").deleteRow(row.rowIndex);
}

function onMoveClear(table) {
  let confirmClear = confirm("Are you confirm to move Todo to clear ?");

  if (confirmClear) {
    // location.reload();
    var selectedRow = table.parentElement.parentElement;

    var updateInput = {
      id: selectedRow.cells[0].innerHTML,
      taskName: selectedRow.cells[1].innerHTML,
      status: selectedRow.cells[2].innerHTML,
    };

    // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
    newArray = newArray.map((item) => {
      if (item.id === updateInput.id) {
        item.status = "clear";
      }
      return item;
    });
    localStorage.setItem("localData", JSON.stringify(newArray));
    var row = table.parentElement.parentElement;
    //console.log(row);
    document.getElementById("storeList1").deleteRow(row.rowIndex);
  }
}
