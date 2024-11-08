import json
import boto3
from decimal import Decimal

# Create a DynamoDB resource
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('cloud-resume-challenge')

def lambda_handler(event, context):
    # Print the incoming event for debugging
    print(f"Received event: {event}")

    # Check if the request is for the favicon and skip it
    if event.get('rawPath') == '/favicon.ico':
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Request for favicon ignored'})
        }

    # Retrieve the item from DynamoDB
    response = table.get_item(Key={'viewCountKey': '1'})
    
    # Convert the 'count' value to an integer if it exists
    count = int(response['Item']['count'])
    
    # Increment the view count by 1
    count = count + 1
    print(f"Count after increment: {count}")
    
    # Update DynamoDB with the new count
    table.update_item(
        Key={'viewCountKey': '1'},
        UpdateExpression='SET #v = :val',
        ExpressionAttributeNames={'#v': 'count'},
        ExpressionAttributeValues={':val': count}
    )

    # Return the count as a response
    return count
