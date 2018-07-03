export default {
	s3: {
		REGION: "us-east-2",
		BUCKET: "arn:aws:s3:::probetest-app-api-prod-serverlessdeploymentbucket-1u8pf0tf1qjam"
	},
	apiGateway: {
		REGION: "us-east-2",
		URL: "https://l5yw33fhta.execute-api.us-east-2.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-east-2",
		USER_POOL_ID: "us-east-2_RUqtSU5k9",
		APP_CLIENT_ID: "56323d2d6qd5i2bippa8istta5",
		IDENTITY_POOL_ID: "us-east-2:00677a0e-ddb3-4f9e-93ef-3a3ec645e82a"
	}
};