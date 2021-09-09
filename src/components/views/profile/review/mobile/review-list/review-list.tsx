import React, {FC, ReactNode, useState} from 'react';

import More from '@/assets/vectors/More.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import DynamicDrawer from '@/shared/dynamic-drawer';
import StarRating from '@/shared/star-rating';
import Typography from '@/shared/typography';

import * as S from './review-list.styled';

interface ReviewListProps {
  children?: ReactNode;
}

const ReviewList: FC<ReviewListProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    console.log('red');
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <S.Wrap>
      <S.List>
        <S.Item>
          <S.Block>
            <S.ImageWrap>
              <S.Image src='/images/res/Image.png' alt='test' />
            </S.ImageWrap>
          </S.Block>
          <S.Detail>
            <S.Top>
              <S.DetailHead>
                <Typography gutterLeft={2}>
                  کفش دخترانه اسپرت برند نایک
                </Typography>
                <S.More onClick={onOpen}>
                  <More />
                </S.More>
              </S.DetailHead>
              <S.Stars>
                <StarRating rate={4.5} />
                <Typography
                  variant={typographyVariant.BODY_SM_MEDIUM}
                  gutterRight={1}
                >
                  4.5
                </Typography>
              </S.Stars>
            </S.Top>
            <S.Bottom>
              <Typography color={typographyColor.PRIMARY}>
                متن نظـر این متن نظر با متن نظر شما متن نظر خودم و با .این وجود
                اگر نظر این متن شاید متن این با است
              </Typography>
            </S.Bottom>
          </S.Detail>
        </S.Item>
        <S.Item>
          <S.Block>
            <S.ImageWrap>
              <S.Image src='/images/res/Image.png' alt='test' />
            </S.ImageWrap>
          </S.Block>
          <S.Detail>
            <S.Top>
              <S.DetailHead>
                <Typography gutterLeft={2}>
                  کفش دخترانه اسپرت برند نایک
                </Typography>
                <S.More onClick={onOpen}>
                  <More />
                </S.More>
              </S.DetailHead>
              <S.Stars>
                <StarRating rate={4.5} />
                <Typography
                  variant={typographyVariant.BODY_SM_MEDIUM}
                  gutterRight={1}
                >
                  4.5
                </Typography>
              </S.Stars>
            </S.Top>
            <S.Bottom>
              <Typography color={typographyColor.PRIMARY}>
                متن نظـر این متن نظر با متن نظر شما متن نظر خودم و با .این وجود
                اگر نظر این متن شاید متن این با است
              </Typography>
            </S.Bottom>
          </S.Detail>
        </S.Item>
      </S.List>
      <DynamicDrawer anchor='bottom' isOpen={isOpen} onClose={onClose}>
        <S.DrawerDetail>
          <S.DrawerItem>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20.111'
              height='19.551'
              viewBox='0 0 20.111 19.551'
            >
              <g id='Edit' transform='translate(0.1 -4.195)'>
                <path
                  id='Path_369'
                  data-name='Path 369'
                  d='M15.3,46.476a.955.955,0,0,0-.956.956v3a.956.956,0,0,1-.956.956H2.868a.956.956,0,0,1-.956-.956V38.006a.956.956,0,0,1,.956-.956H8.423a.956.956,0,1,0,0-1.912H2.868A2.872,2.872,0,0,0,0,38.006V50.435A2.872,2.872,0,0,0,2.868,53.3H13.385a2.871,2.871,0,0,0,2.868-2.868v-3A.955.955,0,0,0,15.3,46.476Z'
                  transform='translate(0 -29.657)'
                  stroke='#fff'
                  strokeWidth='0.2'
                />
                <path
                  id='Path_370'
                  data-name='Path 370'
                  d='M156.37,5.36a3.68,3.68,0,0,0-5.167-.009l-6.472,6.472a4.99,4.99,0,0,0-1.465,3.543v2.142a.955.955,0,0,0,.956.956h2.142A4.99,4.99,0,0,0,149.907,17l6.464-6.464A3.667,3.667,0,0,0,156.37,5.36Zm-7.814,10.286a3.089,3.089,0,0,1-2.193.906h-1.186V15.367a3.089,3.089,0,0,1,.905-2.192l4.267-4.267,2.472,2.472Zm6.462-6.462-.844.844L151.7,7.556l.844-.844a1.748,1.748,0,0,1,2.472,2.472Z'
                  transform='translate(-137.758)'
                  stroke='#fff'
                  strokeWidth='0.2'
                />
              </g>
            </svg>

            <Typography gutterRight={2}>ویرایش دیدگاه</Typography>
          </S.DrawerItem>
          <S.DrawerItem>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21.633'
              height='22.929'
              viewBox='0 0 21.633 22.929'
            >
              <g id='Delete' transform='translate(-155.42 -1110.5)'>
                <g
                  id='Path_336'
                  data-name='Path 336'
                  transform='translate(158.848 1113.296)'
                  fill='#fff'
                >
                  <path
                    d='M 12.42168235778809 19.38252258300781 L 2.355422735214233 19.38252258300781 C 1.535512685775757 19.38252258300781 0.868472695350647 18.71548271179199 0.868472695350647 17.89558410644531 L 0.868472695350647 17.87217330932617 L 0.8670126795768738 17.84880256652832 L -0.2016587555408478 0.7500032186508179 L 14.97876453399658 0.7500032186508179 L 13.9100923538208 17.84880256652832 L 13.90863227844238 17.87217330932617 L 13.90863227844238 17.89558410644531 C 13.90863227844238 18.71548271179199 13.24159240722656 19.38252258300781 12.42168235778809 19.38252258300781 Z'
                    stroke='none'
                  />
                  <path
                    d='M 0.5966806411743164 1.500003814697266 L 1.618473052978516 17.8487434387207 L 1.618473052978516 17.89557266235352 C 1.618473052978516 18.30193328857422 1.949062347412109 18.63252258300781 2.355422973632812 18.63252258300781 L 12.42168235778809 18.63252258300781 C 12.82804298400879 18.63252258300781 13.15863227844238 18.30193328857422 13.15863227844238 17.89557266235352 L 13.15863227844238 17.8487434387207 L 14.18042469024658 1.500003814697266 L 0.5966806411743164 1.500003814697266 M -0.9999971389770508 3.814697265625e-06 L 15.77710247039795 3.814697265625e-06 L 14.65863227844238 17.89557266235352 C 14.65863227844238 19.13101387023926 13.65711307525635 20.13252258300781 12.42168235778809 20.13252258300781 L 2.355422973632812 20.13252258300781 C 1.119992256164551 20.13252258300781 0.1184730529785156 19.13101387023926 0.1184730529785156 17.89557266235352 L -0.9999971389770508 3.814697265625e-06 Z'
                    stroke='none'
                    fill='#e83e40'
                  />
                </g>
                <line
                  id='Line_419'
                  data-name='Line 419'
                  x2='20.133'
                  transform='translate(156.17 1113.855)'
                  fill='none'
                  stroke='#e83e40'
                  strokeLinecap='round'
                  strokeWidth='1.5'
                />
                <g
                  id='Rectangle_481'
                  data-name='Rectangle 481'
                  transform='translate(162.322 1110.5)'
                  fill='#fff'
                  stroke='#e83e40'
                  strokeWidth='1.5'
                >
                  <path
                    d='M2,0H5.829a2,2,0,0,1,2,2V3.915a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z'
                    stroke='none'
                  />
                  <path
                    d='M2,.75H5.829A1.25,1.25,0,0,1,7.079,2v.415a.75.75,0,0,1-.75.75H1.5a.75.75,0,0,1-.75-.75V2A1.25,1.25,0,0,1,2,.75Z'
                    fill='none'
                  />
                </g>
                <line
                  id='Line_422'
                  data-name='Line 422'
                  x1='0.559'
                  y1='12.303'
                  transform='translate(163.44 1117.211)'
                  fill='none'
                  stroke='#e83e40'
                  strokeWidth='1.5'
                />
                <line
                  id='Line_423'
                  data-name='Line 423'
                  y1='12.303'
                  x2='0.559'
                  transform='translate(168.473 1117.211)'
                  fill='none'
                  stroke='#e83e40'
                  strokeWidth='1.5'
                />
              </g>
            </svg>

            <Typography gutterRight={2}>حذف نظر</Typography>
          </S.DrawerItem>
        </S.DrawerDetail>
      </DynamicDrawer>
    </S.Wrap>
  );
};

export default ReviewList;
