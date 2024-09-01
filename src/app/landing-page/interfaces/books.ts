export interface Books {
    data: Array<Book>,
    "total": number,
    "page": number,
    "limit": number,
    "hasNextPage": boolean,
    "hasPrevPage": boolean
}

export interface Book         {
    _id: string,
    name: string,
    description: string,
    author: string,
    price: number,
    category: string,
    status: string
}