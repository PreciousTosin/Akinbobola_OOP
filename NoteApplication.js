//create a new class called NotesApplication
class NotesApplication{
	constructor(author){
		this.author = author;
		this.noteArray = [];
	}
//create fuction to add content to the array
	create(note_content){
		this.noteArray.push(note_content);
		return 'You created a new note'
 }
//create fuction to add content to the array
	listNotes(){
		for(i = 0; i < this.noteArray; i++ ){
			console.log("NoteID: "+ i);
			console.log(this.noteArray[i]);
			console.log("By Author" + " " + this.author);
		}
	}
	/*creating a fuction that takes index, returns 
	the content of d note as a string*/
	get(note_id){
		for(var i > 0; i < this.noteArray.lenght; i++){
			if(this.noteArray[i] === this.noteArray[note_id]){
				return this.noteArray[note_id];
			}
		}
	}
	/*creating a method that accepts a search string and 
	returns the notes that have the search string*/
	search(search_text) {
		for(var i = 0; i < this.noteArray.length; i++ ){
			if(this.noteArray[i].match(search_text)){
				console.log("Showing results for search " + search_text);
				console.log("Note_id: " + i);
				console.log(this.noteArray[i]);
				console.log("By Author:" + this.author);
				console.log("")
			}
			else{
				console.log('could not find search_text in Note Id: '+ i);
				console.log("")
			}
		}
	}
	/*The deleten function deletes the note at the index note_id 
	of the notes list. Changed the name because "delete" is a reserved keyword*/
	deleten(note_id){
		for(var i = 0; i < this.noteArray.length; i++ ){
			if(this.noteArray[i] === this.noteArray[note_id]){
				this.noteArray.splice(note_id, 1);
				return console.log(this.noteArray);
			}
			else{return "Index not in Range";}
		}
	}
	
	/*This function replaces the content in the 
	note at note_id with new_content.*/
	edit(note_id, new_content){
		if(note_id < 0 || this.noteArray[note_id] > 0){
			return "Index not in Range";
			}
			else{
				this.noteArray[note_id] = new_content;
				return console.log(this.noteArray);
			}
			
	}
}