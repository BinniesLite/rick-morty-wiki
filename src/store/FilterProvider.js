import React, {useReducer} from 'react'
import filterContext from './filter-context'

// 1. DEFAULE FILTER STATE
const defaultFilter = {
    gender: "",
    status: "",
    species: ""
};

// 2. A reducer to handle the logic
const filterReducer = (state, action) => {
    // If the action is for clear
    if (action.type === "CLEAR") {
        return defaultFilter;    
    }

    // GENDER REDUCE 
    if (action.type === "GENDER") {
        if (action.item === "MALE") {
            return {

                gender: "male", 
                species: state.species,
                status: state.status
            };
        }
        else if (action.item === "FEMALE") {
            return {
                gender: "female",
                
                species: state.species,
                status: state.status
            };
        }
        else if (action.item === "GENDERLESS") {
            return {
                gender: "genderless",
                
                species: state.species,
                status: state.status
            };
        }
        else {
            return {
                gender: "unknown",
                
                species: state.species,
                status: state.status
            };
        }
    }
    // STATUS REDUCE
    if (action.type === "STATUS") {
        if (action.item === "ALIVE") {
            return {
                gender: state.gender,
                status: "alive"
            };
        }
        else if (action.item === "DEAD") {
            return {
                gender: state.gender,
                status: "dead"
            };
        }
        else {
            return {
                gender: state.gender,
                status: "unknown"
            };
        }
    }

    // SPECIES REDUCE
    if (action.type === "SPECIES") {
        return {
            ...state,
            species: action.item

        }

    }
    
};

const FilterProvider = (props) => {

    // 3. Initialize the state
    const [filterState, dispatchFilterAction] = useReducer(
        filterReducer,
        defaultFilter
    )
    
    // Clear
    const clearFilterHandler = () => {
        dispatchFilterAction({type: "CLEAR"});
    }

    // Gender
    const genderFilterHandler = (item) => {
        dispatchFilterAction({type: "GENDER", item: item});
    } 

    // Status
    const statusFilterHandler = (item) => {
        dispatchFilterAction({type: "STATUS", item: item})
    }

    // Species
    const speciesFilterHandler = (item) => {
        dispatchFilterAction({type: "SPECIES", item: item})
    }

    const filterCtx = {
        gender: filterState.gender,
        status: filterState.status,
        species: filterState.species,
        clearFilter: clearFilterHandler,
        statusFilter: statusFilterHandler,
        genderFilter: genderFilterHandler,
        speciesFilter: speciesFilterHandler
    }

    return (
        <filterContext.Provider value={filterCtx}>{props.children}</filterContext.Provider>
    )
}

export default FilterProvider;
