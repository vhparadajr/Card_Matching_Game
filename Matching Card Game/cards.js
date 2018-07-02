//click on card
//add selected
//if two cards have selected - see if they are a match
//if they are a match add match class and remove select, so you can keep selecting

var tempArray = ['red','skyBlue','limegreen','darkorange', 'yellow','darkmagenta','limegreen','indigo','turquoise', 'plum', 'pink', 'red','skyBlue', 'plum', 'pink', 'yellow', 'darkorange','darkmagenta','indigo','turquoise']


Array.prototype.shuffle = function() {
    var input = tempArray;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return console.log(tempArray)
}
tempArray.shuffle();

var cards = document.getElementsByClassName("card");

for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener("click",function(){
      cards[i].classList.add(tempArray[i]);
  });
}

const game = {
  checkIfMatch: function(){
    if( $('.selected').eq(0).attr('class') ==  $('.selected').eq(1).attr('class') ){
      $('.selected').addClass('matched').removeClass('selected')
    }else{
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if( $('.card').length == $('.matched').length ){
      alert('GAME OVER')
    }
  }
}
$('.card').on('click', function(){
  $(this).toggleClass('selected')
  if($('.selected').length == 2){
    game.checkIfMatch()
  }
  game.checkEnd()
});
