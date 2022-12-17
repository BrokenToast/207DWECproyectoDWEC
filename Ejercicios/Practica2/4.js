document.write(`
<style>
table,tr,td{
    border: 1px solid black;
    border-spacing: 0em;
}
.cod{
    background-color: rgb(190, 188, 188);
}
td{
    width: 5em;
    text-align: center;
}
</style>
`);
document.write("<table>");
let html,cont=0,acu;
for(let tr=1;tr<=1000;tr++){
    for(let td=1;td<=10;td++,++cont){
        acu=cont+32;
      if(td==1){
        html=`<td class="cod">${acu}</td><td>/&#${acu}</td>`;
      }else{
        html=html+`<td class="cod">${acu}</td><td>/&#${acu}</td>`;
      }    
    }
    document.write(`<tr>${html}</tr>`);
}
document.write("</table>");