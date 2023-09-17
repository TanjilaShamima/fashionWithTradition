import { CartType } from "./cartType";

export type UserType = {
    userId?: string;
    basicInfo: BasicInfo;
    address?: AddressType[];
    contacts: Contact[];
    carts?: CartType[];
    isAdmin: boolean;
    role: string;
}

export type BasicInfo = {
    firstName: string;
    lastName: string;
    birthday?: Date;
    gender?: string;
}

export type AddressType = {
    postalCode: string;
    address1: string;
    address2: string;
    address3?: string;
    address4?: string;
}

export type Contact = {
    email: string;
    phone: string;
    receiveEmail: boolean;
    receiveSMS: boolean;
}