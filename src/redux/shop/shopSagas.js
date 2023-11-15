import { takeLatest, call, put, all } from "redux-saga/effects";
import { shopActionTypes } from "./shopActionTypes";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./ShopActions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    console.log("ma[", collectionMap);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
