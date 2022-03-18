this.addEventListener('keypress', event => {

    if (event.key == 'Enter') {

        const element = document.getElementById("main");

        switch (document.getElementById("command").value.toLowerCase()) {

            case "help":

                var para = document.createElement('p');
                var node = document.createTextNode("Available commands: help, mars/tofu/foxy/river, contact, time/time24, nowplaying/np, clear/cls");
                para.className = "maintext animatedFade fade";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "nowplaying":
            case "np":

                var img = document.createElement('img');
                var br = document.createElement('br');
                var br2 = document.createElement('br');
                img.src = "https://possums.xyz/nowplaying/song.png";
                img.className = "imgClass animatedFade fade";
                element.appendChild(br);
                element.appendChild(img);
                element.appendChild(br2);
                break;

            case "mars":

                var htmlStr = `<div class="divclass animatedFade fade"><img src="https://possums.xyz/imgs/mard.png" class="imgClass" style="width: 150px; height: 150px;">
                                    <div class="divclass2">
                                        <p class="maintext2"><span class="bold">mars<span class="red">@</span>possums.xyz</span></p>
                                        <p class="maintext2"><span class="bold pink">══════════════</span></p>
                                        <p class="maintext2"><span class="red"> </span> Mars</p>
                                        <p class="maintext2"><span class="orange"> </span> Deerdog</p>
                                        <p class="maintext2"><span class="yellow"> </span> Coding</p>
                                        <p class="maintext2"><span class="green"> </span> Gay Biro</p>
                                        <p class="maintext2"><span class="blue"> </span> Agender</p>
                                        <p class="maintext2"><span class="purple"> </span> they/pup/paw</p>
                                    </div>
                                </div>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "tofu":
                

                var htmlStr = `<div class="divclass animatedFade fade"><img src="https://possums.xyz/imgs/tof.png" class="imgClass" style="width: 150px; height: 150px;">
                                    <div class="divclass2">
                                        <p class="maintext2"><span class="bold">tofu<span class="red">@</span>possums.xyz</span></p>
                                        <p class="maintext2"><span class="bold pink">══════════════</span></p>
                                        <p class="maintext2"><span class="red"> </span> Tofu</p>
                                        <p class="maintext2"><span class="orange"> </span> Cat</p>
                                        <p class="maintext2"><span class="yellow"> </span> Sleeping</p>
                                        <p class="maintext2"><span class="green"> </span> Gay Ace</p>
                                        <p class="maintext2"><span class="blue"> </span> Boyflux</p>
                                        <p class="maintext2"><span class="purple"> </span> they/he/it</p>
                                    </div>
                                </div>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "foxy":

                var htmlStr = `<div class="divclass animatedFade fade"><img src="https://possums.xyz/imgs/fozy.png" class="imgClass" style="width: 150px; height: 150px;">
                                    <div class="divclass2">
                                        <p class="maintext2"><span class="bold">foxy<span class="red">@</span>possums.xyz</span></p>
                                        <p class="maintext2"><span class="bold pink">══════════════</span></p>
                                        <p class="maintext2"><span class="red"> </span> Foxy</p>
                                        <p class="maintext2"><span class="orange"> </span> Fox</p>
                                        <p class="maintext2"><span class="yellow"> </span> Cuddles</p>
                                        <p class="maintext2"><span class="green"> </span> Biro Ace</p>
                                        <p class="maintext2"><span class="blue"> </span> Agender</p>
                                        <p class="maintext2"><span class="purple"> </span> any (no she)</p>
                                    </div>
                                </div>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "river":

                var htmlStr = `<div class="divclass animatedFade fade"><img src="https://possums.xyz/imgs/rivr.png" class="imgClass" style="width: 150px; height: 150px;">
                                    <div class="divclass2">
                                        <p class="maintext2"><span class="bold">river<span class="red">@</span>possums.xyz</span></p>
                                        <p class="maintext2"><span class="bold pink">══════════════</span></p>
                                        <p class="maintext2"><span class="red"> </span> River</p>
                                        <p class="maintext2"><span class="orange"> </span> Otter</p>
                                        <p class="maintext2"><span class="yellow"> </span> Water</p>
                                        <p class="maintext2"><span class="green"> </span> Aro Ace</p>
                                        <p class="maintext2"><span class="blue"> </span> Agender</p>
                                        <p class="maintext2"><span class="purple"> </span> they/it</p>
                                    </div>
                                </div>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "button":
            
                var htmlStr = `<p class="maintext">Here's a button for my site that you can use on yours!</p>
                <a href="https://possums.xyz" target="_blank"><img src="imgs/button.gif" class="imgClass" style="margin-top: -7px;"></a>`;
                var stuff = document.createElement('div');
                stuff.innerHTML = htmlStr;
                element.appendChild(stuff);
                break;

            case "contact":

                var line1 = document.createElement('p');
                line1.innerHTML = '海: <a href="https://twitter.com/astrodotjpg" style="color:#00A7E7;">@astrodotjpg</a>';
                line1.style.color = "#00A7E7";
                line1.className = "maintext animatedFade fade";
                element.appendChild(line1);
                var line2 = document.createElement('p');
                line2.innerHTML = '阮: <a href="https://open.spotify.com/user/21hvrddjilwmxvx5aueqyamyy" style="color:#1ED761">@puppyboywinter</a>';
                line2.style.color = "#1ED761";
                line2.className = "maintext animatedFade fade";
                element.appendChild(line2);
                var line3 = document.createElement('p');
                line3.innerHTML = ': <a href="https://t.me/astrodotjpg" style="color:#0088CC;">@astrodotjpg</a>';
                line3.style.color = "#0088CC";
                line3.className = "maintext animatedFade fade";
                element.appendChild(line3);
                var line4 = document.createElement('p');
                line4.innerHTML = ': <a href="https://github.com/marsupialgutz" style="color:#94999D;">@marsupialgutz</a>';
                line4.style.color = "#94999D";
                line4.className = "maintext animatedFade fade";
                element.appendChild(line4);
                var line5 = document.createElement('p');
                line5.innerHTML = '戮: <a href="https://steamcommunity.com/id/marsupialgutz" style="color:#66C0F4;">@marsupialgutz</a>';
                line5.style.color = "#66C0F4";
                line5.className = "maintext animatedFade fade";
                element.appendChild(line5);
                var line6 = document.createElement('p');
                line6.innerHTML = 'ﳄ: <a rel="me" href="https://stop.voring.me/@marsupialgutz" style="color:#2E9CB5;">@marsupialgutz@stop.voring.me</a>';
                line6.style.color = "#2E9CB5";
                line6.className = "maintext animatedFade fade";
                element.appendChild(line6);
                var line8 = document.createElement('p');
                line8.innerHTML = ': <a href="https://keybase.io/marsupialgutz" style="color:#FF6F21;">marsupialgutz</a>';
                line8.style.color = "#FF6F21";
                line8.className = "maintext animatedFade fade";
                element.appendChild(line8);
                var line9 = document.createElement('p');
                line9.innerHTML = ': <a href="mailto:mars@possums.xyz"" style="color:#AC4142;">mars@possums.xyz</a>';
                line9.style.color = "#AC4142";
                line9.className = "maintext animatedFade fade";
                element.appendChild(line9);
                var line10 = document.createElement('p');
                line10.innerHTML = 'ﭮ: <a href="https://discord.com/users/449287407142043658" style="color:#5865F2;">astro 🪐#1969</a>';
                line10.style.color = "#5865F2";
                line10.className = "maintext animatedFade fade";
                element.appendChild(line10);
                break;

            case "time":

                var para = document.createElement('p');
                function getTime() {
                    d = new Date();
                    localtime = d.toLocaleTimeString('en-US', { hour12: true });
                    para.innerHTML = localtime;
                }
                getTime();
                setInterval(getTime, 1000);
                para.className = "maintext animatedFade fade";
                element.appendChild(para);
                break;

            case "time24":

                var para = document.createElement('p');
                function getTime24() {
                    d = new Date();
                    localtime = d.toLocaleTimeString('en-US', { hour12: false });
                    para.innerHTML = localtime;
                }
                getTime24();
                setInterval(getTime24, 1000);
                para.className = "maintext animatedFade fade";
                element.appendChild(para);
                break;

            case "rm -rf /":

                var para = document.createElement('p');
                var node = document.createTextNode("Good try :P");
                para.className = "maintext animatedFade fade";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "balls":

                var para = document.createElement('p');
                var node = document.createTextNode("ratio");
                para.className = "maintext animatedFade fade";
                para.appendChild(node);
                element.appendChild(para);
                break;

            case "gay":

                var img = document.createElement('img');
                img.src = "imgs/gay.webp";
                img.width = img.width / 11.3;
                img.className = "imgClass animatedFade fade";
                element.appendChild(img);
                break;

            case "":

                return;

            case "clear":
            case "cls":

                element.innerHTML = `<legend><span id="spanny" style="width: 25%; text-align: left;"></span>
                <span id="spanny2" style="width: 41.6%; text-align: center;">PossumShell - ~/</span>
                <div class="legend">
                    <span class="expand windowControls"></span>
                    <span class="minimize windowControls"></span> 
                    <span class="close windowControls"></span>
                </div>
                </legend>
                <p class="maintext">Welcome to PossumShell! Type 'help' for available commands.</p>
                <label class="text" for="command" id="input" style="color: #28cb93;">> </label>
                <input class="input" type="text" id="command" name="command" autofocus>
                <script type="text/javascript" src="js/index.js"></script>`;
                document.getElementById("command").focus();
                return;

            default:

                var para = document.createElement('p');
                var node = document.createTextNode("Invalid command. Type 'help' for available commands.");
                para.className = "maintext animatedFade fade";
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
