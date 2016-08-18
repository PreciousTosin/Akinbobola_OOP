
var NotesApplication = require('../NoteApplication.js')
var expect = require('chai').expect
var note = new NotesApplication("John");

describe("The functionality of the get function", function(){
	
	it("It should accept only strings", function(){
		//var note = new NotesApplication("John");
		expect(note.create("I am good!")).to.be.a("String");
	})
});
