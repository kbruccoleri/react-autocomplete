import React from 'react';
import PropTypes from 'prop-types';
import AutocompleteOption from "./AutocompleteOption";

const AutocompleteOptionList = ({ activeOption, filteredOptions, onOptionClick }) => {
    if (!filteredOptions.length) {
        return (
            <div className="no-options">
                <em>No Option!</em>
            </div>
        );
    }

    return (
        <ul className="options">{
            filteredOptions.map((optionName, index) => (
                <AutocompleteOption isActive={index === activeOption}
                                    optionName={optionName}
                                    onClick={onOptionClick} />
            ))
        }</ul>
    );
};

AutocompleteOptionList.propTypes = {
    activeOption: PropTypes.bool.isRequired,
    filteredOptions: PropTypes.array.isRequired,
    onOptionClick: PropTypes.func.isRequired,
};

export default AutocompleteOptionList;