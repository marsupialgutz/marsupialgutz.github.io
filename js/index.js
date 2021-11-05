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
                var node = document.createTextNode("Sample text that I'll work on tomorrow lol");
                para.className = "maintext";
                para.appendChild(node);
                var element = document.getElementById("main");
                element.appendChild(para);
                break;
            case "contact":
                var para = document.createElement('p');
                var node = document.createTextNode("Sample text that I'll work on tomorrow lol 2: Electric Boogaloo");
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

        var text = document.getElementById("input");
        var textNode = text.cloneNode(true);
        element.appendChild(textNode);
        var input = document.getElementById("command");
        var inputNode = input.cloneNode(true);
        element.appendChild(inputNode);
        var inputData = input.value;
        var inputDataNode = document.createTextNode(inputData);
        input.parentNode.insertBefore(inputDataNode, input.nextSibling);
        element.removeChild(input);
        document.getElementById("command").value = '';
        document.getElementById("command").focus();

    }
})