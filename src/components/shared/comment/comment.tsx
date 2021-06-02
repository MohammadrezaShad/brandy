import React, {FC} from 'react';

import Tick from '@/assets/vectors/Tick.svg';
import Time from '@/assets/vectors/Time.svg';
import {
  typographyColor,
  typographyDisplay,
} from '@/constants/typography-config';
import {CommentContext, useCommentContext} from '@/context/comment-context';

import StarRating from '../star-rating';
import Typography from '../typography';
import * as S from './comment.styled';

export interface ICommentData {
  id?: number;
  body?: string;
  rate?: number;
  createDate?: string;
  isBuyer?: boolean;
  mail?: string;
}

export type CommentProps = {
  commentData?: ICommentData;
};

export const Comment: FC<CommentProps> = ({
  commentData = {
    id: 1,
    rate: 4.5,
    isBuyer: true,
    createDate: '71/11/13',
    mail: 'RE7***@gmail.com',
    body:
      'نظر ثبت شده صرفا جنبه نمایشی دارد. این نظر صرفـا جنبه نمایشی دارد. به جون تو این نظر صـرفا جنبه نمایشـی دارد. آقـاااا به خداوندی خـدا این نظر .جنبه نمایشی دارد',
  },
  children,
}) => {
  const {id, body, rate, createDate, isBuyer, mail} = commentData;
  return (
    <CommentContext.Provider
      value={{id, body, rate, createDate, isBuyer, mail}}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const CommentLayout: FC = ({children}) => (
  <S.Layout>{children}</S.Layout>
);

export const CommentHead: FC = ({children}) => <S.Head>{children}</S.Head>;

export const CommentContent: FC = ({children}) => {
  const {body} = useCommentContext();
  return (
    <S.Content>
      <Typography>{body}</Typography>
      {children}
    </S.Content>
  );
};

export const CommentFooter: FC = ({children}) => (
  <S.Footer>{children}</S.Footer>
);

export const CommentRate = () => {
  const {rate} = useCommentContext();
  return <StarRating rate={rate} />;
};

export const CommentDate = () => {
  const {createDate} = useCommentContext();
  return (
    <Typography color={typographyColor.ON_PRIMARY}>
      {createDate} <S.CommentTimeIcon as={Time} />
    </Typography>
  );
};

export const CommentMail = () => {
  const {mail} = useCommentContext();
  return <Typography>{mail}</Typography>;
};

export const CommentBuyerTag = () => {
  const {isBuyer} = useCommentContext();
  return (
    <>
      {isBuyer ? (
        <Typography color={typographyColor.SUCCESS}>
          خریدار محصول <S.CommentIcon as={Tick} />
        </Typography>
      ) : null}
    </>
  );
};

export const CommentDetails = () => {
  const {isBuyer} = useCommentContext();

  return (
    <S.Table>
      <S.TableHead>
        <Typography color={typographyColor.PRIMARY}>
          رنگ :{' '}
          <Typography color={typographyColor.ON_PRIMARY}>صورتی</Typography>
        </Typography>
        <Typography color={typographyColor.PRIMARY}>
          سایز <Typography color={typographyColor.ON_PRIMARY}>M</Typography>{' '}
          <Typography color={typographyColor.SUCCESS}>مناسب</Typography> بود
        </Typography>
      </S.TableHead>
      <S.TableBottom>
        <Typography
          color={typographyColor.ON_PRIMARY}
          display={typographyDisplay.BLOCK}
          gutterBottom={1}
        >
          اندازه های من :
        </Typography>
        <Typography color={typographyColor.PRIMARY} gutterLeft={3}>
          قد: <Typography color={typographyColor.ON_PRIMARY}>1.75</Typography>
        </Typography>
        <Typography color={typographyColor.PRIMARY} gutterLeft={3}>
          نیم تنه:{' '}
          <Typography color={typographyColor.ON_PRIMARY}>1.75</Typography>
        </Typography>
        <Typography color={typographyColor.PRIMARY} gutterLeft={3}>
          دور کمر:{' '}
          <Typography color={typographyColor.ON_PRIMARY}>1.75</Typography>
        </Typography>
        <Typography color={typographyColor.PRIMARY}>
          لگن: <Typography color={typographyColor.ON_PRIMARY}>1.75</Typography>
        </Typography>
      </S.TableBottom>
    </S.Table>
  );
};
