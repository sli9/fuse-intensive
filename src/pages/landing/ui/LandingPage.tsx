import { useState } from 'react';
import { Button } from '@shared/ui/button';
import { Card } from '@shared/ui/card';
import { InteractiveForm } from '@shared/ui/form';
import { EyeIcon } from '@shared/icons/EyeIcon.tsx';
import s from './landingApp.module.scss';
import { InfoIcon } from '@shared/icons/InfoIcon.tsx';

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    alert(inputValue);
    setInputValue('');
  };

  return (
    <div className={s.exampleHomework}>
      <h1 className={s.visuallyHidden}>Лэндинг</h1>
      <div className={s.screen}>
        <h2>Интересные факты про эту страницу</h2>

        <p>В ней нет смысла</p>
        <Button as={'a'} href={'#second-screen'}>
          Перейти дальше
          <EyeIcon />
        </Button>
      </div>

      <div className={s.screen} id="second-screen">
        <h3>Смотрите какие карточки</h3>
        <div className={s.cardsContainer}>
          <Card title={'карточка 1'} description={'Пустота'} />
          <Card title={'карточка 2'} description={'Пустота'} />
        </div>
      </div>

      <div className={s.block}>
        <h5>Интерактив?</h5>
        <InteractiveForm
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Button type={'button'} onClick={handleClick}>
          Вывести текст в alert
          <InfoIcon />
        </Button>
      </div>
    </div>
  );
};
