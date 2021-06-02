import React from 'react';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getDefaultLayout} from '@/layouts/default-layout/default-layout';
import {reduxWrap, useTypedSelector} from '@/redux/store';
import {increment} from '@/slices/test-slice';
import Client from '@/views/comments/comment/client';
import Mobile from '@/views/comments/comment/mobile';

type CommentProps = {
  deviceType: DeviceType;
};

const Comment: ReactComponent<CommentProps> = ({deviceType}) => {
  const st = useTypedSelector(state => state.test);

  return <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>;
};
Comment.getLayout = getDefaultLayout;

export default Comment;

export const getServerSideProps = reduxWrap.getServerSideProps(
  async ({store}) => {
    const {dispatch} = store;
    console.log(dispatch(increment()));
    return {
      props: {},
    };
  },
);
