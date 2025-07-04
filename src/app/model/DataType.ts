// This file contain data type in this application;

export interface MenuType {
    menuName: string;
    menuCode: string;
    path: string;
}

export interface ProjectType {
    id: string;
    projectName: string;
    vidSrc: string;
    imgSrc?: string;
    details: string;
}

export interface WorkType {
    company: string;
    role: string;
    period: string;
    stack: string;
    project: string;
    isCurrentJob: boolean;
}

export interface EducationType {
    collegeName: string;
    program: string;
    degree: string;
    major: string;
}

export interface AdditionalType {
    additional: string;
}

export interface ProfileType {
    imgSrc: string;
    name: string;
    email: string;
    description: string;
    education: EducationType[];
    workExp: WorkType[];
    additional?: AdditionalType;
}
