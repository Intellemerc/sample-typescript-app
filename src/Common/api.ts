
const getRandomInt = ( max: number) => {
    return Math.floor(Math.random() * max);
};

const getFakeResource = (resource: string, data: any) => {
    switch (resource) {
        case 'Order':
            return {
                description: 'fake order ' + data.id,
                items: [
                    {price: getRandomInt(10), quantity: getRandomInt(50)},
                    {price: getRandomInt(500), quantity: getRandomInt(50)},
                    {price: getRandomInt(40), quantity: getRandomInt(50)}
                ],
                ...data, // overwrite old data
                retrivedAt: new Date()
            };
        default:
            return {
                ...data,
                error: 'missing resource for ' + resource
            };
    }
    
};

const fakeDelay = 1000;
class API {
    get(resource: string, resourceId: number) {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(getFakeResource(resource, {id: resourceId}));
                }, 
                fakeDelay);
        });
    }
    put(resource: string, resourceObj: any) {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(getFakeResource(resource, resourceObj));
                }, 
                fakeDelay);
        });
    }
    post(resource: string, resourceObj: any) {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(getFakeResource(resource, resourceObj));
                }, 
                fakeDelay);
        });
    }
    remove(resource: string, resourceId: string) {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(getFakeResource(resource, {id: resourceId}));
                }, 
                fakeDelay);
        });
    }
};

export default new API();