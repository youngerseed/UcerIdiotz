let installPrompt = null;
const installDiv = document.querySelector('.install-btn ');
const installButton = document.querySelector("#install");
// console.log(installButton)
const closeEl = document.querySelector('.close');
// console.log(closeEl)

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installDiv.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`${result.outcome}`);
    installPrompt = null;
    installDiv.setAttribute("hidden", "");
  });

// close Event 

closeEl.addEventListener("click" , ()=>{
  installDiv.setAttribute("hidden","");
})