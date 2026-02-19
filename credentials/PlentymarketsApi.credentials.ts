import type {
	ICredentialDataDecryptedObject,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PlentymarketsApiCredential implements ICredentialType {
	name = 'plentymarketsApi';

	displayName = 'Plentymarkets API';

	documentationUrl = 'plentymarkets';

	properties: INodeProperties[] = [
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'PlentyONE (plentyone.de)',
					value: 'plentyone',
				},
				{
					name: 'Custom URL',
					value: 'custom',
				},
			],
			default: 'plentyone',
			description: 'Select the Plentymarkets environment or enter a custom URL',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://your-domain.plentymarkets.com',
			description: 'The base URL of your Plentymarkets installation',
			displayOptions: {
				show: {
					environment: ['custom'],
				},
			},
		},
		{
			displayName: 'Username / Email',
			name: 'username',
			type: 'string',
			default: '',
			placeholder: 'admin@example.com',
			description: 'The username or email address for authentication',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'The password for authentication',
		},
		{
			displayName: 'Client ID (OAuth2)',
			name: 'clientId',
			type: 'string',
			default: '',
			description: 'OAuth2 Client ID (optional, for newer API versions)',
		},
		{
			displayName: 'Client Secret (OAuth2)',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'OAuth2 Client Secret (optional, for newer API versions)',
		},
	];

	async preAuthentication(
		credentials: ICredentialDataDecryptedObject,
	): Promise<ICredentialDataDecryptedObject> {
		// Set default base URL based on environment
		if (credentials.environment === 'plentyone' && !credentials.baseUrl) {
			(credentials as any).baseUrl = 'https://plentyone.de';
		}
		return credentials;
	}
}
