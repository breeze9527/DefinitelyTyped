import { Environment } from './environment';
import { NewConnectConfig } from '../transport/wire';
export default class OpenFinEnvironment implements Environment {
    writeToken: (path: string, token: string) => Promise<string>;
    retrievePort: (config: NewConnectConfig) => Promise<number>;
    getNextMessageId: () => any;
    createChildWindow: (options: any) => Promise<any>;
    getRandomId: () => string;
    private resolveUrl;
    isWindowExists: (uuid: string, name: string) => boolean;
}
