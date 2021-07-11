var mouseEvent="empty"
var lastPosition_ofX,lastPosition_ofY
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="chocolate"
widthOfLine=5
canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
    color=document.getElementById("color").value
    widthOfLine=document.getElementById("width_of_line").value
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",my_mouse_up)
function my_mouse_up(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouse_leave)
function my_mouse_leave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",my_mouse_move)
function my_mouse_move(e){
    currentPosition_of_mouseX=e.clientX-canvas.offsetLeft;
    currentPosition_of_mouseY=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mousedown"){
        console.log("current position of X and Y coordinates is equal to")
        console.log("X= "+currentPosition_ofX+"Y= "+currentPosition_ofY)
        ctx.moveTo(currentPosition_ofX,lastPosition_ofY)
        console.log("current position of X and Y coordinates is equal to")
        console.log("X= "+currentPosition_of_mouseX+"Y= "+currentPosition_of_mouseY)
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine
        ctx.rect(150,143,430,200)
        ctx.arc(currentPosition_of_mouseX,currentPosition_of_mouseY,radius,0,2*Math.PI);   
        ctx.strokeStyle()
    }
    lastPosition_ofX=currentPosition_of_mouseX
    lastPosition_ofY=currentPosition_of_mouseY
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}