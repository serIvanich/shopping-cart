import {appReducer} from './index';
import {appActions} from '../common-action/app';

let startState

beforeEach(() => {
    startState = {
        error: '',
        status: 'idle',
    }
})

test('correct error message should be set', () => {
    const endState = appReducer(startState, appActions.setAppError({error: 'some error'}))
    expect(endState.error).toBe('some error')
})

test('correct status should be set', () => {
    const endState = appReducer(startState,appActions.setAppStatus({status: 'loading'}))
    expect(endState.status).toBe('loading')
})


