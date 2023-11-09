import { ErrorResponse, useRouteError } from 'react-router-dom'
import './Error.scss'

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}
