// drawingLogic.js
export function drawCircle(x, y, startX, startY) {
    const segments = 36; // Number of segments to approximate the circle
    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
    const angleStep = (2 * Math.PI) / segments;

    let prevX = startX + radius;
    let prevY = startY;

    for (let i = 1; i <= segments; i++) {
        const angle = i * angleStep;
        const newX = startX + radius * Math.cos(angle);
        const newY = startY + radius * Math.sin(angle);
        sendLineCommand(prevX, prevY, newX, newY); // Send line command to draw each segment of the circle
        prevX = newX;
        prevY = newY;
    }
}

export function drawLine(x, y, startX, startY) {
    sendLineCommand(startX, startY, x, y);
}
