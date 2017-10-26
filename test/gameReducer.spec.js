import {expect} from 'chai';
import gameReducer, {getInitialState} from '../src/reducers/gameReducer';
import * as actionCreators from '../src/actions';

describe('gameReducer', () => {
    describe('default behaviour', () => {
      it('returns the passed previous state if an unrecognised action is passed', () => {
        const prevState = getInitialState();
        const action = {type: 'whatever'};
        const newState = gameReducer(prevState, action);
        expect(newState).to.equal(prevState);
      });
      it('uses the initial state if no previous state is passed', () => {
        const action = {type: 'whatever'};
        const newState = gameReducer(undefined, action);
        expect(newState).to.eql(getInitialState());
      });
    });
});