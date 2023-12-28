export async function userRoutes(app: Express.Application) {
    app.post<{Body :{id:string;name:string,image?:string}}>('/signup')
}