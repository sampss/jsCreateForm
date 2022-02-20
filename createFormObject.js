let createForm = {
    credits: {
        initial: { name: 'Shawn Sampson', contribution: 'initial creation', },
    },
    readme: 'Readme file on how to utilize the form creator',
    completeForm: 'variable to hold the form as it is built',
    createDiv: function () {
        // construct form div
        let div = document.createElement('div');
        div.id = 'form-div';
        div.classList.add('form-div');

    },
    labelMaker: 'function to create form labels for each input.',
    inputMaker: 'to be a function on creating form inputs that can be created this way',
    create: function (formArray){
        // The function inside the createForm object that runs through the array of objects.
        // first iterate over each item in the array using a foreach loop.
        // It runs each function based on the object type using the js switch method.

        if (Array.isArray(formArray)){  // make sure an array is passed to this function
            let arrayIndex = 0;  // set an index for the array
            for (let thisObject of formArray) {

                // check to see if the array item is an object
                if(typeof thisObject == 'object' && thisObject instanceof Object && !(thisObject instanceof Array)) {

                    switch (thisObject.elementType) {
                        case 'div': {
                            this.createDiv(thisObject);
                            break;
                        }
                        case 'form': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'label': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'input': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'textarea': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'select': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'file': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'button': {
                            //this.createDiv(thisObject);
                            break;
                        }
                        case 'img': {
                            //this.createDiv(thisObject);
                            break;
                        }

// list of elements that can be handled by the form creator
// div, form, input, label, file, button, img, select, span, textarea, a, fieldset,
// may need to allow li, ul, etc for lists // need to include optgroup in array object list
// optgroup, option

                    }
                }else{ console.log('Error: array index ['+arrayIndex+'] is not an object')}

                arrayIndex++;  // move up in value to output the index in case of error
            }
        } else { console.log('Error: variable is not an array.  Array of objects required. //createForm.create') }
    }

}




// createForm test array

let testArray = [{elementType: 'div',}];

createForm.create(testArray);