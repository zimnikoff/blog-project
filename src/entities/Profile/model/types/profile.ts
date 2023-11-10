import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from 'entities/Country/model/types/Country';

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error: string | undefined;
    readonly: boolean;
}
