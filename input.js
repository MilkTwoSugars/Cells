function touchStarted() {
    checkAudioContext();
}

function keyPressed() {
    if (keyCode == ENTER){
    grid.fill();
    }
}

function clickPoint() {
    grid.matrix[floor(mouseX / grid.res)][floor(mouseY / grid.res)] = 1;
}
