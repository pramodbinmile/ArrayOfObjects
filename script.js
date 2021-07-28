var list = [
    {
        "empId" : "1",
        "name" : "Pramod",
        "email" : "xyz@gmail.com",
        "mobile" : "345867891",
        "salary" : "500000",
    },
    {
        "empId" : "2",
        "name" : "Ajay",
         "email" : "abc@gmail.com",
        "mobile" : "9865567891",
        "salary" : "500000"

    },
    {
        "empId" : "3",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "4",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "5",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "6",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "7",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "8",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "9",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "10",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    }
    
]
function arrayOfobj() {
    var cols = [];

    for(var i=0; i<list.length; i++)
    {
        for(var j in list[i])
        {
            if(cols.indexOf(j) === -1)
            {
                cols.push(j);
            }
        }
    }
    var table = document.createElement("table");
    var tr = table.insertRow(-1);
 
    for(var i=0; i<cols.length; i++)
    {
        var theader = document.createElement("th");
         theader.innerHTML = cols[i];

        tr.appendChild(theader);

    }



     for(var i=0; i<2; i++)
    {
        var theader = document.createElement("th");
         theader.innerHTML = '<h>Change</h>';

        tr.appendChild(theader);
    }

    

    for(var i=0; i<list.length; i++)
    {
        trow = table.insertRow(-1);
        for(var j=0; j<cols.length; j++)
        {
            var cell = trow.insertCell(-1);
            cell.innerHTML = list[i][cols[j]];
             
        }

         for(var j=0; j<1; j++)
        {
            var btn = trow.insertCell(-1);
             btn.innerHTML = '<button onclick="edt()" >EDIT</button>';
             
        }    
        for(var j=0; j<1; j++)
        {
            var btn = trow.insertCell(-1);
             btn.innerHTML = '<button onclick="dlt(this)" >DELETE</button>';
             
        }    
    }

    var el = document.getElementById('table');
    el.innerHTML = " ";
    el.appendChild(table);
}
function dlt(row){
      var d = row.parentNode.parentNode;
      d.parentNode.removeChild(d);
  }

function edt(){
    
}