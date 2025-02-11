import { ReactNode } from "react";

export interface propsUser {
    id: number,
    title: string,
    firstName: string,
    lastName: string,
    picture: string,
}

export interface propsGet {
    data: propsUser[],
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    phone: string;
    registerDate: string;
    updatedDate: string;
}

export interface ContextProps {
    modalGetUser: boolean,
    setModalGetUser: (page: boolean) => void,
    modalCreatetUser: boolean,
    setCreateGetUser: (page: boolean) => void,
    modalDeletetUser: boolean,
    setDeleteGetUser: (page: boolean) => void,
    modalUpdatetUser: boolean,
    setUpdateGetUser: (page: boolean) => void
}

export interface ChildrenProps {
    children: ReactNode
}

export interface CreateUsersForm {
    id: string;
    firstName: string;
    lastName: string;
    picture: string;
    gener: string;
    email: string;
    phone: number;
}

export interface UsersForm {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    phone: number;
}
