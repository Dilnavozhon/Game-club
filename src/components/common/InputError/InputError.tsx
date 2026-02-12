type Props = {
  message: string | undefined;
};

function InputError({ message }: Props) {
  return (
    <div className="relative">
      <p className="absolute text-red-600 text-[0.8rem]">{message}</p>
    </div>
  );
}

export default InputError;
