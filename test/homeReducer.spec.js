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
    describe('fetchHomeData', () => {
      it('handles FETCH_HOME_DATA_REQUEST', () => {
        const prevState = getInitialState();
        const action = actionCreators.fetchHomeDataRequest();
        console.log(action);
        const newState = homeReducer(prevState, action);
        console.log(newState);  
        expect(newState.loading).to.equal(true);
        expect(newState.data).to.eql([]);
        expect(newState.error).to.equal(null);
      });
      it('handles FETCH_HOME_DATA_SUCCESS', () => {
        const data = [1,2,3];
        const prevState = actionCreators.fetchHomeDataRequest();
        const action = actionCreators.fetchHomeDataSuccess(data);
        const newState = homeReducer(prevState, action);  
        expect(newState.loading).to.equal(false);
        expect(newState.data).to.eql(data);
        expect(newState.error).to.equal(null);
      });
      it('handles FETCH_HOME_DATA_FAILURE', () => {
        const err = 'something went wrong';
        const prevState = actionCreators.fetchHomeDataRequest();
        const action = actionCreators.fetchHomeDataFailure(err);
        const newState = homeReducer(prevState, action);  
        expect(newState.loading).to.equal(false);
        expect(newState.data).to.eql([]);
        expect(newState.error).to.equal(err);
      });
    });
  });
      