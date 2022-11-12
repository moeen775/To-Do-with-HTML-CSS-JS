var clearArr = [];
var dataFormStorage = JSON.parse(window.localStorage.getItem("localData"));
if (dataFormStorage) {
  clearArr = dataFormStorage;
}

for (let i = 0; i < dataFormStorage.length; i++) {
  if (dataFormStorage[i].progress === "clear") {
    var table = document
      .getElementById("storeList3")
      .getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = dataFormStorage[i].id;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = dataFormStorage[i].name;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = dataFormStorage[i].progress;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = `<button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove</button>`;
  }
}
function onRemove(table) {
  var selectedRow = table.parentElement.parentElement;
  clearArr.splice(selectedRow.sectionRowIndex - 1, 1);
  localStorage.setItem("localData", JSON.stringify(clearArr));
  var row = table.parentElement.parentElement;
  document.getElementById("storeList3").deleteRow(row.rowIndex);
}
