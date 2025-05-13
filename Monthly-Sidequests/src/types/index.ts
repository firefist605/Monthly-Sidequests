// This file exports various TypeScript types and interfaces used throughout the application.

export interface Sidequest {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
    sidequests: Sidequest[];
}

export interface AppConfig {
    port: number;
    databaseUrl: string;
    jwtSecret: string;
}