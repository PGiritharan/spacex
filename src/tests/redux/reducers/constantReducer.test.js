import constantReducer from '../../../redux/reducer/constantReducer';

test('should setup default constant values',()=>{
    const state = constantReducer(undefined,{type:'@@INIT'});
    expect(state.yearRange).toBe(14)
})

test('should setup year range constant values',()=>{
    const state = constantReducer(undefined,{type:'SET_YEAR_RANGE',yearRange:10});
    expect(state.yearRange).toBe(10)
})