

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

        console.log(obj[i].name.common); // to print country's common name
        console.log(obj[i].region); // to print country's region
        console.log(obj[i].subregion); // to print country's sub-region
        console.log(obj[i].name.common , "-" , obj[i].population); // to print country's population




    }
  }


  