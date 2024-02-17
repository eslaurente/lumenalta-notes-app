import React, {useEffect, useState} from 'react'

import { NotesList } from './NotesList'
import { NoteForm } from './NoteForm'

export const App = (props) => {
    const { service } = props

    const [notes, setNotes] = useState([]);
    const [selected, setSelected] = useState(null);

    // (!) Get notes from service
    useEffect(() => {
        (async () => {
            setNotes(await service.getNotes());
        })();
    }, []);

    // Select new empty note
    const newNote = async () => {
        await service.saveNote(selected);
        setNotes(await service.getNotes());
    };

    // Set note as selected
    const onSelect = (note) => {
        setSelected(note);
    };

    // Save note to service
    const onSubmit = (note) => {
        service.saveNote(note);
    };

    // Unselect note
    const onCancel = () => {
        setSelected(null);
    };

    const onNoteFormUpdate = (note) => {
        if (note == null) {
            setSelected(null);
            return;
        }
        setSelected({...selected, ...note});
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>React notes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <NotesList notes={notes} selected={selected} onSelect={onSelect} />
                </div>
                <div className="col-md-8">
                    <NoteForm
                        note={selected}
                        onChange={onNoteFormUpdate}
                        onSubmit={onSubmit}
                    />
                    {(!selected || !selected?.id )&& (
                        <div>
                            <button id="new-note" onClick={newNote}>New Note</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
