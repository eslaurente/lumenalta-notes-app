import React, {useEffect, useState} from 'react'

export const NoteForm = (props) => {
    const { note, onChange, onSubmit } = props;


    const handleOnCancel = (e) => {
        e.preventDefault();
        onChange(null);
    };

    const handleTitleValueChange = (e) => {
        e.preventDefault();
        onChange({
            ...note ?? undefined,
            title: e.target.value,
        });
    };

    const handleTextValueChange = (e) => {
        e.preventDefault();
        onChange({
            ...note  ?? undefined,
            text: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit(note);
    };

    return <form>
        <div className="form-group">
            <label>Title:</label>
            <input
                className="form-control"
                data-testid="input-title"
                name="title"
                value={note?.title ?? ''}
                onChange={handleTitleValueChange}
            />
        </div>
        <div className="form-group">
            <label>Note:</label>
            <textarea
                className="form-control"
                data-testid="input-text"
                name="text"
                value={note?.text ?? ''}
                onChange={handleTextValueChange}
            />
        </div>
        <div className="form-group">
            <input
                type="button"
                data-testid="cancel-note"
                className="btn btn-default pull-right"
                value="Cancel"
                onClick={handleOnCancel}
            />
            <input
                type="submit"
                data-testid="save-note"
                className="btn btn-default pull-right"
                value="Save"
                onClick={handleOnSubmit}
            />
        </div>
    </form>
}
