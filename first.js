let chocolate = document.getElementById('chocolate');
let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let isDown = false;

chocolate.addEventListener('mousedown', function (e) {
    isDown = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    chocolate.style.backgroundImage="url('HW1/被拉起來的蛋捲.png')";
    chocolate.style.height='500px';
    chocolate.style.width='250px';
    chocolate.style.backgroundSize = "cover";
    document.addEventListener('mousemove', move);
  });
document.addEventListener('mouseup', function (e) {
    if (isDown) {
      offsetX += e.clientX - mouseX;
      offsetY += e.clientY - mouseY;
    }
    isDown = false;
    document.addEventListener('mousemove', move);
    location.href="https://s3839083.github.io/HW2/second.html";
});
function move(e) {
    if (isDown) {
      const dx = e.pageX - mouseX;
      const dy = e.pageY - mouseY;
      chocolate.style.transform = `translate(${offsetX + dx}px,${offsetY + dy}px)`;
      
    }
}
