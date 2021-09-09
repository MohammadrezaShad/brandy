import React, {FC, FormEvent, ReactNode, useState} from 'react';

import {
  typographyAlign,
  typographyDisplay,
} from '@/constants/typography-config';
import {useCountdown} from '@/helpers/use-count-down';
import Button from '@/shared/button';
import FormControl from '@/shared/form/form-control';
import OtpInput from '@/shared/form/otp-input';
import PageHead from '@/shared/page-head';
import Typography from '@/shared/typography';

import * as S from './verification-view.styled';

interface VerificationProps {
  children?: ReactNode;
  onSumbit: (event: FormEvent<HTMLFormElement>, code: string) => void;
  pageTitle: string;
  text: string;
  target: string;
}

const Verification: FC<VerificationProps> = ({
  onSumbit,
  pageTitle,
  text,
  target,
}) => {
  const [code, setCode] = useState('');
  const {countdown} = useCountdown({autostart: true, timer: 100000});

  return (
    <>
      <PageHead>{pageTitle}</PageHead>
      <S.Wrap>
        <S.Head>
          <Typography
            display={typographyDisplay.BLOCK}
            align={typographyAlign.CENTER}
          >
            کد تاییدیه به {target} زیر ارسال گردید
          </Typography>
          <Typography
            component={S.Text}
            display={typographyDisplay.BLOCK}
            align={typographyAlign.CENTER}
            gutterBottom={2}
            gutterTop={2}
          >
            {text}
          </Typography>
        </S.Head>
        <S.Content onSubmit={event => onSumbit(event, code)}>
          <FormControl>
            <OtpInput
              length={5}
              onChange={(inputs: string) => {
                setCode(inputs);
              }}
            />
          </FormControl>
          <FormControl component={S.FormControl}>
            <Typography
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
              gutterBottom={2}
              gutterTop={2}
            >
              ارسال مجدد کد تا {countdown / 1000} ثانیه دیگر
            </Typography>
            <Button type='submit'>تایید کد</Button>
          </FormControl>
        </S.Content>
      </S.Wrap>
    </>
  );
};

export default Verification;
