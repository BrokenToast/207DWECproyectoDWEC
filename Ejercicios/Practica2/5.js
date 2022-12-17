document.write(`
<style>
.hijo{
    width: 50px;
    height: 50px;
    position: fixed;
}
</style>
`);
for(let i=1;i<2000;i++){
    var y=parseFloat(Math.random()*100),x=parseFloat(Math.random()*100);
    var r=parseInt(Math.random()*256),g=parseInt(Math.random()*256),b=parseInt(Math.random()*256);
    document.write(`<div class="hijo" style="background-color: rgb(${r},${g},${b});top: ${y}%;left: ${x}%;"></div>`)
}