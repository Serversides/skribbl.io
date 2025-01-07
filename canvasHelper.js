// canvasHelper.js
export function getCanvas() {
    return document.querySelector('canvas');
}

export function getMousePos(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

export function sendLineCommand(x1, y1, x2, y2) {
    const canvas = getCanvas();
    if (!canvas || !window.socket) return;

    const scale = canvas.width / canvas.offsetWidth;
    const scaledX1 = Math.round(x1 * scale);
    const scaledY1 = Math.round(y1 * scale);
    const scaledX2 = Math.round(x2 * scale);
    const scaledY2 = Math.round(y2 * scale);

    // Emit the draw event using Skribbl.io's socket
    window.socket.emit('draw', { x1: scaledX1, y1: scaledY1, x2: scaledX2, y2: scaledY2 });
}
