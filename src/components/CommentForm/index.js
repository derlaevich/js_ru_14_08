import React, { Component } from 'react'
import "./style.css"

class CommentForm extends Component {
    state = {
        user: '',
        text: '',
        errors: {},
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>User: </label>
                <input
                    type="text"
                    name="user"
                    value={this.state.user}
                    onChange={this.handleChange}
                    data-validation="inputValidation"
                    data-min="10"
                    data-max="20"
                    className={this.state.errors.user === "min" ? "warning" : null} />
                <br />
                <label>Text: </label>
                <textarea
                    rows="10"
                    cols="45"
                    type="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}data-validation="inputValidation"
                    data-min="30"
                    data-max="100"
                    className={this.state.errors.user === "min" ? "warning" : null} />
                <br />
                <button type="submit">Отправить</button>
            </form>
        )
    }

    handleSubmit = (e) => {
        this.setState({
            user: '',
            text: ''
        });
        e.preventDefault();
    }

    handleChange = e => {
        let validationMethodName = e.target.dataset.validation;
        let inputName = e.target.name;

        let errors = {};
        try {
            this[validationMethodName](e.target);
        } catch (err) {
            switch (err.message) {
                case 'max':
                    errors[inputName] = err.message;
                    break;
                case 'min':
                    errors[inputName] = err.message;
                    break;
            }
        }
        this.setState({ errors: errors });
        if (errors[inputName] === 'max')
            return null;

        this.setState({ [inputName]: e.target.value });
    }

    inputValidation = (target) => {
        if (target.dataset.max && target.value.length > parseInt(target.dataset.max))
            throw new Error('max');

        if (target.dataset.min && target.value.length < parseInt(target.dataset.min))
            throw new Error('min');
    }
}

export default CommentForm