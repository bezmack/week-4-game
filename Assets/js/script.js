
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);

  var sappire_1= Math.floor(Math.random()*11+1)
  var emerald_2= Math.floor(Math.random()*11+1)
  var ruby_3= Math.floor(Math.random()*11+1)
  var yellow_4= Math.floor(Math.random()*11+1)

  var total= 0;
  var wins= 0;
  var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      $('#randomNumber').text(Random);
      sappire_1= Math.floor(Math.random()*11+1);
      emerald_2= Math.floor(Math.random()*11+1);
      ruby_3= Math.floor(Math.random()*11+1);
      yellow_4= Math.floor(Math.random()*11+1);
      total= 0;
      $('#totalScore').text(total);
      }

function winer(){
  wins++;
  $('#numberWins').text(wins);
  reset();
}

function loser(){
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

  $('#sappire').on ('click', function(){
    total = total + sappire_1;
    $('#totalScore').text(total);
        if (total == Random){
          winer();
        }
        else if ( total > Random){
          loser();
        }
  })
  $('#emerald').on ('click', function(){
    total = total + emerald_2;
    $('#totalScore').text(total);
        if (total == Random){
          winer();
        }
        else if ( total > Random){
          loser();
        }
  })
  $('#ruby').on ('click', function(){
    total = total + ruby_3;
    $('#totalScore').text(total);
          if (total == Random){
          winer();
        }
        else if ( total > Random){
          loser();
        }
  })
  $('#amber').on ('click', function(){
    total = total + yellow_4;
    $('#totalScore').text(total);
          if (total == Random){
          winer();
        }
        else if ( total > Random){
          loser();
        }
  });
});
