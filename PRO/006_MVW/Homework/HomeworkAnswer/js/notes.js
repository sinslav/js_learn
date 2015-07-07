(function(){

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var controller = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = document.getElementById('notes');
            var newNoteForm = document.getElementById('new-note-form');
            var newNoteContent = document.getElementById('new-note-content');
            function submitFormHandler (event){
                controller.addNewNote(newNoteContent.value);
                newNoteContent.value = '';
                event.preventDefault();
            }
            newNoteForm.addEventListener('submit', submitFormHandler);
            view.render();
        },
        render: function(){
            var htmlStr = '';
            controller.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content +
                    '</li>';
            });
            this.noteList.innerHTML = htmlStr ;
        }
    };

    controller.init();
})();