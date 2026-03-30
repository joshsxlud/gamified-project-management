// Interface representing an API response.
export interface ApiResponse<T> {
    status: string;
    data?: T;
    message?: string;
    error?: string;
    code?: string;
    time?: string;
}

// Interface representing a successful response. 
export const successResponse = <T>(data?: T, message?: string): ApiResponse<T> => ({
    status: "success",
    message,
    data,
    time: new Date().toISOString()
});

// Interface representing a response with an error.
export const errorResponse = <T>(message?: string, code?: string): ApiResponse<T> => ({
    status: "error",
    error: message,
    code,
    time: new Date().toISOString()
});