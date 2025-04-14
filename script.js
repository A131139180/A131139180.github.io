document.addEventListener('DOMContentLoaded', () => {
    const envw = document.querySelector("#envw");
    const invw = document.querySelector("#invw");
    const content = document.querySelector("#content");
    const guide = document.querySelector("#guide");
    const intro = document.querySelector("#intro");
    const back = document.querySelector("#back");
    const button = document.querySelector("#enbtn");
    const all = document.querySelector("#all");
    const part = document.querySelector("#part");
    const sfintro = document.querySelector("#sfintro");
    const sfinfo = document.querySelector("#sfinfo");
    const coninfo = document.querySelector("#coninfo");
    const metwb = document.querySelector("#metwb");
    const lnres = document.querySelector("#lnres");
    const cdsp = document.querySelector("#cdsp");
    const lnrefl = document.querySelector("#lnrefl");
    const aiuse = document.querySelector("#aiuse");
    const futarr = document.querySelector("#futarr");
    const sfintrobtn = document.querySelector("#sfintrobtn");
    const sfinfobtn = document.querySelector("#sfinfobtn");
    const coninfobtn = document.querySelector("#coninfobtn");
    const metwbbtn = document.querySelector("#metwbbtn");
    const lnresbtn = document.querySelector("#lnresbtn");
    const cdspbtn = document.querySelector("#cdspbtn");
    const lnreflbtn = document.querySelector("#lnreflbtn");
    const aiusebtn = document.querySelector("#aiusebtn");
    const futarrbtn = document.querySelector("#futarrbtn");
    const savedClass = sessionStorage.getItem('envwClass');
    if (savedClass === 'empty') {
        envw.classList.add('empty');
        invw.classList.remove('empty');
        showOnly("sfintro");
    } else {
        envw.classList.remove('empty');
        invw.classList.add('empty');
    }
    button.addEventListener("click",()=>{
        const lastname = document.querySelector("#lastname").value;
        const allElements = document.querySelectorAll("#content *:not(#guide):not(#guide *)");
        if(lastname===""){
            alert("麻煩告訴我您的名字喔~~");
            return false;
        }else{
            envw.classList.add("disappearing");
            setTimeout(()=>{
                envw.classList.add("empty");
                invw.classList.remove("empty");
                showOnly("guide");
                allElements.forEach(element => {
                    element.classList.add("empty");
                });
                sessionStorage.setItem('envwClass', 'empty');
                intro.innerHTML = lastname;
            },700);
            return true;
        };
    });
    back.addEventListener("click",()=>{
        invw.classList.add("empty");
        envw.classList.remove("empty");
        envw.classList.remove("disappearing");
        document.querySelector("#lastname").value="";
        sessionStorage.removeItem('envwClass');
    });
    all.addEventListener("click", () => {
        const allElements = document.querySelectorAll("#content *:not(#guide):not(#guide *)");
        allElements.forEach(element => {
            element.classList.remove("empty");
        });
    });
    
    part.addEventListener("click", () => {
        const elements = document.querySelectorAll("#content *:not(#sfintro):not(#sfintro *)");
        elements.forEach(element => {
            element.classList.add("empty");
        });
    });
    sfintrobtn.addEventListener("click", () => showOnly("sfintro"));
    sfinfobtn.addEventListener("click", () => showOnly("sfinfo"));
    coninfobtn.addEventListener("click", () => showOnly("coninfo"));
    metwbbtn.addEventListener("click", () => showOnly("metwb"));
    lnresbtn.addEventListener("click", () => showOnly("lnres"));
    cdspbtn.addEventListener("click", () => showOnly("cdsp"));
    lnreflbtn.addEventListener("click", () => showOnly("lnrefl"));
    aiusebtn.addEventListener("click", () => showOnly("aiuse"));
    futarrbtn.addEventListener("click", () => showOnly("futarr"));
    function showOnly(targetid){
        const allElements = document.querySelectorAll(`#content *:not(#${targetid}):not(#${targetid} *)`);
        allElements.forEach(element => element.classList.add("empty"));
        const visibleEles = document.querySelectorAll(`#${targetid}, #${targetid} *`);
        visibleEles.forEach(el => el.classList.remove("empty"));
    }
});