var compArr = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
if (dataFormStorage) {
  compArr = dataFormStorage;
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "complete") {
    var table = document
      .getElementById("storeList2")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].id;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = dataFormStorage[i].name;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `<input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked
      />
      <label class="form-check-label" for="flexCheckChecked">
        Completed
      </label>`;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<button class="btn btn-danger btn-sm" onclick="onMoveClear(this)">Move to Clear</button>`;
  }
}
function onMoveClear(table) {
  var selectedRow = table.parentElement.parentElement;

  var updateInput = {
    id: selectedRow.cells[0].innerHTML,
    name: selectedRow.cells[1].innerHTML,
    progress: selectedRow.cells[2].innerHTML,
  };

  // var dataPresent = JSON.parse(window.localStorage.getItem("localData"));
  compArr = compArr.map((item) => {
    if (item.id === updateInput.id) {
      item.progress = "clear";
    }
    return item;
  });
  localStorage.setItem("localData", JSON.stringify(compArr));
  var row = table.parentElement.parentElement;
  console.log(row);
  document.getElementById("storeList2").deleteRow(row.rowIndex);
}
