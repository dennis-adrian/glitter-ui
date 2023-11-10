import UserForm from './form/UserForm';

const UserInfoModal = () => {
  const formFields = [
    { label: 'Nombre', placeholder: 'Ej. John' },
    { label: 'Apellido', placeholder: 'Ej. Smith' },
    { label: 'Nombre de artista', placeholder: 'Ej. JK Rowling', required: true },
    { label: 'Perfil de Instagram', placeholder: 'Ej. @glitter.bo', required: true },
    {
      label: 'Departamento de residencia',
      type: 'select',
      options: [
        { value: 'lp', label: 'La Paz' },
        { value: 'cb', label: 'Cochabamba' },
        { value: 'sc', label: 'Santa Cruz' },
        { value: 'or', label: 'Oruro' },
        { value: 'pt', label: 'Potosí' },
        { value: 'tj', label: 'Tarija' },
        { value: 'be', label: 'Beni' },
        { value: 'pn', label: 'Pando' },
        { value: 'ch', label: 'Chuquisaca' },
      ],
      required: true,
    },
    { label: 'Teléfono', placeholder: 'Ej. 71234567', required: true },
  ];

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Información del Artista</h3>
        <div className="modal-action">
          <UserForm fields={formFields} />
        </div>
      </div>
    </dialog>
  );
};

export default UserInfoModal;
