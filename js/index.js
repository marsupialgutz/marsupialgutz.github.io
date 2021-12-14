this.addEventListener('keypress', event => {

    if (event.key == 'Enter') {

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

                const htmlStr = `<div class="divclass"><img src="https://possums.xyz/imgs/icon.png" class="imgClass" style="width: 150px; height: 150px;">
                                    <div class="divclass2">
                                        <p class="maintext2"><span class="bold">mars<span class="red">@</span>possums.xyz</span></p>
                                        <p class="maintext2"><span class="bold pink">════════════════</span></p>
                                        <p class="maintext2"><span class="red"> </span> Marshall</p>
                                        <p class="maintext2"><span class="orange"> </span> Axyl OS</p>
                                        <p class="maintext2"><span class="yellow"> </span> 16 yrs old</p>
                                        <p class="maintext2"><span class="green"> </span> <span class="js"></span>, <span class="node"></span>, <span class="java"></span>, <span class="python"></span></p>
                                        <p class="maintext2"><span class="blue"> </span> Agender</p>
                                        <p class="maintext2"><span class="purple"> </span> They/Pup/Paw</p>
                                    </div>
                                </div>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "contact":

                var line1 = document.createElement('p');
                line1.innerHTML = '海: <a href="https://twitter.com/mxrsie" style="color:#00A7E7;">@mxrsie</a>';
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
                line6.innerHTML = 'ﳄ: <a href="https://voring.me/@marsupialgutz" style="color:#2E9CB5;">@marsupialgutz@voring.me</a>';
                line6.style.color="#2E9CB5";
                line6.className = "maintext";
                element.appendChild(line6);
                var line7 = document.createElement('p');
                line7.innerHTML = ': <a href="https://keybase.io/marsupialgutz" style="color:#FF6F21;">marsupialgutz</a>';
                line7.style.color="#FF6F21";
                line7.className = "maintext";
                element.appendChild(line7);
                var line8 = document.createElement('p');
                line8.innerHTML = ': <a href="mailto:mars@possums.xyz"" style="color:#AC4142;">mars@possums.xyz</a>';
                line8.style.color="#AC4142";
                line8.className = "maintext";
                element.appendChild(line8);
                var line9 = document.createElement('p');
                line9.innerHTML = 'ﭮ: <a href="https://discord.gg/aUsbCjbrPx" style="color:#5865F2;">marshall#0420</a>';
                line9.style.color="#5865F2";
                line9.className = "maintext";
                element.appendChild(line9);
                break;
                
            case "time":

                var para = document.createElement('p');
                var d = new Date();
                localtime = d.toLocaleTimeString('en-US', { hour12: true });
                var node = document.createTextNode(localtime);
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                break;
            
            case "time24":

                var para = document.createElement('p');
                var d = new Date();
                localtime = d.toLocaleTimeString('en-US', { hour12: false });
                var node = document.createTextNode(localtime);
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

            case "balls":
                
                var para = document.createElement('p');
                var node = document.createTextNode("ratio");
                para.className = "maintext";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "gay":

                var img = document.createElement('img');
                img.src = "imgs/gay.png";
                img.width = img.width / 11.3;
                img.className = "imgClass";
                element.appendChild(img);
                break;

            case "":
                
                return;
            
            case "clear":
            case "cls":

                element.innerHTML = `<p class="maintext">Welcome to PossumShell! Type 'help' for available commands.</p>
                <label class="text" for="command" id="input" style="color: #90a959;">&gt; </label>
                <input class="input" type="text" id="command" name="command" autofocus="">
                <script type="text/javascript" src="js/index.js"></script>`;
                document.getElementById("command").focus();
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