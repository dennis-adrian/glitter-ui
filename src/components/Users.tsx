import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSelectedUser } from '../store/features/dashboardSlice';

import { User } from '../types/userTypes';
import { get } from '../api/helpers';
import Table from './shared/Table';
import { formatSocialMediaProfile } from './utils/formatters';
import { statusTranslator } from './utils/statusTranslator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import Modal from './shared/Modal';
import ApprovalUserForm from './form/ApprovalUserForm';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const selectedUser = useSelector((state: RootState) => state.dashboard.selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await get('users');
      if (users?.length) {
        setUsers(users);
      }
    };

    fetchAllUsers();
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'badge-success';
      case 'WAITING_APPROVAL':
        return 'badge-warning';
      case 'DISABLED':
        return 'badge-warning';
    }
  };

  const handleShowModal = (user: User) => {
    setShowModal(true);
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <Table
        headers={[
          '',
          'Nombre',
          'Nombre de Artista',
          'Estado',
          'Perfil de Instagram',
          'Email',
          'Telefono',
          'Acciones',
        ]}
      >
        {users.length > 0 &&
          users.map((user, i) => (
            <>
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.displayName}</td>
                <td>
                  <div
                    className={`capitalize badge ${getStatusStyle(
                      user.status,
                    )}`}
                  >
                    {statusTranslator(user.status)}
                  </div>
                </td>
                <td className="text-indigo-500">
                  <a
                    href={formatSocialMediaProfile(user.instagramProfile)}
                    target="_blank"
                  >
                    {user.instagramProfile}
                  </a>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleShowModal(user)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            </>
          ))}
      </Table>
      {!showModal ? null : (
        <Modal
          show={showModal}
          title="Información del Usuario"
          onClose={() => setShowModal(false)}
        >
          <ApprovalUserForm
            user={selectedUser}
            onCancel={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default Users;
