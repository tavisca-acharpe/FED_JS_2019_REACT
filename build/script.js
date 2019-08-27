var listCity = [];

function CreateTableData(text)
{
  tdData = document.createElement("td");
  tdEdit = document.createElement("td");
  tdDelete = document.createElement("td");
  tr = document.createElement("tr");
  t = document.createTextNode(text);

  buttonDelete = document.createElement("button");
  buttonEdit = document.createElement("button");
  buttonDelete.innerHTML="Delete";
  buttonEdit.innerHTML="Edit";
  buttonEdit.setAttribute("onclick", "EditRow(this)");
  buttonDelete.setAttribute('onclick', 'removeRow(this)');

  tdData.appendChild(t);
  tdEdit.appendChild(buttonEdit);
  tdDelete.appendChild(buttonDelete);

  tr.appendChild(tdData);
  tr.appendChild(tdEdit);
  tr.appendChild(tdDelete);
}

function previousDataDisplay()
{
  for(let i=0; i<listCity.length;i++)
  {
    CreateTableData(listCity[i]);
    document.getElementById("table").appendChild(tr);
  }
}
 
function checkInputConditions(inputValue)
{
  var flag=0; 
  if (inputValue === '') {
    alert("You must write something!");
  } else 
  {
    for(let i=0; i<listCity.length;i++)
    {
      if(inputValue===listCity[i])
      {
        flag=1;
      }
    }
    if(flag===1)
    {
      alert(inputValue +" City is already present");
    }
    else
    {
      return 1;
    }
  }
  return 0;
}

function AddFunction() 
{ 
  var inputValue = document.getElementById("myInput").value;
  inputValue=inputValue.toUpperCase();
    if(checkInputConditions(inputValue))
    {
      CreateTableData(inputValue);
      document.getElementById("table").appendChild(tr);
      listCity.push(inputValue);
    }
  document.getElementById("myInput").value = "";
}

function search(value) {
  for (var i = 0; i<listCity.length; i++) {
    if(((listCity[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
    {
      var node = document.createElement("option");
      var val = document.createTextNode(listCity[i]);
      node.appendChild(val);
      document.getElementById("datalist").appendChild(node);
    }
  }
 }

function removeRow(oButton) {
  var table = document.getElementById('table');
  var index = oButton.parentNode.parentNode.rowIndex;
  table.deleteRow(index);    
  listCity.splice(index, 1);
}

function EditRow(oButton) {
  var table=document.getElementById('table').rows;
  var cell=table[oButton.parentNode.parentNode.rowIndex].cells;
  var inputValue = prompt("Enter your new city name : ");
  inputValue=inputValue.toUpperCase();
  if(checkInputConditions(inputValue))
  {
    cell[0].innerHTML=inputValue; 
    var index = oButton.parentNode.parentNode.rowIndex;
    listCity[index]=inputValue;
  }
}