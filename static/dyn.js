let content;
let feats;
console.log("Running script!");

(function main(){
    content = document.getElementById("content");
    feats = {
        velocityX: 1,
        velocityY: 1,
        posX: 0,
        posY: 0,
        width: content.scrollWidth,
        height: content.scrollHeight
    };
    update();
})();
function eventTopBottom(isAtTop) {
    if (isAtTop) {
        feats.posY = 0;
    } else {
        feats.posY = window.innerHeight - feats.height;
    }
    feats.velocityY *= -1;
}
function eventLeftRight(isAtLeft) {
    if (isAtLeft) {
        feats.posX = 0;
    } else {
        feats.posX = window.innerWidth - feats.width;
    }
    feats.velocityX *= -1;
}
function checkCollision() {
    if (feats.posY < 0) {
        eventTopBottom(true);
    }
    if (feats.posX < 0) {
        eventLeftRight(true);
    }
    if (feats.posY > window.innerHeight - feats.height) {
        eventTopBottom(false);
    }
    if (feats.posX > window.innerWidth - feats.width) {
        eventLeftRight(false);
    }
}
function moveContent() {
    feats.posX += feats.velocityX;
    feats.posY += feats.velocityY;
    checkCollision();
    content.style.top = feats.posY + "px";
    content.style.left = feats.posX + "px";
}
function update() {
    setInterval(moveContent, 10);
}