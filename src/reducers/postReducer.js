import { addEntry } from '../actions/postActions';
import reducer from './postReducer.test';

describe('entry reducer', () => {
    it('handles the ADD_ENTRY action', () => {
        const state = {
            blog: {
                title: 'body of entry'
            }
        };

        const post = addEntry('title','body of entry');
        
        const newState = reducer(state, post);

        expect(newState).toEqual({
            blog: {
                title: 'body of entry',
                title: 'body of entry'
            }
        });
     });
 });
