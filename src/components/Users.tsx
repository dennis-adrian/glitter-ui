import { useEffect, useState } from 'react';
import { User } from '../types/userTypes';
import { get } from '../api/helpers';
import Table from './shared/Table';
import { formatSocialMediaProfile } from './utils/formatters';
import { statusTranslator } from './utils/statusTranslator';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const users = await get('users');
      if (users?.length) {
        setUsers(users);
      }
    };

    fetchAllUsers();
  }, []);
  return (
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
          <tr key={user.id}>
            <td>{i + 1}</td>
            <td>
              {user.firstName} {user.lastName}
            </td>
            <td>{user.displayName}</td>
            <td className="capitalize">{statusTranslator(user.status)}</td>
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
            <td>Actions</td>
          </tr>
        ))}
    </Table>
  );
};

export default Users;
