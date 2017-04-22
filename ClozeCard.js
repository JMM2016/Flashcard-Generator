module.exports = ClozeCard;

function ClozeCard (text, cloze) {
  if (this instanceof ClozeCard) {    
	// 1st check to see if cloze is in full text
	// if not, log error	
	if ( text.includes(cloze) ) {

		this.fullText = text;   
	    this.cloze = cloze;

		this.partial = text.replace(cloze," ...");
  	} else {
  		console.log("Error: " + cloze + " doesn't appear in " + text);
  	}
  } else {
    return new ClozeCard (text, cloze);
  }	
}
