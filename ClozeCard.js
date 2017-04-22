//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
//The constructor should accept two arguments: text and cloze.
//The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
//The constructed object should have a fullText property that contains only the full text.

// The constructed object should have a partial property that contains only the partial text.

//The constructor should throw or log an error when the cloze deletion does not appear in the input text.
//Use prototypes to attach these methods, wherever possible.

// ==============

module.exports = ClozeCard;

function ClozeCard (text, cloze) {
  if(this instanceof ClozeCard) {
    
	// 1st check to see if cloze is in full text
	// if not, log error
	// need function to see if input2 is in input1
	// see if a string-in1 contains another string-in2
	if ( text.includes(cloze) ) {

		this.fullText = text;   
	    this.cloze = cloze;

		// then method to remove cloze from full text	
		// attach via prototype after getting to work inside constructor
		this.partial = text.replace(cloze," ...")
  	} else {
  		console.log("Error: " + cloze + " doesn't appear in " + text);
  	}
  } else {
    return new ClozeCard(text, cloze);
  }	
}

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

console.log(firstPresidentCloze.cloze);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");


