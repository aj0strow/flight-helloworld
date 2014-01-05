define(
  [ 'components/flight/lib/component' ],

  function(component) {
    return component(helloworld);
    
    function helloworld() {
      this.defaultAttrs({
        message: 'Hello World!'
      });
      
      this.render = function(ev, data) {        
        this.$node.html(this.attr.message);
      };
      
      this.after('initialize', function() {
        this.on(document, 'render', this.render);
      });
    }
  }
);