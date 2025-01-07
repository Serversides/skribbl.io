// main.js
(function() {
    'use strict';

    // Import other modules
    import { setupToolbar } from './toolbar.js';
    import { getCanvas, getMousePos, sendLineCommand } from './canvasHelper.js';
    import { drawLine, drawCircle } from './drawingLogic.js';

    let tool = null;  // Current active tool (Circle or Line)
    let isDrawing = false;
    let startX = 0, startY = 0;

    // Setup toolbar UI
    setupToolbar((selectedTool) => {
        tool = selectedTool;
    });

    function startDrawing(event) {
        if (!tool) return;
        const canvas = getCanvas();
        if (!canvas) return;

        const { x, y } = getMousePos(event, canvas);
        isDrawing = true;
        startX = x;
        startY = y;
    }

    function stopDrawing(event) {
        if (!tool || !isDrawing) return;
        const canvas = getCanvas();
        if (!canvas) return;

        const { x, y } = getMousePos(event, canvas);
        if (tool === 'Circle') {
            drawCircle(x, y, startX, startY);
        } else if (tool === 'Line') {
            drawLine(x, y, startX, startY);
        }

        isDrawing = false;
    }

    // Attach mouse events
    document.addEventListener('mousedown', startDrawing);
    document.addEventListener('mouseup', stopDrawing);

})();
