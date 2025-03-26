import s from './card.module.scss';
import { ComponentPropsWithRef } from 'react';

type Props = {
  title?: string;
  description?: string;
} & ComponentPropsWithRef<'div'>;

export const Card = ({ description, title, ...props }: Props) => {
  return (
    <>
      <div className={s.card} {...props}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};
