(function() {
    var html = '\
    <form method="post" action="http://localhost:3001/api/messages" class="daves-widget-form">\
      <div class="daves-widget-form-content">\
        <p class="daves-widget-form-title" > App Form </p>\
        <input class="daves-widget-form-message" name="message[name]" type="text" placeholder="name">\
        <input class="daves-widget-form-message" name="message[content]" type="text" placeholder="message">\
        <button class="daves-widget-form-submit">Submit</button>\
      </div>\
    </form>';

    var placeholder = document.getElementById('post-message');
    placeholder.innerHTML = html;

    var css = 'body {\
           font-family: Helvetica, Arial;\
          }\
          .daves-widget-form {\
            width: 300px;\
            background-color: #181818;\
            border-radius: 5px;\
            padding: 10px;\
          }\
          .daves-widget-form .daves-widget-form-content {\
            width: 250px;\
            margin: 0 auto;\
          }\
          .daves-widget-form .daves-widget-form-title {\
            color: #fff;\
            size: 35px;\
          }\
          .daves-widget-form .daves-widget-form-message {\
            display: block;\
            width: 100%;\
            border-radius: 2px;\
            box-sizing: border-box;\
            margin: 0 0 10px 0;\
            padding: 5px;\
          }\
          .daves-widget-form .daves-widget-form-submit {\
            display: block;\
            width: 100%;\
            margin: 0 0 10px 0;\
            padding: 5px;\
            cursor: pointer;\
          }';

    // Create Style Element
    var style = document.createElement('style');
    style.type = 'text/css';
    
    // Set CSS string as the Style Element's text    
    style.appendChild(document.createTextNode(css));

    // get widget.js script element
    var entry = document.getElementsByTagName('script')[0];

    // insert style tag before the widget.js script element
    entry.parentNode.insertBefore(style, entry);


    $(document).ready(function() {
      var addMessage = function(e) {
        $.ajax({
          url: 'http://localhost:3001/api/messages',
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
      };

      $('.daves-widget-form').on("submit", function(e) {
        e.preventDefault();
        addMessage(e);
      });
    });

})();
