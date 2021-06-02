import React from 'react';

import {ICommentData} from '@/shared/comment/comment';

export const CommentContext = React.createContext<ICommentData>({});

export function useCommentContext() {
  const context = React.useContext(CommentContext);

  if (context === undefined) {
    throw new Error('useCommentContext must be used within a <Comment />');
  }
  return context;
}
