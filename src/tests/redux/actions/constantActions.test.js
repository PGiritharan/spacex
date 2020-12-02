import { setYearRange } from '../../../redux/actions/constantActions';

test('should be setup the year range action object',()=>{
    const action = setYearRange(12);
    expect(action.yearRange).toBe(12);
})