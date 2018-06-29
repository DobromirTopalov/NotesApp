class Controller {
    constructor(data) {
        this.data = data;
    }

    getHomePageData() {
        return async (req, res) => {
            const greetingMsg = {
                message: 'Hello, this is a RESTful API!',
                categories: 'navigate to /categories for all the categories data',
                noteCategories: 'navigate to /notecategories to find manyToMany relationship between Note-Category',
                notes: 'navigate to /notes for all the notes data',
                noteWithId: 'navigate to /note/:noteId for note detailed data',
                createNote: 'make post request to /createNote to create a new note',
            };

            res.status(200).send({
                greetingMsg,
            });
        };
    }

    getCategories() {
        return async (req, res) => {
            const categories = await this.data.categories.getAll();

            res.status(200).send({
                categories,
            });
        };
    }

    getNoteCategories() {
        return async (req, res) => {
            const notecategories = await this.data.notecategories.getAll();

            res.status(200).send({
                notecategories,
            });
        };
    }

    getNotes() {
        return async (req, res) => {
            const notes = await this.data.notes.getAll();

            res.status(200).send({
                notes,
            });
        };
    }

    getNoteDetails() {
        return async (req, res) => {
            const note = await this.data.notes.getById(+req.params.noteId);

            res.status(200).send({
                note,
            });
        };
    }

    createNote() {
        return async (req, res) => {
            // const testObj = {
            //     content: 'This is a test Note, nothing is special about it',
            //     isSticked: true,
            //     date: '31 November 2018',
            //     UserId: 1,
            // };

            const note = await this.data.notes.findOrCreate(req.params);

            res.status(200).send({
                note,
            });
        };
    }
}

module.exports = Controller;