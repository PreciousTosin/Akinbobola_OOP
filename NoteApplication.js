/*creates a new class called NotesApplication
 * it accepts a parameter "author" which is stored in the instance variable
 * add an instance variable(this.author)
 * add an instance property(this.noteArray*/
var NotesApplication = function(author){
	this.author = author;
	this.noteArray = [];


 	/* The purpose of the code below is to increment a counter 
 				variable each time the create function is called for an 
 				instance of the class.
 	 * a variable "count" is created 
 	 * a self invoking function is added to the variable
 	 * the inner function increases the counter variable anytime 
 	 			the function is called*/
 	var count = (function () {
	    		var counter = 0;
	    		return function () {return counter += 1;};
				})();

	/*this creates the create function that takes in new notes 
	as parameters to add content to the array
	 * it returns a value for the count variable each time it 
	 *  is called*/
	NotesApplication.prototype.create = function(note_content){
			this.noteArray.push(note_content);
			console.log('You created a new note');
			//return this.noteArray;
			//console.log(counter);
			return count();
		
 	};

/*creates a function that list it contents, 
 *loops through the "noteArray"
 *display the results in a particular format*/
	NotesApplication.prototype.listNotes = function(){
		var result;
		result = [];
		for(i = 0; i < this.noteArray.length; i++ ){
			result.push(this.noteArray[i]);//creates a new array
			console.log("NoteID: "+ i);
			console.log(this.noteArray[i]);
			console.log("By Author" + " " + this.author);
			console.log("");		
		}
		return result;
	};

	/*creating a function that takes index as a parameter, 
	*loops through the noteArray, 
	*for each index, it checks if the index is valid, if it is, 
		it continues, if not, it returns an error string and exits the function
	*it checks if the note at that index matches the note 
		whose index was supplied as a paarameter, 
	* returns the content of the note as a string
	*/
	NotesApplication.prototype.get = function (note_id){
		var result;
		for(var i = 0; i < this.noteArray.length; i++){
			if(note_id < 0 || note_id > this.noteArray.length){
				console.log("Invalid index");
				return;
			}
			if(this.noteArray[i] === this.noteArray[note_id]){
				result = this.noteArray[note_id];
			}
		}
		return result;
	};

	/*creating a method that accepts a search string as a parameter
	* loops through the array
	* at each index, using the "match" string property,
		it checks whether such string exists within the note at that index, 
	* if yes, displays the notes that have the search string in a specified format
	* if no, displays and error string if the note is not found*/
	NotesApplication.prototype.search = function(search_text) {
		var result;
		for(var i = 0; i < this.noteArray.length; i++ ){		
			if(this.noteArray[i].match(search_text)){
				result = this.noteArray[i];
				console.log("Showing results for search " + search_text);
				console.log("Note_id: " + i);
				console.log(this.noteArray[i]);
				console.log("By Author:" + this.author);
				console.log("");
			}else{
				var error = ("could not find search_text in Note Id");
				console.log("");
			}
		}
		if(result === ""){
			console.log(error);
		}
		return result;
	};
	
	/*The delete function accepts an index as a parameter,
	* loops through the "noteArray"
	* at each index, 
	* it checks if the index exists, if no, it exits the function
	* if no, it checks whether the note at that index matches the
		the note of the index supplied
	* if yes, it deletes the note at the index note_id 
	of the notes list.*/
	NotesApplication.prototype.delete = function(note_id) {
		var result;
		for(var i = 0; i < this.noteArray.length; i++ ){
			if(note_id < 0 || note_id > this.noteArray.length){
				console.log("Invalid index");
				return;
			}
			if(this.noteArray[i] === this.noteArray[note_id]){ 
				result = this.noteArray;
				this.noteArray.splice(note_id, 1);
				console.log(this.noteArray);
			}
		}
		return result;
	};
	
	/*The edit function accepts an index and new note as parameters,
	 * checks if the index is less than zero or greater than the maximum
	 	index in the array,
	 * if yes, it retuns an error string
	 * if no, it replaces the old note with the new one
	 * replaces the content in the 
	note at note_id with new_content.*/
	NotesApplication.prototype.edit = function(note_id, new_content){
		var result;
		if(note_id < 0 || note_id > this.noteArray.length){
			console.log("Invalid index");
			return;
		}else{
				this.noteArray[note_id] = new_content;
				result = this.noteArray;
				//console.log(this.noteArray);
		}
		return result;
	};
};

module.exports = NotesApplication;