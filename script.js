function insert_Row() {
    //Write your code here
  var table = document.getElementId("sampleTable");
  var newRow = table.insertRow(0);
  var leftCell = newRow.insertCell(0);
  var rightCell = newRow.insertCell(1);
	  leftCell.innerHTML = "New Cell1";
	  rightCell.innerHTML = "NewCell2";
}
