import React from 'react';

const AddConstitution = (props) => (
    <form onSubmit={props.handleSubmit}>
        <textarea id="chord" placeholder="コード" className="textarea__chord"></textarea>
        <textarea id="lyric" placeholder="歌詞" className="textarea__lyric"></textarea>
        <button type="submit" className="textarea__submit">add</button>
    </form>
);

export default AddConstitution;
