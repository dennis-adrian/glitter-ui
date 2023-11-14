export const statusTranslator = (status: string) => {
  switch (status) {
    case 'PENDING':
      return 'pendiente';
    case 'APPROVED':
      return 'aprobado';
    case 'AVAILABLE':
      return 'disponible';
    case 'RESERVED':
      return 'reservado';
    case 'CONFIRMED':
      return 'confirmado';
    case 'REJECTED':
      return 'rechazado';
    case 'CANCELED':
      return 'cancelado';
    case 'ACTIVE':
      return 'activo';
    case 'WAITING_APPROVAL':
      return 'pendiente';
  }
}