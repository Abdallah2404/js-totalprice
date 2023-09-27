var product = document.querySelectorAll(".div1  h2")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var price = document.querySelector("#total price")
var totalprice = 0

product.forEach(function(item){
    item.onclick = function(){
      div.innerHTML += item.textContent + "/"
      totalprice += +(item.getAttribute("price"))
      if(div.innerHTML !=""){
        btn.style.display = "block"
      }
    }
})

btn.onclick = function(){
  document.getElementById("total price").style.display = "block"
    document.getElementById("total price").innerHTML =  totalprice + "$"
}