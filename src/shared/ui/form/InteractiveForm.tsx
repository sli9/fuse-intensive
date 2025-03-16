import s from './interactiveForm.module.scss';

type Props = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const InteractiveForm = ({ setInputValue, inputValue }: Props) => {
  return (
    <input
      className={s.input}
      type="text"
      placeholder="Напишите тут что-нибудь"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
