(function() {
    var loadScript = function(url, callback) {
      var script = document.createElement('script');
      script.async = true;script.src = url;

      var entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);

      script.onload = script.onreadystatechange = function() {
        var rdyState = script.readyState;

        if (!rdyState || /complete|loaded/.test(script.readyState)) {
          callback();
          script.onload = null;
          script.onreadystatechange = null;
        }
      };
    }

    loadScript('https://dc-widget-app.herokuapp.com/jquery.js', function() {
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
    
    var html = '<form method="post" class="daves-widget-form"><div class="daves-widget-form-content"><p class="daves-widget-form-title" > App Form </p><input class="daves-widget-form-message" name="post[name]" type="text" placeholder="your name"><input class="daves-widget-form-message" name="post[content]" type="text" placeholder="your post"><button class="daves-widget-form-submit">Submit</button></div></form>';
    var css = 'body{font-family:Helvetica,Arial}.daves-widget-form{width:300px;background-color:#fff;border-radius:5px;padding:10px}.daves-widget-form input{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.daves-widget-form input:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.daves-widget-form .daves-widget-form-content{width:250px;margin:0 auto}.daves-widget-form .daves-widget-form-title{color:#181818;size:35px}.daves-widget-form .daves-widget-form-message{display:block;width:100%;border-radius:2px;box-sizing:border-box;margin:0 0 10px;padding:5px}.daves-widget-form .daves-widget-form-submit{display:inline-block;width:100%;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px;color:#333;background-color:#fff;border-color:#ccc}';

    var createFormTag = function() {
      var placeholder = document.getElementById('post-message');
      placeholder.innerHTML = html;
    }

    var createStyleTag = function() {
      // Create Style Element
      var style = document.createElement('style');
      style.type = 'text/css';
      // Set CSS string as the Style Element's text    
      style.appendChild(document.createTextNode(css));
      // get widget.js script element
      var entry = document.getElementsByTagName('script')[0];
      // insert style tag before the widget.js script element
      entry.parentNode.insertBefore(style, entry);
    }

    var setCustomStyle = function() {
      if (typeof dcWidget_formBackgroundColor !== 'undefined' ) {
        css = css + '.daves-widget-form{background-color:' + dcWidget_formBackgroundColor + ';}'
      }
      if (typeof dcWidget_formSubmitBtnColor !== 'undefined' ) {
        css = css + '.daves-widget-form .daves-widget-form-submit{background-color:' + dcWidget_formSubmitBtnColor + ';}'
      }
      if (typeof dcWidget_formTitleColor !== 'undefined' ) {
        css = css + '.daves-widget-form .daves-widget-form-title {color:' + dcWidget_formTitleColor + ';}'
      }
    }

    createFormTag();
    setCustomStyle();
    createStyleTag();
})();
