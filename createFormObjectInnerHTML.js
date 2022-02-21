// This will be an object that creates a form using innerHTML, possibly used in server side to build a form using
// js and an array of objects that defines the form elements.

let createFormHTML = {
    credits: {
        initial: { name: 'Shawn Sampson', contribution: 'initial creation', },
    },
    utilityValidator:function (item, validateList){

        let pass = true;
        if (Array.isArray(validateList)) {
            for (let validItem of validateList) {

                if (pass) {  // if one item does not pass skip running the switch check on the rest
                    switch (validItem) {
                        case 'emptyString': {
                            if (item === '') {
                                pass = false;
                            }
                            break;
                        }
                        case 'isString': {
                            if (typeof item !== 'string') {
                                pass = false;
                            }
                            break;
                        }
                        case 'isObject': {
                            pass = typeof item == 'object' && item instanceof Object && !(item instanceof Array);
                            break;
                        }
                        case 'isArray': {
                            pass = !!Array.isArray(item);
                            break;
                        }

                    }
                }
            }
        }else{ console.log('Error, validate list is not an array'); }

        return pass;  // return true or false if all criteria are met or one is failed
    },
    readme: 'Readme file on how to utilize the form creator', // will add at end so readme is available in object
    completeForm: '', // variable to hold form as it is built, starts as an empty string
    createDiv: function (thisObject) {

        //console.log('switch ran createDiv function');  // test switch function

        if ( thisObject.closeElement === true ){
            this.completeForm += '</div>';
        }else{

            let divElement = '<div ';  // start creating the div element markup
            // check that attribute data is presented in proper format and not empty
            if ( this.utilityValidator(thisObject.elementId, ['isString', 'emptyString'])){ divElement += 'id="'+thisObject.elementId+'" '; }
            if ( thisObject.elementClass !== '' && typeof thisObject.elementClass === 'string' ){ divElement += 'class="'+thisObject.elementClass+'" '; }
            if ( thisObject.elementStyles !== '' && typeof thisObject.elementStyles === 'string' ){ divElement += 'style="'+thisObject.elementStyles+'" '; }
            if ( thisObject.elementAttributes !== undefined ){  // prevent undefined error
                let attributesList = Object.entries(thisObject.elementAttributes); // create array of arrays to put unique attributes.
                for (const attribute of attributesList){ // for loop through array to add unique attributes
                    divElement += attribute[0]+'="';
                    divElement += attribute[1]+'" ';
            }}
            divElement += '>';
            if ( thisObject.elementComment !== '' && typeof thisObject.elementComment === 'string' ){ divElement += '<!-- '+thisObject.elementComment+' -->'; }
            // add inner html in string format or text inside element.  may need to make sure it is a string
            if ( thisObject.elementInnerHTML !== '' && typeof thisObject.elementInnerHTML === 'string' ){ divElement += thisObject.elementInnerHTML; }

            this.completeForm += divElement;
        }


    },
    labelMaker: 'function to create form labels for each input.',
    inputMaker: 'to be a function on creating form inputs that can be created this way',
    create: function (formArray){
        // The function inside the createForm object that runs through the array of objects.
        // first iterate over each item in the array using a foreach loop.
        // It runs each function based on the object type using the js switch method.

        if (this.utilityValidator(formArray,['isArray'])){  // make sure an array is passed to this function
            let arrayIndex = 0;  // set an index for the array
            for (let thisObject of formArray) {

                // check to see if the array item is an object
                if(this.utilityValidator(thisObject, ['isObject'])) {

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
                        default: {
                            console.log('Error: html element '+thisObject.elementType+' not supported array index ['+arrayIndex+']');
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


        console.log('This is the end of the create function.');
        console.log(this.completeForm);
    }

}




// createForm test array

let testArray = [{
    elementType: 'div',
    elementInputType: '',
    elementId: 'the-id',
    elementClass: 'the-class',
    elementAction: '',
    elementMethod: '',
    elementEnctype: '',
    elementName: '',
    elementFor: '',
    elementStyles: 'color:blue;',
    elementAttributes: {attr: 'an attribute'},
    closeElement: false,
    elementComment:'This is a comment after the div opening tag', // if there should be a comment at the end of the element, typically add with closeDiv=true
    elementInnerHTML: '',
},{
    elementType: 'div',
    elementComment:'This is a comment after the div closing tag',
    closeElement: true,
},];

createFormHTML.create(testArray);

//typeof thisObject == 'object' && thisObject instanceof Object && !(thisObject instanceof Array)