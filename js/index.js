this.addEventListener('keypress', event => {
    if (event.key == 'Enter') {
        switch (document.getElementById("command").value) {
            case "help":
                var para = document.createElement('p');
                var node = document.createTextNode("Available commands: help, about, contact.");
                para.className = "maintext";
                para.appendChild(node);
                var element = document.getElementById("main");
                element.appendChild(para);
                break;
            case "about":
                var para = document.createElement('p');
                var node = document.createTextNode("Sample text");
                para.className = "maintext";
                para.appendChild(node);
                var element = document.getElementById("main");
                element.appendChild(para);
                break;
            case "contact":
                var para = document.createElement('p');
                var node = document.createTextNode("Sample text 2");
                para.className = "maintext";
                para.appendChild(node);
                var element = document.getElementById("main");
                element.appendChild(para);
                break;
            default: 
                var para = document.createElement('p');
                var node = document.createTextNode("Invalid command. Type 'help' for available commands.");
                para.className = "maintext";
                para.appendChild(node);
                var element = document.getElementById("main");
                element.appendChild(para);
        }
        
        function insertAfter(referenceNode, newNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        
        var text = document.getElementById("input");
        var textNode = text.cloneNode(true);
        element.appendChild(textNode);
        var input = document.getElementById("command");
        var inputNode = input.cloneNode(true);
        element.appendChild(inputNode);
        var inputData = input.value;
        var inputDataNode = document.createTextNode(inputData);
        insertAfter(input, inputDataNode);
        element.removeChild(input);

    }
})