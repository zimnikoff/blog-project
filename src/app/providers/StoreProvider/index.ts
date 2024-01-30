import type { ReduxStoreWithManager, StateSchema, StateSchemaKey, ThunkConfig } from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    StateSchemaKey,
};

export type { AppDispatch };
