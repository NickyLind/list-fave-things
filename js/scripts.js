$(document).ready(function()  {
  $("#things").submit(function(event)  { //makes a submit function in the #things form
    event.preventDefault();
  
    let favething1 = $("#thing1").val(); //Takes the values of form inputs and puts them into variables
    let favething2 = $("#thing2").val();
    let favething3 = $("#thing3").val();
    let favething4 = $("#thing4").val();
    let favething5 = $("#thing5").val();

    //makes an array called 'array' that plugs in the above variables
    let array = [favething1, favething2, favething3, favething4, favething5] 
    let newArray = []; //makes a new empty array called newArray
    newArray.push(array[1])
    newArray.push(array[0])
    newArray.push(array[3])
  //uses push to push elements from the 'array' variable at the indexes [1],[0],[2] into the new empty array
    

    //$("#output").text(array);
    //$("#output").text(newArray); //outputs the text values of the array 'newArray' into the html
    $(".second").text(newArray[0]);
    $(".first").text(newArray[1]);
    $(".third").text(newArray[2]); 
  });
});

// Build a page with a form containing input fields where users may enter several of their favorite things.
// Then, write code that gathers each of these form input values and places them into one array.
// After this is done, use your site to practice targeting and moving elements between arrays:
// Use square bracket notation to access the second, first, and third elements of the original array of favorite things.
// Then, use push() to add only these elements to a brand new array.
// Finally, display this new array in your page's HTML as list items in a <ul> tag.