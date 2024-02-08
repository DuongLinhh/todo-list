import React from 'react'

const CountItem = ({todoList}) => {
    let countList = todoList.length;
  return (
    <div className='count'>
        <p className='notify'>
            {countList === 0 ? 'You got everything! Ready to go' : `You have ${countList} items on your list`}
        </p>
    </div>
  )
}

export default CountItem