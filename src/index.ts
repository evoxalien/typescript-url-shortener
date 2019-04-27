var shortURLHost: string = "www.short.com/";
var possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let response: any;
export const handler = async (event: any = {}): Promise<any> => {

    if(event['resource'] == '/post' && event['body'] != null)
    {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Put Request Made: ' + event['body']
            }) 
        }
    }

    if(event['resource'] == '/get'){
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get Request Made:'
            })
        }
    }

    console.log(event);
    return response;
}

function shortenURL(url:string){
    var shortURL: string = "";
    var something = possible.slice();
    return shortURLHost + shortURL;
}

/*
URL Shorten Request Comes in:
Check if Address is already in DynamoDB
If New then Add a Record to DynamoDB iterate RecordID to next value
Convert Record ID into Base 62 [A-Z,a-z,0-9]
Return base 62 record id as shortened url

Shortened URL Visited
Convert Base 62 shortened URL back into ID
Retrieve ID from DynamoDB
Return Long URL
*/
