The createFormObject is a js object that can be inserted into code for the purpose of creating forms.

The following is the order and format for utilizing the createFormObject

Add the form elements in an array of objects

let form = [
    {
      elementType: 'div, input, submit, etc',
      inputType: 'type of input, text, email etc', // if the element type is input, what type of input
      id: 'id-of-element',
      class: 'classes to be added to element'
      action: '', // action if element is a form element
      method: 'post' // if is form element then add the method
      enctype: 'multipart/form-data',  // the enctype if the element is a form element
      name: 'name of element',     // this is if the element is an input element
      for: 'name of element it is for',  // if this is a label
      styles: 'inline styles for element',  // this is useful for a display none style on elements
      closeDiv: true/false,  // closes an open div, allows elements to be placed inside divs only used when an open div needs closed
      closeForm: true/false, // closes the form
     },
];

default object to copy and fill out.
{
  elementType: '',
  inputType: '',
  id: '',
  class: '',
  action: '',
  method: '',
  enctype: '',
  name: '',
  for: '',
  styles: '',
  closeDiv: false,
  closeForm: false
},


createDiv: