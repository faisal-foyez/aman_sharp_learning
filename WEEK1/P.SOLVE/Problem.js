// star pattern 1:
for(let i=1;i<=5;i++){
    let row ='';
    for(let j=1;j<=i;j++){
        row +='*';
    }
    console.log(row);
}


// star pattern 2:
for(let i=1;i<=5;i++){
    let row1 ="";
    for(let j=5;j>i;j--){
        row1 +="_";
    }
    for(let k=1;k<=i;k++){
        row1 +="*";
    }
    console.log(row1);
}
// star pattern 3:
for(let i=5;i>=1;i--){
    let row3 ="";
    for(let j=1;j<=i;j++){
        row3 +="*";
    }
    console.log(row3);
}

// star pattern 4:
for(let i=5;i>=1;i--){
    let row4 ="";
    for(let j=5;j>i;j--){
        row4 +="_";
    }
    for(let k=1;k<=i;k++){
        row4 +="*";
    }
    console.log(row4);
}