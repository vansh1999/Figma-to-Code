
var ul = document.getElementById("list")
var li 

console.log(li);




var addButton = document.getElementById("add")

addButton.addEventListener("click", addItem)

var removeButton = document.getElementById("remove")

removeButton.addEventListener("click", removeItem)







function addItem() {
    
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if(item === ''){
        alert("Please enter some task!");
        return false;
    }else{

        // create li
        li = document.createElement('li')

        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        // create label
        var label = document.createElement('label');
        

        // add elements on web page

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        // placing in ul
        ul.insertBefore(li,ul.childNodes[0])

        // visual
        // li.className = 'visual'

        input.value = ''
        



    }






}



function removeItem() {
    var li = ul.children  
    
    for (let i = 0; i < li.length; i++) {
        while (li[i].children[0].checked) {
            ul.removeChild(li[i])
        }
        
        
    }
    


}