
let rows = prompt("Enter rows: ");
let cols = prompt("Enter colums: ");

if(rows == "" || rows == null) {
    rows = 10;
}
if(cols == "" || rows == null) {
    cols = 10;
}

createTable(rows, cols);

function createTable(rows, cols){
    let output = "<table border = '1' width= '700' cellspacing = '0' cellpadding = '0'>";

    for(let i = 1; i <= rows; i++){
        output = output + "<tr>";
        for(let j = 2; j <= cols; j++){
            output = output + "<td>" + `${j} * ${i} = ` + i * j + "</td>";
        }
        output = output + "</tr>";
        j = 1;
    }
    output = output + "</table>";
    document.getElementById("table").innerHTML = output;
}
