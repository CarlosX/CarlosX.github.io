(function () {
    console.log("Init Tag");
    var buttonElement = null;
    var messageImage = null;
    var messageText = null;
    function init() {
        messageImage = document.querySelector("#message-image");
        messageText = document.querySelector("#message");

        if (!messageImage || !messageText) {
            console.error("No message image or message text");
            return;
        }

        messageImage.addEventListener("input", enableButtonClear);
        messageText.addEventListener("input", enableButtonClear);

        buttonElement = document.createElement("button");
        buttonElement.innerHTML = "<span>Clear fields</span>";
        buttonElement.addEventListener("click", clearInputs);
        buttonElement.style.backgroundColor = "#d3d3d3";
        buttonElement.style.cursor = "not-allowed";
        buttonElement.style.display = "block";
        buttonElement.style.marginTop = "1rem";
        buttonElement.style.width = "100%";
        buttonElement.disabled = true;
        buttonElement.classList.add("button");

        messageImage.parentNode.insertBefore(
            buttonElement,
            messageImage.nextSibling
        );
    }

    function enableButtonClear() {
        if (messageImage.value == "" && messageText.value == "") {
            buttonElement.disabled = true;
            buttonElement.style.backgroundColor = "#d3d3d3";
            buttonElement.style.cursor = "not-allowed";
            return;
        }
        buttonElement.disabled = false;
        buttonElement.style.backgroundColor = "";
        buttonElement.style.cursor = "pointer";
    }

    function clearInputs(e) {
        e.preventDefault();
        messageImage.value = "";
        messageText.value = "";
        enableButtonClear();
    }

    if (document.readyState === "complete") {
        init();
    } else {
        window.addEventListener("load", init);
    }
})();
