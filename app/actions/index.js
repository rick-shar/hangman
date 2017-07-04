import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

// Man actions
export function step() {
    return {
        type: types.STEP
    };
}
