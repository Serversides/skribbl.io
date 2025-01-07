// toolbar.js
export function setupToolbar(onToolSelected) {
    const toolbar = document.createElement('div');
    toolbar.style.position = 'absolute';
    toolbar.style.top = '10px';
    toolbar.style.right = '10px';
    toolbar.style.zIndex = '1000';

    const createButton = (text) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.style.marginRight = '5px';
        button.style.padding = '5px 10px';
        button.style.fontSize = '14px';
        button.style.color = 'black';
        button.style.backgroundColor = '#f0f0f0';
        button.style.border = '1px solid #ccc';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        return button;
    };

    const circleButton = createButton('Circle');
    const lineButton = createButton('Line');

    toolbar.appendChild(circleButton);
    toolbar.appendChild(lineButton);
    document.body.appendChild(toolbar);

    circleButton.addEventListener('click', () => {
        setActiveButton(circleButton);
        onToolSelected('Circle');
    });

    lineButton.addEventListener('click', () => {
        setActiveButton(lineButton);
        onToolSelected('Line');
    });

    function setActiveButton(button) {
        circleButton.style.backgroundColor = '#f0f0f0';
        lineButton.style.backgroundColor = '#f0f0f0';
        button.style.backgroundColor = '#ADD8E6'; // Light Blue when active
    }
}
