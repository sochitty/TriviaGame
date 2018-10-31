$(document).ready(function(){
  
    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click' , '.option', trivia.guessChecker);
    
  }) //doc ready end

  var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : '',
    // questions options and answers data
    questions: {
      q1: 'What is the real name of the DJ known as Skrillex?',
      q2: 'What is the real name of the DJ known as Snails?',
      q3: 'Where is EDC located on the west coast every year?',
      q4: 'What company runs the EDC festivals?',
      q5: "Who was announced as the Top DJ of 2018?",
      q6: 'What festival is held during New Years Eve in Dallas, TX',
      q7: "Who did Justin Bieber collaborate with on the 2015 hit Where Are U Now?"
    },
    options: {
      q1: ['Scott Moore', 'Sonny Moore', 'Sal Moore', 'Sam Moore'],
      q2: ['Frédérik Durand', 'Frédérik Dangle', 'Frédérik Delish', 'Frédérik Durin'],
      q3: ['LA', 'Las Vegas', 'Portland', 'San Diego'],
      q4: ['Disco Donnie', 'Dirty Dan', 'Insomniac', 'Dusk Til Dawn'],
      q5: ['Illenium','Don Diablo','Skrillex','Martin Garrix'],
      q6: ['Hard','Lights All Night','Nocturnal','EDC'],
      q7: ['Jack U', 'Cazzette', 'Diplo','DJ Snake']
    },
    answers: {
      q1: 'Sonny Moore',
      q2: 'Frédérik Durand',
      q3: 'Las Vegas',
      q4: 'Insomniac',
      q5: 'Martin Garrix',
      q6: 'Lights All Night',
      q7: 'Jack U'
    },
    
  
  }