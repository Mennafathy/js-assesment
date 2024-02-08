// bubbling
document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked');
  });

  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked');
  });
  // capturing
  document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer div clicked (capturing)');
  }, true);
  
  document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner div clicked (capturing)');
  }, true);