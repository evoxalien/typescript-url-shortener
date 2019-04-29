'use strict'

import * as uuid from 'uuid'

const AWS = require('aws-sdk')
const ddb = new AWS.DynamoDB.DocumentClient()
ddb.endpoint = 'http://localhost:8000';

var shortURLHost: string = "www.short.com/"
var shortURLArray: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let response: any
const intShortenBase: number = shortURLArray.length

export const handler = async (event: any = {}): Promise<any> => {

    if(event['resource'] == '/create' && event['body'] != null)
    {
        const params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: {
                id: uuid.v1(),
                text: event['body'].toString(),
                checked: false
            }
        }

        console.log("params.Item.id:", params.Item.id)
        console.log("params.Item.text:", params.Item.text)

        addToDynamoDB(params)



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
                message: 'Get Request Made:' + event['queryStringParameters']
            })
        }
    }


    
    //console.log(event)
    return response
}



/* Functions for Creating URL */

function addToDynamoDB(params:any){
    
    ddb.putItem(params, function(err:any, data:any) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      })
    return params.Item.id
}
/*
function lookupID(){
    var returnVal: string = ""

    return returnVal
}

function createURL(id:string){
    var returnVal: string = ""

    return returnVal
}
*/
/* Functions for Retrieving URL */

/*
function convertToID(url:string){
    var returnVal: string = ""

    return returnVal
}

function expandURL(url:string){
    var longURL: string = ""

    return longURL
}


function getFromDyanmoDB(){

}

function shortenURL(url:string){
    var shortURL: string = ""

    return shortURLHost + shortURL
}
*/
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
