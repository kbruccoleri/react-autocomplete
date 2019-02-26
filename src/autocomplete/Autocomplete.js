import React from 'react';
import PropTypes from 'prop-types';
import AutocompleteOptionList from "./AutocompleteOptionList";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          activeOption: 0,
          filteredOptions: [],
          showOptions: false,
          userInput: '',
        };
    }

    onChange(e) {
        const { options } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(option =>
            option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions: filteredOptions,
            showOptions: true,
            userInput: userInput,
        })
    }

    selectOptionClick(e) {
        this.setState({
            activeOption: 0,
            filteredOption: [],
            showOptions: false,
            userInput: e.currentTarget.innerText,
        })
    }

    selectOptionEnter(e) {
        this.setState({
            activeOption: 0,
            showOptions: false,
            userInput: this.state.filteredOptions[this.state.activeOption]
        });
    }

    setActiveOptionPrev() {
        if (this.state.activeOption > 0) {
            this.setState({ activeOption: this.state.activeOption - 1});
        }
    }

    setActiveOptionNext() {
        if (this.state.activeOption - 1 !== this.state.filteredOptions.length) {
            this.setState({ activeOption: this.state.activeOption + 1});
        }
    }

    onKeyDown(e) {
        switch (e.keyCode) {
            case 13:
                this.selectOptionEnter(e);
                break;
            case 38:
                this.setActiveOptionPrev();
                break;
            case 40:
                this.setActiveOptionNext();
                break;
            default:
                break;
        }
    }

    render() {
        const optionList = this.state.showOptions && this.state.userInput ?
            <AutocompleteOptionList
                activeOption={this.state.activeOption}
                filteredOptions={this.state.filteredOptions}
                onOptionClick={this.selectOptionClick}
            /> :
            <React.Fragment/>;

        return (
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    onChange={(e) => this.onChange(e)}
                    onKeyDown={(e) => this.onKeyDown(e)}
                    value={this.state.userInput}
                />
                <input type="submit" value="" className="search-btn" />
                {optionList}
            </div>
        );
    }
}

Autocomplete.propTypes = {
  options: PropTypes.array.isRequired
};

export default Autocomplete;