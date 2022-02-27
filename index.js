

const giph = function(){
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=l5TqLc8sqRY6g1wdX4AAFPtVuDEvutUa&q=${$(this).text()}&limit=25&offset=0&rating=g&lang=en`,
    {})
    
    .then((responce) => responce.json())
    .then((result) => {        
        $(".giphs img").remove();
        
      for (let i = 0; i < 10; i++) {         
        var giphy = result.data[i].images.original.url;
        var images = result.data[i].images["480w_still"].url;
        var width = result.data[i].images["480w_still"].width;
        var height = result.data[i].images["480w_still"].height;
        var newDiv = $("<div class='divGiph'>");
        var newImg = $("<img>");
        newImg.attr("src", images);
        newImg.css({ width: width, height: height });
        newDiv.append(newImg);
        $(".giphs").append(newDiv);
        let working = true;
        
        
        newImg.on("click", function () {
            $(this).attr("src", result.data[i].images.original.url);
            if (working) {
                $(this).attr("src", result.data[i].images.original.url);
                working = false;
              } else {
                $(this).attr("src", result.data[i].images["480w_still"].url);
                working = true;
              }
        }
        );
      }
     
    });
    
};


const myInput = document.getElementById('input')
function myFunction() {
    const myInputValue = myInput.value;
    var x = document.createElement("BUTTON");
    var element = document.getElementById("div")
    element.appendChild(x).setAttribute("class", "js-go container-button");
    x.innerHTML = myInputValue;
    document.getElementById('input').value = '';

   
  }
 
  $(document).on("click", ".container button", giph);

