var shortURLHost: string = "www.short.com/";
var possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const handler = async (event: any = {}): Promise<any> => {
    console.log('Hello World! 123!');
    //const response = JSON.stringify(event, null, 2);
    const response = shortenURL(event);
    return response;
}

function shortenURL(url:string){
    var shortURL: string = ;
    var something = possible.slice();
    return shortURLHost + something[1];
}