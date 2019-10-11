import React from 'react';
import Header from '../Header';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Name',
            email: 'wyuya0321@gmail.com',
            feedback: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({ feedback: e.target.value })
    }
    handleSubmit = () => {
         const templateId = "template_zvNoyVmS";
         
         this.sendFeedback(templateId, {
             message_html: this.state.feedback, 
             from_name: this.state.name,
             reply_to: this.state.email
            })
    }
    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId, variables
        ).then(() => {
            alert('Email successfully sent!')
        })
        .catch(() => {
            alert('You failed.');
        })
    }
    render() {
        return (
            <div>
                <Header />
                <form>
                    <textarea className="contact__textarea"
                        id="test-mail"
                        name="text-mail"
                        onChange={this.handleChange} 
                        placeholder="ご要望、ご意見などありましたらこちらまで"
                        value={this.state.feedback}
                    />
                    <input className="contact__input"
                        type="button"
                        value="submit"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>
        )
    }
};

export default ContactPage;
