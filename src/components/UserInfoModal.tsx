import UserForm from './form/UserForm';
import { userFormFields } from './form/utils/userFormFields';

const UserInfoModal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Información del Artista</h3>
        <div className="modal-action">
          <UserForm fields={userFormFields} />
        </div>
      </div>
    </dialog>
  );
};

export default UserInfoModal;
