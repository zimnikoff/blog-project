import { UserRole } from '@/entities/User/model/consts/userConsts';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { JsonSettings } from '@/entities/User/model/types/jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
