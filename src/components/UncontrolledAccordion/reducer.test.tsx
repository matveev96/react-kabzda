import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    //Data
    const state: StateType = {collapsed: false}
    //Action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //Expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //Data
    const state: StateType = {collapsed: true}
    //Action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //Expectation
    expect(newState.collapsed).toBe(false)
})

test('error check', () => {
    //Data
    const state: StateType = {collapsed: true}
    //Expectation
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrow()
})