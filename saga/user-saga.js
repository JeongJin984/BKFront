import {all, fork} from 'redux-saga/effects';

import createSaga from "../utils/createSaga";
import { backURL } from "../config/config";

const watchLogIn = createSaga("LOGIN", backURL + "/login", "post");

const watchLogOut = createSaga("LOGOUT", backURL + "/logout", "get");

const watchSignUp  = createSaga("SIGNUP", backURL + "/signup", "post");

const watchLoadUser = createSaga("LOAD_USER", backURL + "/user", "get");

const watchLoadMyProfile = createSaga("LOAD_MY_PROFILE", backURL + "/profile", "get");

const watchEmailAuth = createSaga("AUTH_WITH_EMAIL", backURL + "/email", "post");

const watchCreateClan = createSaga("CREATE_CLAN", backURL + "/clan/create", "post");

const watchGetClanInfo = createSaga("GET_CLAN_DATA", backURL + "/clan/info", "get");

const watchGetRecommendAccount = createSaga("GET_RECOMMEND_ACCOUNT", backURL + "/recommend", "get");

const watchFollowAccount = createSaga("FOLLOW_ACCOUNT", backURL + "/follow", "post")

const watchUnFollowAccount = createSaga("UNFOLLOW_ACCOUNT", backURL + "/unfollow", "post")

const watchUploadClanPost = createSaga("UPLOAD_CLAN_POST", backURL + "/clan/upload", "post")

const watchSubscribeClan = createSaga("SUBSCRIBE_CLAN", backURL + "/clan/subscribe", "post")

const watchUnSubscribeClan = createSaga("UNSUBSCRIBE_CLAN", backURL + "/clan/unsubscribe", "post")

const watchCreateFavorite = createSaga("CREATE_FAVORITE_LIST", backURL + "/album/create", "post")

const watchAddAlbumPost = createSaga("ADD_TO_FAVORITE_LIST", backURL + "/album/add", "post")

const watchRemoveAlbumPost = createSaga("REMOVE_TO_FAVORITE_LIST", backURL + "/album/remove", "post")

const watchRemoveAlbum = createSaga("REMOVE_ALBUM", backURL + "/album/delete/all", "get")

const watchUpdateAlbum = createSaga("UPDATE_ALBUM", backURL + "/album/update/all", "get")

const watchUpdateProfile = createSaga("UPDATE_PROFILE", backURL + "/user/update", "post")

const watchUpdateClan = createSaga("UPDATE_CLAN", backURL + "/clan/update", "post")

const watchDeleteClan = createSaga("DELETE_CLAN", backURL + "/clan/delete", "get")

const watchAddBookmark = createSaga("BOOKMARK_POST", backURL + "/bookmark/add", "get")

const watchRemoveBookmark = createSaga("UNBOOKMARK_POST", backURL + "/bookmark/delete", "get")

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLoadUser),
    fork(watchSignUp),
    fork(watchLogOut),
    fork(watchLoadMyProfile),
    fork(watchEmailAuth),
    fork(watchCreateClan),
    fork(watchGetClanInfo),
    fork(watchGetRecommendAccount),
    fork(watchFollowAccount),
    fork(watchUnFollowAccount),
    fork(watchUploadClanPost),
    fork(watchSubscribeClan),
    fork(watchUnSubscribeClan),
    fork(watchCreateFavorite),
    fork(watchAddAlbumPost),
    fork(watchRemoveAlbumPost),
    fork(watchRemoveAlbum),
    fork(watchUpdateAlbum),
    fork(watchUpdateProfile),
    fork(watchUpdateClan),
    fork(watchDeleteClan),
    fork(watchAddBookmark),
    fork(watchRemoveBookmark)
  ]);
}