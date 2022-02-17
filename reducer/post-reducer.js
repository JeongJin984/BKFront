import produce from "immer";
import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_REPLY_FAILURE,
  ADD_REPLY_REQUEST,
  ADD_REPLY_SUCCESS,
  LIKED_POST_FAILURE,
  LIKED_POST_REQUEST,
  LIKED_POST_SUCCESS,
  LOAD_ALL_POST_FAILURE,
  LOAD_ALL_POST_REQUEST,
  LOAD_ALL_POST_SUCCESS,
  LOAD_FULL_POST_SUCCESS,
  LOAD_TOP20_LIKED_POST_REQUEST,
  LOAD_TOP20_LIKED_POST_SUCCESS,
  PICK_COMMENT_TO_REPLY,
  SORT_POSTS,
  UNLIKED_POST_FAILURE,
  UNLIKED_POST_REQUEST,
  UNLIKED_POST_SUCCESS,
  UPLOAD_POST_SUCCESS
} from "../config/event/eventName/postEvent";

const initialState = {
  isLoadingPost: false,
  isLoadedPost: false,
  mainPost: [],
  loadingPostError: "",

  isLikingPost: false,
  isLikedPost: false,
  LikedPostError: "",

  isUnLikingPost: false,
  isUnLikedPost: false,
  UnLikedPostError: "",

  isAddingComment: false,
  isAddedComment: false,
  AddCommentError: "",

  commentPicked: false,
  commentToReply: "",

  isAddingReply: false,
  isAddedReply: false,
  AddReplyError: "",

  postInfo: {},
  top20LikedPosts: []
}

const postReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UPLOAD_POST_SUCCESS:
        draft.mainPost = [action.data, ...draft.mainPost]
        break;
      case LOAD_ALL_POST_REQUEST:
        draft.isLoadingPost = true;
        break;
      case LOAD_ALL_POST_SUCCESS:
        draft.isLoadingPost = false;
        draft.isLoadedPost = true;
        draft.mainPost = [...draft.mainPost, ...action.data]
        break;
      case LOAD_ALL_POST_FAILURE:
        draft.isLoadingPost = false;
        draft.isLoadedPost = false;
        draft.loadingPostError = "ERROR";
        break;
      case LIKED_POST_REQUEST:
        draft.isLikingPost = true;
        break;
      case LIKED_POST_SUCCESS:
        draft.isLikingPost = false;
        draft.isLikedPost = true;
        draft.mainPost.map(v => {
          if(v.id === action.plus.postId) {
            v.likerAccount.push(action.plus.user)
          }
        })
        break;
      case LIKED_POST_FAILURE:
        draft.isLikingPost = false;
        draft.isLikedPost = false;
        break;
      case UNLIKED_POST_REQUEST:
        draft.isUnLikingPost = true;
        break;
      case UNLIKED_POST_SUCCESS:
        draft.isUnLikingPost = false;
        draft.isLikedPost = true;
        draft.mainPost.map(v => {
          if(v.id === action.plus.postId) {
            let index = 0;
            v.likerAccount.forEach((v, i) => {
              if(action.plus.user.id === v.id) {
                index = i;
              }
            });
            v.likerAccount.splice(index, 1);
          }
        })
        break;
      case UNLIKED_POST_FAILURE:
        draft.isUnLikingPost = false;
        draft.isUnLikedPost = false;
        break;
      case ADD_COMMENT_REQUEST:
        draft.isAddingComment = true;
        break;
      case ADD_COMMENT_SUCCESS:
        draft.isAddingComment = false;
        draft.isAddedComment = true;
        draft.mainPost.map(v => {
          if(v.id === action.plus.postId) {
            v.comment.push(action.data)
          }
        })
        break;
      case PICK_COMMENT_TO_REPLY:
        if(draft.commentToReply === action.plus) {
          draft.commentPicked = false
          draft.commentToReply = ""
        } else {
          draft.commentPicked = true;
          draft.commentToReply = action.plus
        }
        break;
      case ADD_REPLY_REQUEST:
        draft.isAddingReply = true;
        break;
      case ADD_REPLY_SUCCESS:
        draft.isAddingReply = false;
        draft.isAddedReply = true;
        for(let i=0; i<draft.mainPost.length; i++) {
          let curPost = draft.mainPost[i];
          for(let j=0; j<curPost.comment.length; j++) {
            if(curPost.comment[j].id === draft.commentToReply) {
              curPost.comment[j].replyComment.push(action.data)
              break;
            }
          }
        }
        break;
      case ADD_REPLY_FAILURE:
        draft.isAddingReply = false;
        draft.AddReplyError = "ERROR"
        break;
      case SORT_POSTS:
        if(action.data.order === 0) {
          draft.mainPost.sort((a, b) => {
            if(a.createdAt < b.createdAt) return 1;
            else if(a.createdAt > b.createdAt) return -1;
            else return 0;
          })
        } else if(action.data.order === 1) {
          draft.mainPost.sort((a, b) => {
            return b.likerAccount.length - a.likerAccount.length
          })
        } else {
          draft.mainPost.sort((a, b) => {
            return b.comment.length - a.comment.length
          })
        }
        break;
      case LOAD_FULL_POST_SUCCESS:
        draft.postInfo = action.data;
        break;

      case LOAD_TOP20_LIKED_POST_SUCCESS:
        draft.top20LikedPosts = action.data;
        break;
      default:
        break;
    }
  })
}

export default postReducer;