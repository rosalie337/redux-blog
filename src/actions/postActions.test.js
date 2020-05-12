import { addEntry } from './postActions';

describe('add entry', () => { 
    it('it create a blog entry', () => {
        const post = addEntry('title of entry', 'body of entry');
        
        expect(post).toEqual({
            type: 'ADD_ENTRY',
            payload: {
                title: 'title of entry',
                body: 'body of entry'
            }
        })
    });
});