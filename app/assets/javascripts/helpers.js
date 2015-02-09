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