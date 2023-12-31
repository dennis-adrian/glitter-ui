type Props = {
  message?: string;
  onTimeUp: () => void;
};

const ErrorAlert = ({ message, onTimeUp }: Props) => {
  if (!message) return null;

  setTimeout(() => {
    onTimeUp();
  }, 5000);

  return (
    <div className="alert alert-error mt-4 max-w-md">
      <span>{message}</span>
    </div>
  );
};

export default ErrorAlert;
