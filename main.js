document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
   
      if(event.target.classList.contains('dropdown-toggle') ){
        event.target.classList.toggle('toggle-change');
      }
      else if(event.target.parentElement.classList.contains('dropdown-toggle')){
        event.target.parentElement.classList.toggle('toggle-change');
      }
    })
  });
  var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  var texts = [  { heading: 'Welcome to My Website', 
  paragraph: 'Missing Angel is a community-driven website dedicated to helping families find their missing loved ones. Our mission is to bring awareness to the issue of missing children and ultimately help reunite missing children with their families. Join us in this important cause and make a difference today.' }, 
   { heading: 'Childrens safety is everyone s responsibility', paragraph:'' }, 
   
   { heading: 'He who is not kind to children, and does not acknowledge the rights of the elderly, is not one of us.', paragraph: '' }];

  
  var index = 0;
  var interval = setInterval(function() {
    index = (index + 1) % images.length;
    document.getElementById('coverbg').style.backgroundImage = 'url(' + images[index] + ')';
    document.getElementById('my-heading').innerHTML = texts[index].heading;
    document.getElementById('my-paragraph').innerHTML = texts[index].paragraph;
  }, 6000); // Change every 4 seconds
 