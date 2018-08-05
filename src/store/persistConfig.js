import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export const persistConfig = {
  key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
