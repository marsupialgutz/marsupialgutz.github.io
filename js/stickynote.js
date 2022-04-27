if (localStorage.getItem("title") != null) {
    var title = localStorage.getItem("title");
    document.getElementById("title").value = localStorage.getItem("title").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    if (localStorage.getItem("title") != "") {
        if (localStorage.getItem("title").length < 13)
            document.getElementById("spanny2").innerHTML = "Note: " + localStorage.getItem("title");
        else
            document.getElementById("spanny2").innerHTML = "Note: " + localStorage.getItem("title").substring(0, 13) + "...";
    } else {
        document.getElementById("spanny2").innerHTML = "Note: Untitled";
    }
}

if (localStorage.getItem("content") != null) {
    document.getElementById("content").value = localStorage.getItem("content").substring(0, 735);
}

this.addEventListener('keydown', event => {
    if (event.key == 'Alt') {
        draggable = true;
        dragElement(document.getElementById("main"));
    }
})

this.addEventListener('keyup', event => {
    if (event.key == 'Alt') {
        draggable = false;
    }
})

this.addEventListener('keypress', event => {
    if (event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault();
        var title = document.getElementById("title").value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var content = document.getElementById("content").value.substring(0, 735);
        localStorage.setItem("title", title);
        localStorage.setItem("content", content);
        if (title != "") {
            if (title.length < 13)
                document.getElementById("spanny2").innerHTML = "Note: " + title;
            else
                document.getElementById("spanny2").innerHTML = "Note: " + title.substring(0, 13) + "...";
        } else {
            document.getElementById("spanny2").innerHTML = "Note: Untitled";
        }
    }
})

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        if (!draggable) return;
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}