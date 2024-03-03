

  // Creating a XML http request
  const req = new XMLHttpRequest();

  // Get the data from the restcountries API
  req.open("GET", "https://restcountries.com/v3.1/all");

  // Sending the request to the server
  req.send();
  
  // what to do when the request is completed successfully
  req.onload = function () {
    const obj = (JSON.parse(this.response));

    for (let i = 0; i < obj.length; i++) {
        console.log(obj[i].flags.png);
    }
  }


  