

const getanalysis = () => {
    let url = document.getElementById('imageurl').value;

    if(isValidURL(url))
    {
        let spinner = document.getElementById("spinner-border");
        spinner.style.visibility = 'visible'; //'hidden'
        fetch('https://computer-vision-function.azurewebsites.net/api/computervisionexample', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({        
            imageurl: url                
                })
        
        }).then(res => res.json()).then(data => {
            spinner.style.visibility = 'hidden';
            console.log(data);
            
            const ul = document.getElementById("result")        
            ul.innerHTML = "";

            data.response.forEach(element => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(element));
                ul.appendChild(li);
            });

        })
    }
    else
    {
        const ul = document.getElementById("result")        
        ul.innerHTML = "";
        
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("Please insert a valid url"));
        ul.appendChild(li);    

    }
  }

  function isValidURL(string) {
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(string))
    {
      return true;
    }
    else
    {
      return false;
    }
};
