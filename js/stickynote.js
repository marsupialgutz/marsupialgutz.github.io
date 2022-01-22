if (localStorage.getItem("title") != null) {
    document.getElementById("title").value = localStorage.getItem("title");
    if (localStorage.getItem("title") != "") {
        document.getElementById("spanny2").innerHTML = "Note: " + localStorage.getItem("title");
    } else {
        document.getElementById("spanny2").innerHTML = "Note: " + "Untitled";
    }
}

if (localStorage.getItem("content") != null) {
    document.getElementById("content").value = localStorage.getItem("content");
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
        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;
        localStorage.setItem("title", title);
        localStorage.setItem("content", content);
        if (title != "") {
            document.getElementById("spanny2").innerHTML = "Note: " + title;
        } else {
            document.getElementById("spanny2").innerHTML = "Note: " + "Untitled";
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