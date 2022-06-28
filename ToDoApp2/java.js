let count = 0;
let doneCount = 0;
function addTodo(){
        //inputValue has now stored the input from the user.
        const inputValue = document.getElementById("input").value;
        //if inputvalue = to no input, alert is given
        if(inputValue === ''){
            alert('Please write a Todo');
        }else{
            const div = document.createElement('div');
            div.className = 'row';
            div.style = "position:relative; left:25%;margin-bottom:-50px;";
            div.innerHTML = `
                <div class="w3-panel w3-card myTodoClass" id="myTodo${count}"><p>${inputValue}</p></div>
                <label id="invisLabel"> 
                <input class="checkClass" type="button" value="Done?" onclick="completedTodo(${count},${doneCount})" id="check${doneCount}" />
                </label>
                <input type="button" value="Remove Todo" onclick="removeTodo(this)" id="removeBtn" />
            `;
            //adds a node
            document.getElementById('todo').appendChild(div);
            //increments values of variables
            count++;
            doneCount++;
        }
}
function completedTodo(count,doneCount){
    //styling for mytodo id
    document.getElementById(`myTodo${count}`).style.backgroundColor = 'gray';
    document.getElementById(`myTodo${count}`).style.height = '50px';
    document.getElementById(`myTodo${count}`).style.width = '30%';
    document.getElementById(`myTodo${count}`).style.color = 'darkgray';
    document.getElementById(`myTodo${count}`).style.textDecoration = 'line-through';
    document.getElementById(`check${doneCount}`).style.backgroundColor = 'rgb(12, 104, 28)';
    document.getElementById(`check${doneCount}`).style.textDecoration = 'line-through';
}
function removeTodo(input) {
    //removes div with id todo
    document.getElementById('todo').removeChild(input.parentNode);
}