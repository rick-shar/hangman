import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { step } from '../actions';
import Man from '../components/Man';

const GameContainer = ({ stepNumber, onNext }) => {
    return (
        <div>
            <p> hey </p>
            <div>
                <Man stepNumber={stepNumber} onNext={onNext}/>
            </div>
        </div>
    );
};

GameContainer.propTypes = {
    stepNumber: PropTypes.number,
    onNext: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        stepNumber: state.manReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNext: () => dispatch(step())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
