window.addEventListener("DOMContentLoaded", function(){


  var form = document.getElementById("my-form");
  var status = document.getElementById("status")


  function succes(){
    form.reset();
    status.classList.add('succes')
    status.innerHTML = "Thanks!";
  }
  function error(){
    status.classList.add('error')
    status.innerHTML = "Oops! There was an problem.";
  }

  form.addEventListener("submit", function (ev){
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, succes, error)
  });
});

function ajax(method, url, data, succes, error){
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function(){
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    if(xhr.status === 200){
      succes(xhr.response, xhr.responseType);
    }else{
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



