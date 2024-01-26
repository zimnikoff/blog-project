export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserInited,
} from './model/selectors/getUserInited/getUserInited';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type {
    UserSchema,
    User,
} from './model/types/user';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export { UserRole } from '@/entities/User/model/consts/userConsts';
