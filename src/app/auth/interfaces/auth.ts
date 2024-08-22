
export interface loginResponse{
    message:string,
    data: {
        accessToken: string,
        refreshToken: string,
        profile: {
            _id: string,
            first_name: string,
            last_name: string,
            email: string,
            status: string,
            role: string,
            shipping_addresses: []
        }
    },
    code: number,
    status: string,
    timestamp: string
}
export interface loginPayload {
    username: string,
    password: string,

}


export interface registerPayload {
    first_name:string,
    last_name:string,
    password:string,
    email:string,
    role:string
}

export interface registerResponse{
    message: string,
    data: {
        first_name: string,
        last_name: string,
        email: string,
        status: string,
        role: string,
        _id: string,
        shipping_addresses: [],
        updatedAt: string,
        createdAt: string,
        __v: number
    },
    code: number,
    status: string,
    timestamp: string
}

