this.addEventListener('keydown', event => {
    if (event.key === '1' && event.ctrlKey) {
        window.location.replace("https://possums.xyz/");
    }
    if (event.key == '2' && event.ctrlKey) {
        window.location.replace("https://possums.xyz/ws2");
    }
    if (event.key == '3' && event.ctrlKey) {
        window.location.replace("https://possums.xyz/ws3");
    }
})