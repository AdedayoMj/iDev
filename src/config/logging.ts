/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const DEFAULT_NAMESPACE = 'Client';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
    } else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
    }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const warn = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`);
    } else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [WARN]`, message);
    }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const error = (message: any, namespace?: string) => {
    if (typeof message === 'string') {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`);
    } else {
        console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message);
    }
};

const getDate = () => {
    return new Date().toISOString();
};

const logging = { info, warn, error };

export default logging;
