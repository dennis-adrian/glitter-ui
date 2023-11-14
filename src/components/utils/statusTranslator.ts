export const statusTranslator = (status: string) => {
  switch (status) {
    case 'PENDING':
      return 'PENDIENTE';
    case 'APPROVED':
      return 'APROBADO';
    case 'AVAILABLE':
      return 'DISPONIBLE';
    case 'RESERVED':
      return 'RESERVADO';
    case 'CONFIRMED':
      return 'CONFIRMADO';
    case 'REJECTED':
      return 'RECHAZADO';
    case 'CANCELED':
      return 'CANCELADO';
  }
}