'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
ddb.endpoint = 'http://localhost:8000';
var shortURLHost = "www.short.com/";
var shortURLArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let response;
const intShortenBase = shortURLArray.length;
exports.handler = async (event = {}) => {
    if (event['resource'] == '/create' && event['body'] != null) {
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                id: uuid.v1(),
                text: event['body'].toString(),
                checked: false
            }
        };
        console.log("params.Item.id:", params.Item.id);
        console.log("params.Item.text:", params.Item.text);
        addToDynamoDB(params);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Put Request Made: ' + event['body']
            })
        };
    }
    if (event['resource'] == '/get') {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Get Request Made:' + event['queryStringParameters']
            })
        };
    }
    //console.log(event)
    return response;
};
/* Functions for Creating URL */
function addToDynamoDB(params) {
    ddb.putItem(params, function (err, data) {
        if (err)
            console.log(err, err.stack); // an error occurred
        else
            console.log(data); // successful response
    });
    return params.Item.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7QUFFWiwyQ0FBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUM3QyxHQUFHLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO0FBRXZDLElBQUksWUFBWSxHQUFXLGdCQUFnQixDQUFBO0FBQzNDLElBQUksYUFBYSxHQUFXLGdFQUFnRSxDQUFBO0FBQzVGLElBQUksUUFBYSxDQUFBO0FBQ2pCLE1BQU0sY0FBYyxHQUFXLGFBQWEsQ0FBQyxNQUFNLENBQUE7QUFFdEMsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLFFBQWEsRUFBRSxFQUFnQixFQUFFO0lBRTNELElBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUMxRDtRQUNJLE1BQU0sTUFBTSxHQUFHO1lBQ1gsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztZQUNyQyxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLE9BQU8sRUFBRSxLQUFLO2FBQ2pCO1NBQ0osQ0FBQTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFbEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBSXJCLFFBQVEsR0FBRztZQUNQLFlBQVksRUFBRSxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNuQixPQUFPLEVBQUUsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNoRCxDQUFDO1NBQ0wsQ0FBQTtLQUNKO0lBRUQsSUFBRyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksTUFBTSxFQUFDO1FBQzNCLFFBQVEsR0FBRztZQUNQLFlBQVksRUFBRSxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNuQixPQUFPLEVBQUUsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO2FBQ2hFLENBQUM7U0FDTCxDQUFBO0tBQ0o7SUFJRCxvQkFBb0I7SUFDcEIsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBO0FBSUQsZ0NBQWdDO0FBRWhDLFNBQVMsYUFBYSxDQUFDLE1BQVU7SUFFN0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBUyxHQUFPLEVBQUUsSUFBUTtRQUMxQyxJQUFJLEdBQUc7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7O1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVyxzQkFBc0I7SUFDOUQsQ0FBQyxDQUFDLENBQUE7SUFDSixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO0FBQ3pCLENBQUMifQ==