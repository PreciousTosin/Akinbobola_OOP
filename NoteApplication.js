//create a new class called NotesApplication
class NotesApplication{
	constructor(author){
	 this.author = author;
	 this.noteArray = [];
	 this.noteArray = new Author();
	 
	create(note_content){
		this.noteArray.push(note_content);
 }
	listNotes(){
		for(i = 0; i < this.noteArray; i++ ){
			return "NoteID:"+" "+ i + \n + noteArray[i] + \n + "By Author" + " " + this.author;  
		}
	}
	get(node_id){
		for(i > 0; i < noteArray.Lenght; i++){
			if(noteArray[i] === noteArray[note_id]){
				return noteArray[note_id];
			}
		}
	}
}