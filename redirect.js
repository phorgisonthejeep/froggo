function openCCSDWindowAndRedirect() {
        var ccsdWindow = window.open("about:blank", "CCSD", "fullscreen=yes");
        
        if (ccsdWindow) {
            var iframe = document.createElement("iframe");
            iframe.src = "/real.html";
            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";

            ccsdWindow.document.body.appendChild(iframe);
        } else {
            alert("Pop-up blocked. Please enable pop-ups for this website.");
				}
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "5") {
            openCCSDWindowAndRedirect();
        }
    });
			

