import React from 'react';
import Constitution from "./Constitution";

const Constitutions = (props) => {
    return(
        <div>
            {props.List.map((constitution) => (
                <Constitution
                    key={constitution.chord}
                    chord={constitution.chord}
                    lyric={constitution.lyric}
                    handleDeleteConstitution={props.handleDeleteConstitution}
                />
            ))}
            {
                props.List.length >= 2 && 
               <button onClick={props.handleDeleteConstitutions}
                className="delete__constitutions">
                    all delete
                </button>
            }
        </div>
    )
};

export default Constitutions;