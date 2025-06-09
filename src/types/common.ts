// Common TypeScript types used across the application

export interface User {
    id: string;
    name: string;
    email: string;
    roles: string[];
}

export interface ApiResponse<T = any> {
    data: T;
    message?: string;
    status: 'success' | 'error';
}

export interface PaginationParams {
    page: number;
    limit: number;
    total?: number;
}

export interface SortParams {
    field: string;
    direction: 'asc' | 'desc';
}

export interface Model {
    id: string;
    name: string;
    version: string;
    provider: string;
    description?: string;
    parameters?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
}

export interface Agent {
    id: string;
    name: string;
    modelId: string;
    instructions: string;
    tools: string[];
    createdAt: string;
    updatedAt: string;
}