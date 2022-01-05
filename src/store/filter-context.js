import React from 'react'

const filterContext = React.createContext({
    gender: "",
    status: "",
    species: "",
    clearFilter: () => {}
});

export default filterContext;
