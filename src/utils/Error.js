import React from 'react'
import {useRouteError} from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! an Error Occured</h1>
      <div>
       {error.status}:{error.message}
      </div>
    </div>
  )
}

export default Error