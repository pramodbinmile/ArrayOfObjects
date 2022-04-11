var list = [
    {
        "empId" : "1",
        "name" : "Pramod",
        "email" : "xyz@gmail.com",
        "mobile" : "345867891",
        "salary" : "100000",
    },
    {
        "empId" : "2",
        "name" : "Ajay",
         "email" : "abc@gmail.com",
        "mobile" : "9865567891",
        "salary" : "200000"

    },
    {
        "empId" : "3",
        "name" : "Pradeep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "300000"

    },
    {
        "empId" : "4",
        "name" : "deep",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "400000"

    },
    {
        "empId" : "5",
        "name" : "Pra",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "500000"

    },
    {
        "empId" : "6",
        "name" : "Ram",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "600000"

    },
    {
        "empId" : "7",
        "name" : "Ramesh",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "700000"

    },
    {
        "empId" : "8",
        "name" : "Pari",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "800000"

    },
    {
        "empId" : "9",
        "name" : "Anchal",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "900000"

    },
    {
        "empId" : "10",
        "name" : "Yadav",
        "email" : "uvw@gmail.com",
        "mobile" : "1234567891",
        "salary" : "1000000"

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
         theader.innerHTML = '<h>Button</h>';

        tr.appendChild(theader);
        
    }
    trow = table.insertRow(-1);
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt0(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt1(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt2(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt3(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt4(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt5(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt6(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt7(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt8(this)" >EDIT</button>';
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="edt9(this)" >EDIT</button>';
    

    for(var i=0; i<list.length; i++)
    {
        trow = table.insertRow(-1);
        for(var j=0; j<cols.length; j++)
        {
            var cell = trow.insertCell(-1);
            cell.innerHTML = list[i][cols[j]];
             
        }

        //  for(var j=0; j<1; j++)
        // {
        //     var btn = trow.insertCell(-1);
        //      btn.innerHTML = '<button onclick="edt(this)" >EDIT</button>';
             
             
        // }
            
        // var btn = trow.insertCell(-1);
        // btn.innerHTML = '<button onclick="edt(this)" >EDIT</button>';
        
        var btn = trow.insertCell(-1);
        btn.innerHTML = '<button onclick="dlt(this)" >DELETE</button>';
        
    }
    

    var el = document.getElementById('table');
    el.innerHTML = " ";
    el.appendChild(table);

}
function dlt(row){
      var d = row.parentNode.parentNode;
      d.parentNode.removeChild(d);
  }

function edt0()
    {  
        document.getElementById('empid').value = list[0].empId;
        document.getElementById('name').value = list[0].name;
        document.getElementById('email').value = list[0].email;
        document.getElementById('mobile').value = list[0].mobile;
        document.getElementById('salary').value = list[0].salary;
    }
function edt1()
    {  
        document.getElementById('empid').value = list[1].empId;
        document.getElementById('name').value = list[1].name;
        document.getElementById('email').value = list[1].email;
        document.getElementById('mobile').value = list[1].mobile;
        document.getElementById('salary').value = list[1].salary;
    }  
    function edt2()
    {  
        document.getElementById('empid').value = list[2].empId;
        document.getElementById('name').value = list[2].name;
        document.getElementById('email').value = list[2].email;
        document.getElementById('mobile').value = list[2].mobile;
        document.getElementById('salary').value = list[2].salary;
    }
function edt3()
    {  
        document.getElementById('empid').value = list[3].empId;
        document.getElementById('name').value = list[3].name;
        document.getElementById('email').value = list[3].email;
        document.getElementById('mobile').value = list[3].mobile;
        document.getElementById('salary').value = list[3].salary;
    }  
    function edt4()
    {  
        document.getElementById('empid').value = list[4].empId;
        document.getElementById('name').value = list[4].name;
        document.getElementById('email').value = list[4].email;
        document.getElementById('mobile').value = list[4].mobile;
        document.getElementById('salary').value = list[4].salary;
    }
function edt5()
    {  
        document.getElementById('empid').value = list[5].empId;
        document.getElementById('name').value = list[5].name;
        document.getElementById('email').value = list[5].email;
        document.getElementById('mobile').value = list[5].mobile;
        document.getElementById('salary').value = list[5].salary;
    }  
    function edt6()
    {  
        document.getElementById('empid').value = list[6].empId;
        document.getElementById('name').value = list[6].name;
        document.getElementById('email').value = list[6].email;
        document.getElementById('mobile').value = list[6].mobile;
        document.getElementById('salary').value = list[6].salary;
    }
function edt7()
    {  
        document.getElementById('empid').value = list[7].empId;
        document.getElementById('name').value = list[7].name;
        document.getElementById('email').value = list[7].email;
        document.getElementById('mobile').value = list[7].mobile;
        document.getElementById('salary').value = list[7].salary;
    }
    function edt8()
    {  
        document.getElementById('empid').value = list[8].empId;
        document.getElementById('name').value = list[8].name;
        document.getElementById('email').value = list[8].email;
        document.getElementById('mobile').value = list[8].mobile;
        document.getElementById('salary').value = list[8].salary;
    }
function edt9()
    {  
        document.getElementById('empid').value = list[9].empId;
        document.getElementById('name').value = list[9].name;
        document.getElementById('email').value = list[9].email;
        document.getElementById('mobile').value = list[9].mobile;
        document.getElementById('salary').value = list[9].salary;
    }    
  

function updt(){
        trow = table.insertRow(-1);
         
        var cell = trow.insertCell(-1);
        cell.innerHTML = document.getElementById('empid').value
        var cell = trow.insertCell(-1);
        cell.innerHTML = document.getElementById('name').value
        var cell = trow.insertCell(-1);
        cell.innerHTML = document.getElementById('email').value
        var cell = trow.insertCell(-1);
        cell.innerHTML = document.getElementById('mobile').value
        var cell = trow.insertCell(-1);
        cell.innerHTML = document.getElementById('salary').value
        
        //third commit
}
  
  
