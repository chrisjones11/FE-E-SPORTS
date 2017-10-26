import {expect} from 'chai';
import homeReducer, {getInitialState} from '../src/reducers/homeReducer';
import * as actionCreators from '../src/actions';

describe.only('homeReducer', () => {
    describe('default behaviour', () => {
      it('returns the passed previous state if an unrecognised action is passed', () => {
        const prevState = getInitialState();
        const action = {type: 'whatever'};
        const newState = homeReducer(prevState, action);
        expect(newState).to.equal(prevState);
      });
      it('uses the initial state if no previous state is passed', () => {
        const action = {type: 'whatever'};
        const newState = homeReducer(undefined, action);
        expect(newState).to.eql(getInitialState());
      });
    });
    describe('getNewsStories', () => {
        it('returns an object that includes an array with the key "newsStories"', () => {
            const prevState = getInitialState();
            const action = actionCreators.getNewsStories();
            const newState = homeReducer(prevState, action);
            console.log(prevState);
            expect(newState.newsStories).to.be.an('array');

        }); 
    });
});