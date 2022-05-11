function run(){
    console.log("Hello World!");

    /** 
     * @type HTMLCanvasElement 
    **/
    const canvas = document.getElementById("main-canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = (evnt) => {
    run();
}