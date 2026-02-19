import type { ICredentialDataDecryptedObject, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class PlentymarketsApiCredential implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
    preAuthentication(credentials: ICredentialDataDecryptedObject): Promise<ICredentialDataDecryptedObject>;
}
//# sourceMappingURL=PlentymarketsApi.credentials.d.ts.map