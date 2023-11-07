import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return 10', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        return expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
