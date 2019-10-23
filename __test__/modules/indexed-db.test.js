import each from 'jest-each';
import { IDBSet, IDBGet, IDBDelete } from '../../src/modules/indexed-db';

describe('test indexed db action creator', () => {
    each([
        [
            'IDBSet',
            IDBSet,
            {
                type: '@@INDEX_DB/INDEXED_DB_SET',
                payload: {}
            }
        ],
        [
            'IDBGet',
            IDBGet,
            {
                type: '@@INDEX_DB/INDEXED_DB_GET',
                payload: {}
            }
        ],
        [
            'IDBDelete',
            IDBDelete,
            {
                type: '@@INDEX_DB/INDEXED_DB_DELETE',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to get data from indexed db', (name, actionCreator, expected) => {
        expect(actionCreator({})).toEqual(expected);
    });
});
