
var NotesApplication = require('../NoteApplication.js')
var expect = require('chai').expect
var note = new NotesApplication("John");

describe("The functionality of the create function", function(){

	it("It should return an array", function() {
		var noteformat = note.create("James is a guy","Matt is a guy")
		expect(noteformat.length).to.be.above(0);
	})
});

describe("The functionality of the get function", function(){	

	it("It should return a string", function(){
		note.noteArray = ["John", "James", "Jude"];
		var noteitem;
		expect(noteitem = note.get(1)).to.equal("James");
	})
});


describe("The functionality of the listNotes function", function(){
	
	it("It should return an array", function(){
		note.noteArray = ["John","James","Jude"];
		var noteitem = note.listNotes();
		expect(noteitem).to.eql(note.noteArray);
	})
});

describe("The functionality of the search function", function(){
	
	it("It should return a string matching search text", function(){
		note.noteArray = ["John","James","Jude"];
		expect(note.search("am")).to.equal("James");
	})
});

describe("The functionality of the edit function", function(){
	
	it("It should verify an array item has been replaced by another", function(){
		note.noteArray = ["John","James","Jude"];
		var noteitem = note.edit(1, "Tosin");
		expect(noteitem).to.eql(["John","Tosin","Jude"]);
	})
});

describe("The functionality of the delete function", function(){
	
	it("It should verify whether an array item has been deleted", function(){
		note.noteArray = ["John","James","Jude"];
		var noteitem = note.delete(1);
		expect(noteitem).to.eql(["John", "Jude"]);
	})
});