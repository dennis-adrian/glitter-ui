import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo_with_background.png';
import SignInButton from '../components/authentication/SignInButton';
import SignUpButton from '../components/authentication/SignUpButton';
import ErrorAlert from '../components/shared/ErrorAlert';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import Modal from '../components/shared/Modal';
import UserForm from '../components/form/UserForm';
import { userFormFields } from '../components/form/utils/userFormFields';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const { isLoggedIn, id, accessToken } = useSelector(
    (state: RootState) => state.currentUser,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user_profile');
    }

    if (accessToken && !id) {
      setShowModal(true);
    }
  }, [isLoggedIn, id, accessToken, navigate]);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="avatar">
            <div className="w-36 rounded-full m-8">
              <img src={logo} alt="glitter logo" />
            </div>
          </div>
          <div>
            <SignUpButton onError={setErrorMessage} onLoading={setIsLoading} />
            <SignInButton onError={setErrorMessage} onLoading={setIsLoading} />
          </div>
          <ErrorAlert
            message={errorMessage}
            onTimeUp={() => setErrorMessage('')}
          />
          <Modal
            show={showModal}
            title="Información del Artista"
            onClose={() => setShowModal(false)}
          >
            <UserForm fields={userFormFields} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default LoginPage;
