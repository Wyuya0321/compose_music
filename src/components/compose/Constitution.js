import React from 'react';

const Constitution = (props) => (
    <div>
        <select id="constitution" className="select__constitution">
            <option>イントロ</option>
            <option>Aメロ</option>
            <option>Bメロ</option>
            <option>サビ</option>
            <option>間奏</option>
            <option>Cメロ</option>
            <option>アウトロ</option>
        </select>
        <p className="text__chord">{props.chord}</p>
        <p className="text__lyric">{props.lyric}</p>
        <button 
            className="delete__constitution"
            onClick={(e) => {
                props.handleDeleteConstitution(props.chord, props.lyric);
            }}>delete
        </button>
    </div>
);

export default Constitution;