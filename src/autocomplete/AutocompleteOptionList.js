import React from 'react';
import PropTypes from 'prop-types';
import AutocompleteOption from "./AutocompleteOption";

const AutocompleteOptionList = ({ activeOption, filteredOptions, onOptionClick }) => {

    let options;
    if (!filteredOptions.length) {
        options = (<li>No Results</li>);
    }
    else {
        options = filteredOptions.map((optionName, index) => (
            <AutocompleteOption
                key={"option-" + optionName}
                isActive={index === activeOption}
                optionName={optionName}
                onClick={onOptionClick}/>
        ));
    }

    return (
        <ul className="options">{options}</ul>
    );
};

AutocompleteOptionList.propTypes = {
    activeOption: PropTypes.number.isRequired,
    filteredOptions: PropTypes.array.isRequired,
    onOptionClick: PropTypes.func.isRequired,
};

export default AutocompleteOptionList;