this.addEventListener('keypress', event => {

    if (event.key == 'Enter') {

        // function insertAfter(newNode, referenceNode) {
        //     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        // }

        function formatAMPM(date) {

            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;

        }

        const element = document.getElementById("main");
        document.getElementById("command").value = document.getElementById("command").value.toLowerCase();

        switch (document.getElementById("command").value) {
            
            case "help":

                var para = document.createElement('p');
                var node = document.createTextNode("Available commands: help, about, contact, time");
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "about":
            case "fetch":
            
                var para = document.createElement('p');
                var node = document.createTextNode("\n");
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                var line1 = document.createElement('p');
                var line1text = document.createTextNode("mars@possums.xyz");
                line1.style.color="#9991D9";
                line1.className = "maintext2";
                line1.appendChild(line1text);
                element.appendChild(line1);
                var line2 = document.createElement('p');
                var line2text = document.createTextNode("════════════════");
                line2.className = "maintext2";
                line2.appendChild(line2text);
                element.appendChild(line2);
                var line3 = document.createElement('p');
                var line3text = document.createTextNode("    Marshall");
                line3.style.color="#AC4142";
                line3.className = "maintext2";
                line3.appendChild(line3text);
                element.appendChild(line3);
                var line4 = document.createElement('p');
                var line4text = document.createTextNode("    Arch BTW");
                line4.style.color="#B58900";
                line4.className = "maintext2";
                line4.appendChild(line4text);
                element.appendChild(line4);
                var line5 = document.createElement('p');
                var line5text = document.createTextNode("    16 yrs old");
                line5.style.color="#F4BF75";
                line5.className = "maintext2";
                line5.appendChild(line5text);
                element.appendChild(line5);
                var line6 = document.createElement('p');
                var line6text = document.createTextNode("    , , , ");
                line6.style.color="#90A959";
                line6.className = "maintext2";
                line6.appendChild(line6text);
                element.appendChild(line6);
                var line7 = document.createElement('p');
                var line7text = document.createTextNode("    Boyflux");
                line7.style.color="#6A9FB5";
                line7.className = "maintext2";
                line7.appendChild(line7text);
                element.appendChild(line7);
                var line8 = document.createElement('p');
                var line8text = document.createTextNode("    They/Pup/Paw");
                line8.style.color="#AA759F";
                line8.className = "maintext2";
                line8.appendChild(line8text);
                element.appendChild(line8);
                var img = document.createElement('img');
                img.src = "imgs/icon.png";
                img.style.width = "163px";
                img.style.height = "163px";
                img.className = "imgClass";
                element.insertBefore(img, line1);
                break;

            case "contact":

                var line1 = document.createElement('p');
                line1.innerHTML = '海: <a href="https://twitter.com/puppyboywinter" style="color:#00A7E7;">@puppyboywinter</a>';
                line1.style.color="#00A7E7";
                line1.className = "maintext";
                element.appendChild(line1);
                var line2 = document.createElement('p');
                line2.innerHTML = '阮: <a href="https://open.spotify.com/user/21hvrddjilwmxvx5aueqyamyy" style="color:#1ED761">@puppyboywinter</a>';
                line2.style.color="#1ED761";
                line2.className = "maintext";
                element.appendChild(line2);
                var line3 = document.createElement('p');
                line3.innerHTML = ': <a href="https://t.me/puppyboywinter" style="color:#0088CC;">@puppyboywinter</a>';
                line3.style.color="#0088CC";
                line3.className = "maintext";
                element.appendChild(line3);
                var line4 = document.createElement('p');
                line4.innerHTML = ': <a href="https://github.com/marsupialgutz" style="color:#94999D;">@marsupialgutz</a>';
                line4.style.color="#94999D";
                line4.className = "maintext";
                element.appendChild(line4);
                var line5 = document.createElement('p');
                line5.innerHTML = '戮: <a href="https://steamcommunity.com/id/marsupialgutz" style="color:#66C0F4;">@marsupialgutz</a>';
                line5.style.color="#66C0F4";
                line5.className = "maintext";
                element.appendChild(line5);
                var line6 = document.createElement('p');
                line6.innerHTML = ': <a href="mailto:mars@possums.xyz"" style="color:#AC4142;">mars@possums.xyz</a>';
                line6.style.color="#AC4142";
                line6.className = "maintext";
                element.appendChild(line6);
                var line7 = document.createElement('p');
                line7.innerHTML = 'ﭮ: <a href="https://discord.gg/aUsbCjbrPx" style="color:#5865F2;">marshall#0420</a>';
                line7.style.color="#5865F2";
                line7.className = "maintext";
                element.appendChild(line7);
                break;
                
            case "time":

                var para = document.createElement('p');
                var time = formatAMPM(new Date());
                var node = document.createTextNode(time + " EST");
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "rm -rf /":

                var para = document.createElement('p');
                var node = document.createTextNode("Good try :P");
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "":
                
                return;
            
            default:

                var para = document.createElement('p');
                var node = document.createTextNode("Invalid command. Type 'help' for available commands.");
                para.className = "maintext";
                para.appendChild(node);
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