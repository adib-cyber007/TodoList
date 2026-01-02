let locals =JSON.parse(localStorage.getItem("local")) || { items:[] }
function addlocal(item,index)
{
    locals =JSON.parse(localStorage.getItem("local")) || {items:[]}
    let wrapcon=document.querySelector(".wrap-con")
    let temp=document.createElement("div")
    temp.dataset.index=index
    temp.setAttribute("class","wrap")
    temp.innerHTML="<h1>"+item.ti+"</h1> <h3>"+item.ta+"</h3> <h3 class='Ad'>"+item.addr+"</h3> <button class='delete' onclick='del(event)'>Delete</button>"
    wrapcon.appendChild(temp)
}
for(let count=0; count<locals.items.length; count++)
{
    addlocal(locals.items[count],count)
}
function add(){
    var overl=document.getElementById("overlay")
    overl.style.display="block"
    var pop=document.getElementById("popup")
    pop.style.display="flex"
}
function addpop()
{
    let inptitle=document.getElementById("Name")
    title=inptitle.value
    let inptask=document.getElementById("Phone")
    task=inptask.value
    let inpAddr=document.getElementById("Address")
    Addr=inpAddr.value
    locals.items.push({ti:title,ta:task,addr:Addr})
    let wrapcon=document.querySelector(".wrap-con")
    let temp=document.createElement("div")
    temp.setAttribute("class","wrap")
    temp.innerHTML="<h1>"+title+"</h1> <h3>"+task+"</h3> <h3 class='Ad'>"+Addr+"</h3> <button class='delete' onclick='del(event)'>Delete</button>"
    wrapcon.appendChild(temp)
    var overl=document.getElementById("overlay")
    var pop=document.getElementById("popup")
    overl.style.display="none"
    pop.style.display="none"
    localStorage.setItem("local",JSON.stringify(locals))
    temp.dataset.index=locals.items.length-1
    inptitle.value=""
    inptask.value=""
    inpAddr.value=""
}
function popcancel()
{
    var overl=document.getElementById("overlay")
    var pop=document.getElementById("popup")
    overl.style.display="none"
    pop.style.display="none"
}
function del(event){
    let tempwrap=event.target.parentElement
    let ind=tempwrap.dataset.index
    locals.items.splice(ind,1)
    tempwrap.remove()
    localStorage.setItem("local",JSON.stringify(locals))

}
let search=document.querySelector(".search")
search.addEventListener("keyup",function(){
    let search1=document.querySelector(".search")
    let slower=search1.value.toLowerCase()
    let wraps=document.querySelectorAll(".wrap")
    wraps.forEach((wrap)=>{
        let title=wrap.querySelector("h1").innerText.toLowerCase()
        let task=wrap.querySelector("h3").innerText.toLowerCase()
        let Addr=wrap.querySelector(".Ad").innerText.toLowerCase()
        if((title.includes(slower)) || (task.includes(slower)) || (Addr.includes(slower)))
        {
            wrap.style.display="block"
        }
        else{
            wrap.style.display="none"
        }
    })
})
