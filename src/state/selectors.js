// import { createSelector } from 'reselect';

// It may be a problem with your selector which returns a new object everytime,  !!!
// and that will violate the shallow comparison

// auth state slice
export const getUid = state => state.auth.uid;
export const isAnonymousSelector = state => state.auth.isAnonymous;

// wall state slice
export const getWallId = state => state.wall.id;
export const isSubscribedToWall = state => state.wall.isSubscribed;
export const isSubscribingToWall = state => state.wall.isSubscribing;

// posts state slice
export const getDeletedPosts = state => state.posts.undo.deleted;
export const getPosts = (state) => {
  const { postsById } = state.posts;
  // const ids = postsById ? Object.keys(postsById) : [];

  return postsById
    // was ids.map(id => postsById[id])
    ? Object.values(postsById).filter(post => (
      !getDeletedPosts(state).includes(post.id)
    ))
    : null;
};
export const isFetchingPosts = state => state.posts.isFetching;
export const isPostRemovalRequested = (state, id) => (
  getDeletedPosts(state).includes(id)
);

// chats state slice
export const getChats = state => state.chats;
