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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFBOzs7Ozs7Ozs7QUFFWiwyQ0FBNEI7QUFFNUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUU3QyxJQUFJLFlBQVksR0FBVyxnQkFBZ0IsQ0FBQTtBQUMzQyxJQUFJLGFBQWEsR0FBVyxnRUFBZ0UsQ0FBQTtBQUM1RixJQUFJLFFBQWEsQ0FBQTtBQUNqQixNQUFNLGNBQWMsR0FBVyxhQUFhLENBQUMsTUFBTSxDQUFBO0FBRXRDLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUUzRCxJQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFDMUQ7UUFDSSxNQUFNLE1BQU0sR0FBRztZQUNYLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDckMsSUFBSSxFQUFFO2dCQUNGLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNiLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM5QixPQUFPLEVBQUUsS0FBSzthQUNqQjtTQUNKLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxELGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUlyQixRQUFRLEdBQUc7WUFDUCxZQUFZLEVBQUUsR0FBRztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDaEQsQ0FBQztTQUNMLENBQUE7S0FDSjtJQUVELElBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sRUFBQztRQUMzQixRQUFRLEdBQUc7WUFDUCxZQUFZLEVBQUUsR0FBRztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLG1CQUFtQixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQzthQUNoRSxDQUFDO1NBQ0wsQ0FBQTtLQUNKO0lBSUQsb0JBQW9CO0lBQ3BCLE9BQU8sUUFBUSxDQUFBO0FBQ25CLENBQUMsQ0FBQTtBQUlELGdDQUFnQztBQUVoQyxTQUFTLGFBQWEsQ0FBQyxNQUFVO0lBRTdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFVBQVMsR0FBTyxFQUFFLElBQVE7UUFDMUMsSUFBSSxHQUFHO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQW9COztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVcsc0JBQXNCO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBQ0osT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtBQUN6QixDQUFDIn0=