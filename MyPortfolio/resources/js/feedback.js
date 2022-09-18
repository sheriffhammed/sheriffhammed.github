// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the Conatct Form
const fname = cleanAndCap(words.get('fname'));
const lname = cleanAndCap(words.get('lname'));
/*const fname = words.get('fname');
const lname = words.get('lname');*/


// The string containing HTML and text which will populate the story.html page
const feedback = `<p><strong>Hi </strong><span class="word" title="id: fname">${fname}</span> <span class="word" title="id: lname">${lname}</span> I will get back to you shortly.</p>`;

// Grabbing the feedback Message
const feedbackMessage = document.getElementById('feedback');
// Populating the feedback Message with the value of the feedback variable
feedbackMessage.innerHTML = feedback;


