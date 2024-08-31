#!/bin/bash

# Variables
USER_NAME="test-app-react"
POLICY_NAME="DeployReactAppS3Policy"
S3_BUCKET="test-react-app-bucket"
AWS_PROFILE="al"  # Replace with your AWS profile name

# Create the IAM user
aws iam create-user --user-name $USER_NAME --profile $AWS_PROFILE

# Create a policy JSON file with S3 permissions
cat <<EoF > s3_policy.json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::$S3_BUCKET",
                "arn:aws:s3:::$S3_BUCKET/*"
            ]
        }
    ]
}
EoF

# Create the IAM policy
aws iam create-policy --policy-name $POLICY_NAME --policy-document file://s3_policy.json --profile $AWS_PROFILE

# Attach the policy to the user
aws iam attach-user-policy --profile $AWS_PROFILE --user-name $USER_NAME --policy-arn arn:aws:iam::$(aws sts get-caller-identity --profile $AWS_PROFILE --query "Account" --output text):policy/$POLICY_NAME

# Create access keys for the user
aws iam create-access-key --profile $AWS_PROFILE --user-name $USER_NAME


