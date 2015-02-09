loadScript('https://dc-widget-app.herokuapp.com/assets/widget.js', function() {
  $(document).ready(function() {
    
    $('.daves-widget-form').on("submit", function(e) {
      e.preventDefault();
      addMessage(e);
    });

    var addMessage = function(e) {
      $.ajax({
        url: 'https://dc-widget-app.herokuapp.com/api/posts',
        type: 'post',
        dataType: 'json',
        data: $(e.target).serialize()
      }).success(function(serverData) {
        console.log('Success');
        console.log(serverData);
      }).fail(function(error) {
        console.log('Fail');  
        console.log(error);
      });
    }
  });
});