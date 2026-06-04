
function addToDo(){
            let taskvalue = document.getElementById('todoinput').value;

            if(taskvalue==""){
                return;
            }
            let taskstore = document.createElement("div");
            taskstore.className = "sub";

            let tasktext = document.createElement("span");
            tasktext.innerText = taskvalue;

            let removebutton = document.createElement("button");
            removebutton.innerText = "Remove";
            removebutton.className = "removebutton"
            
            removebutton.onclick = function(){
                taskstore.remove();
            };

            taskstore.appendChild(tasktext);
            taskstore.appendChild(removebutton);

            document.getElementById('todolist').appendChild(taskstore);

            document.getElementById('todoinput').value = "";
        }