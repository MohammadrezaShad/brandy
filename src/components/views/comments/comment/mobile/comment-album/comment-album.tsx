/* eslint-disable react/no-array-index-key */
import React, {ChangeEvent, FC, useState} from 'react';

import Plus from '@/assets/vectors/Plus.svg';
import Typography from '@/shared/typography';

import * as S from './comment-album.styled';

type CommentAlbumProps = {
  files: unknown[];
  setFieldValue: (
    field: string,
    value: unknown,
    shouldValidate?: boolean,
  ) => void;
};

const CommentAlbum: FC<CommentAlbumProps> = ({files, setFieldValue}) => {
  const [imagesList, setImagesList] = useState([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue('files', [...files, event.currentTarget.files]);
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setImagesList([...imagesList, objectUrl]);
  };

  return (
    <S.Container>
      <Typography gutterBottom={3}>آپلود عکس</Typography>
      <S.Wrapper>
        {imagesList.map((srcUrl, index) => (
          <S.ImageWrap key={index}>
            <S.Image src={srcUrl} alt='test' />
          </S.ImageWrap>
        ))}

        <S.UploadButton>
          <S.Icon as={Plus} />
          <S.Input type='file' name='files' multiple onChange={onChange} />
        </S.UploadButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default CommentAlbum;
