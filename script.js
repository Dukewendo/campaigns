let url = "https://run.mocky.io/v3/dfe80d90-c9d6-4add-bd64-a1fbaa1b5f73";

let newReq = new Request(url);

fetch(newReq)
  .then((response) => response.json())
  .then((data) => {
   console.log(data);
  });

  /*
   var campaign1 = document.getElementById("campaigns");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =
        "Name: " +
        data[i].name +
        " " +
        "Offer begins:" +
        data[i].starts_at +
        " " +
        "Offer ends:" +
        data[i].ends_at;

      campaign1.appendChild(div);
      console.log("test");
    }
    */
