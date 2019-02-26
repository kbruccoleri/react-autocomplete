import React from 'react';
import PropTypes from 'prop-types';

const AutocompleteOption = ({ isActive, optionName, onClick }) => (
    <li className={isActive ? 'option-active' : ''}
        key={optionName}
        onClick={(e) => onClick(e)}>
        {optionName}
    </li>
);

AutocompleteOption.propTypes = {
    isActive: PropTypes.bool.isRequired,
    optionName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default AutocompleteOption;