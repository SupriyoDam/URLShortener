document.querySelectorAll('.copy-btn').forEach(button => { // selects all element with class='copy-btn'
  button.addEventListener('click', () => { //on those element, it adds a click event listener
    const urlToCopy = 'http://localhost:3000/'+button.getAttribute('data-url') //fetched the value to copy using attribute
    navigator.clipboard.writeText(urlToCopy) // copied value to clipboard
    .then(()=>{
      alert('URL copied to clipboard: '+ urlToCopy) //shows success message
    })
    .catch(error => {
      console.error('Failed to copy the url') //logs error message
    })
  })
})