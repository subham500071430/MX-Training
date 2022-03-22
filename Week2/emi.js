

function monthlyEmi(){
    let p = parseInt(document.getElementById("pa").value);
    let r = parseInt(document.getElementById("ir").value)
    let t =parseInt(document.getElementById("tenure").value)
    let rate= r/1200;
    let part = Math.pow((1+rate), t*12);

    let emi = Math.round(p*rate*part/(part - 1));
    let amtPaid = 0;
    let amtRemaining = 0;
    let table = document.getElementById("tables");
   
    var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            table.deleteRow(i);
        }

    for(let i = 1; i<= t*12; i++){
        
        let row = table.insertRow(i)
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        amtPaid = emi*i;
        amtRemaining = emi*12*t - amtPaid;
        cell1.innerHTML= i+"st Month";
        cell2.innerHTML= emi ;
        cell3.innerHTML =amtRemaining;
        console.log(amtRemaining)
    }

}