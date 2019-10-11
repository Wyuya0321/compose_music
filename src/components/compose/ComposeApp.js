import React from 'react';
import Constitutions from './Constitutions';
import AddConstitution from './AddConstitution';
import Header from '../Header';

class ComposeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
        }
    this.handleDeleteConstitutions = this.handleDeleteConstitutions.bind(this);
    this.handleDeleteConstitution = this.handleDeleteConstitution.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const chordElement = e.target.elements['chord']
        const lyricElement = e.target.elements['lyric']
        this.setState(
            {
                List: this.state.List.concat({
                    chord: chordElement.value,
                    lyric: lyricElement.value
            })
            }, () => {
                chordElement.value = '';
                lyricElement.value = '';
            }
        )
    };
    handleDeleteConstitutions = () => {
            this.setState(() => ({ List: [] }))
    };
    handleDeleteConstitution = (constitution) => {
        console.log('delete!');
        this.state.List.splice(constitution, 1);
        this.setState({ List: this.state.List })
    };
    componentDidMount() {
        const json = localStorage.getItem('List');
        const List = JSON.parse(json);
        this.setState(() => ({ List }));
    };
    componentDidUpdate(prevState) {
        if ( prevState.length !== this.state.List.length ) {
            const json = JSON.stringify(this.state.List);
            localStorage.setItem('List', json);
        }
    };
    render() {
        return (
            <div className="compose__app">
                <Header />
                <p className="compose__text">コードと歌詞を入れてください</p>
                <AddConstitution 
                    handleSubmit={this.handleSubmit}
                />
                <Constitutions 
                    List={this.state.List} 
                    handleDeleteConstitutions={this.handleDeleteConstitutions}
                    handleDeleteConstitution={this.handleDeleteConstitution}
                />
            </div>
        )
    }
}

export default ComposeApp;