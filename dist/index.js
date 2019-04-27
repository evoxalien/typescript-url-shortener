"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shortURLHost = "www.short.com/";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let response;
exports.handler = async (event = {}) => {
    if (event['resource'] == '/post' && event['body'] != null) {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Put Request Made: ' + event['body'],
            })
        };
    }
    if (event['resource'] == '/get') {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get Request Made:',
            })
        };
    }
    console.log(event);
    return response;
};
function shortenURL(url) {
    var shortURL = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVksR0FBVyxnQkFBZ0IsQ0FBQztBQUM1QyxJQUFJLFFBQVEsR0FBVyxnRUFBZ0UsQ0FBQztBQUN4RixJQUFJLFFBQWEsQ0FBQztBQUNMLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUUzRCxJQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFDeEQ7UUFDSSxRQUFRLEdBQUc7WUFDUCxZQUFZLEVBQUUsR0FBRztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFFaEQsQ0FBQztTQUNMLENBQUE7S0FDSjtJQUVELElBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sRUFBQztRQUMzQixRQUFRLEdBQUc7WUFDUCxZQUFZLEVBQUUsR0FBRztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLG1CQUFtQjthQUUvQixDQUFDO1NBQ0wsQ0FBQTtLQUNKO0lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDLENBQUE7QUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFVO0lBQzFCLElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUMxQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsT0FBTyxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQ25DLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7RUFXRSJ9