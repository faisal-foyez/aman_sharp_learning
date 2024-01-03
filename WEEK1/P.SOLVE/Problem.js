// star pattern 1:
for(var i=1;i<=5;i++){
    let row ="";
    for(var j=1;j<=i;j++){
        row +="*";
    }
    console.log(row);
}
// star pattern 2:
for(var i=1;i<=5;i++){
    let row ="";
    for(var j=5;j>i;j--){
        row +="";
    }
    for(var k=1;k<=i;k++){
        row +="*";
    }
    console.log(row);
}
// star pattern 3:
for(var i=5;i>=1;i--){
    let row ="";
    for(var j=1;j<=i;j++){
        row +="*";
    }
    console.log(row);
}
// star pattern 2:
for(var i=5;i<=1;i--){
    let row ="";
    for(var j=5;j>i;j--){
        row +="";
    }
    for(var k=1;k<=i;k++){
        row +="*";
    }
    console.log(row);
}