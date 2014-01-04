define(
  [ 'app/components/helloworld' ],
  
  function(helloworld) {
    return initialize;
    
    function initialize() {
      helloworld.attachTo('#helloworld');
      $(document).trigger('render');
    }
  }
);