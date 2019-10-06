import React, {useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH
} from '../types'

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        guests: [
            {
                id: 1,
                name: "Jake Smith",
                phone: "090 89923902",
                email: "jakesmith@gmail.com",
                chow: 'Small-Chops',
                drink: 'Non Acoholic',
                isConfirmed: false
            },
            {
                id: 2,
                name: "Adeleke Ramon",
                phone: "090 8983 3439",
                email: "delekeramon@gmail.com",
                chow: 'Continental',
                drink: 'Spirit',
                isConfirmed: true
            },
            {
                id: 1,
                name: "Njideka Okwechi",
                phone: "080 463 368832",
                email: "njidekaok@gmail.com",
                chow: 'African',
                drink: 'Wine',
                isConfirmed: true
            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState)

    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER
        })
    }

    const searchGuest = (guest) => {
        dispatch({
            type: SEARCH_GUEST,
            payload: guest
        })
    }

    const clearSearch = () => {
        dispatch({
            type: CLEAR_SEARCH
        })
    }

    return (
        <GuestContext.Provider
            value={{
                guests: state.guests,
                filterGuest: state.filterGuest,
                search: state.search,
                toggleFilter,
                searchGuest,
                clearSearch
            }}
        >{props.children}</GuestContext.Provider>
    )
}

export default GuestState