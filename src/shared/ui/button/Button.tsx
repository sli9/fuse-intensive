import { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react';
import clsx from 'clsx';
import s from './button.module.scss';

type PolymorphicComponentProps<
  C extends ElementType,
  Props = null,
> = PropsWithChildren<Props & AsProps<C>> &
  Omit<ComponentPropsWithRef<C>, keyof (AsProps<C> & Props)>;

type AsProps<C extends ElementType> = {
  as?: C;
};

type Props = {
  variants?: 'primary' | 'outline';
};

export const Button = <C extends ElementType = 'button'>({
  as,
  children,
  className,
  variants = 'primary',
  ...props
}: PolymorphicComponentProps<C, Props>) => {
  const Component = as || 'button';
  const variant = variants === 'primary' ? s.primary : s.outline;

  return (
    <Component className={clsx(className, s.component, variant)} {...props}>
      {children}
    </Component>
  );
};
