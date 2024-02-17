import React from 'react';


export const NotesList = (props) => {
    const { notes = [], selected, onSelect } = props;
    const handleOnClick = (e, note) => {
        e.preventDefault();
        onSelect(note);
    };

    return <div className="list-group">
        {(notes || []).map((note) => (
            <div key={note.id}
                 data-testid="note-item"
                 className={`list-group-item${ selected && selected.id === note.id  ? ' active' : ''}`}
                 onClick={(e) => handleOnClick(e, note)}
            >
                {note.title}
            </div>
        ))}
    </div>
}
