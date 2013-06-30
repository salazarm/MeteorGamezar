Meteor.autorun(function() {
  if  ( Meteor.userId() ) {
    $("#selected-character").fadeIn();
    Meteor.call('getCharacters', function(error, characters) { 
      if (error) {
        Session.set('user', null);
      } else {
        $selectCharacter = $("#select-character");
        $selectCharacter.empty();
        template = _.template($("#character-template").html());
        for(var i=0; i<characters.length; i++) {
          $selectCharacter.prepend(template(characters[i]));
        }
        $(".name").click(function(ev){
          ev.preventDefault();
          id = $(ev.target).data("character-id");
          Meteor.call('pickCharacter', { characterId: id }, Game.load);
        });
        if (characters.length == 0) {
          $selectCharacter.prepend("<h2>Hey! Welcome to our RPG Framework Demo!</h2><h4> You seem to have no characters... type in a name to create your new character!</h4>")
        } else {
          $selectCharacter.prepend("<h2>You Characters are below</h2>");
          $selectCharacter.append("<div class=\"clear\"></div><h4>Or create a new character!</h4>");
        }
        $("#chars").fadeIn(100);
      }
    });
  } else {
    $("canvas").fadeOut(100);
    $("#chars").fadeOut(100);
  }
});

Meteor.startup(function(){
  $("input").keydown(function (e) {
      if (e.keyCode == 13) {
        $target = $(e.target);
        val = $target.val();
        $target.val('');
        Meteor.call('pickCharacter', { name: val }, Game.load);
      }
  });
});



window.onbeforeunload = function() {
  if (Meteor.user()) {
    Meteor.call("logoutCharacter");
  }
};



