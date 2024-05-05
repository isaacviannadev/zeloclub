
export type ErrorMessageProps = {
  message: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <span
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      tabIndex={-1}
      className='text-red-500 text-sm mt-1'
    >
      {message}
    </span>
  );
};

export default ErrorMessage;
