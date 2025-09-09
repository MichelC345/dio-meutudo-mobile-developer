interface HttpResponse {
    statusCode: number;
    body: any;
}

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
});

export const created = (data: any): HttpResponse => ({
    statusCode: 201,
    body: data,
});

export const noContent = (message?: string): HttpResponse => ({
    statusCode: 204,
    body: { error: message ? message : null },
});

export const badRequest = (message?: string): HttpResponse => ({
    statusCode: 400,
    body: { error: message ? message : null },
});