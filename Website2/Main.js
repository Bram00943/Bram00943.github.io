// $(selector).action
$(document).ready(function ()
{   
    console.log('Document ready');


    // Check data to be loaded.
    var todo_data = window.localStorage.getItem('todos');
    if(todo_data != null)
    {
            $('.todos').html(todo_data);
    }
    // if botton click
    $('.new-todo button').click(function ()
    {
        console.log('click button');
        //Get conten input field

        var title = $('.new-todo input').val();
            console.log(title);


        //Create Todo template
        var template =
                        '<div class="todo">' +
                            '<label><input type="checkbox" name="todo">'  + title + '</label>' +
                            '<svg class="Trash-Icon pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>' +
                        '</div>';
        // Add todo by template
        $('.todos').append(template);


        //Save the whole todos' div to local storage.
        var all_todos = $('.todos').html();
        window.localStorage.setItem('todos', all_todos);
    });
    
    //click on delete button
    $('.Trash-Icon').click(function()
    {
        // select parent - delete parent
        $(this).parent().remove();

        // delete it from local storage.
        var all_todos = $('.todos').html();
        window.localStorage.setItem('todos', all_todos);
    });

    //when todo is checked
    $(".todo input[type='checkbox']").change(function() {
        if(this.checked) {
            console.log('checked');
            $(this).attr('checked', 'checked');

        } else{
            console.log('unchecked');
            $(this).removeAttr('checked');
        }
        var all_todos = $('.todos').html();
        window.localStorage.setItem('todos', all_todos);
    });
    //
    


   













    //Clock
    function showTime(){
        var date = new Date();
        var h = date.getHours(); 
        var m = date.getMinutes(); 
        var s = date.getSeconds(); 
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("DigitalCLOCK").innerText = time;
        document.getElementById("DigitalCLOCK").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();
});



