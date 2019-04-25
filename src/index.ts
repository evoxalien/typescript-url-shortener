
export const handler = async (event: any = {}): Promise<any> => {
    console.log('Hello World! Woooo!');
    const response = JSON.stringify(event, null, 2);
    return response;
}