import React from 'react'

const InputGroup = ({total, setId}) => {
    return (
    <div class="input-group mt-3 ">
              
        <select onChange={e => setId(e.target.value) } class="form-select" id="inputGroupSelect01">
            {[...Array(total).keys()].map(key => {
                return  <option value={key + 1}>Episode - {key + 1 }</option>
            })} 
        </select>
      </div>
    )
}

export default InputGroup
