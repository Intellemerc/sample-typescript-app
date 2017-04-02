
const getRandomInt = ( max: number) => {
    return Math.floor(Math.random() * max) + 1;
};

const getFakeResource = (resource: string, data: any) => {
    switch (resource) {
        case 'Order':
            const orderItems = [];
            for (let i = 0, length = getRandomInt(30); i < length; i++) {
                orderItems.push({id: data.id + '-' + i, price: getRandomInt(10), quantity: getRandomInt(50)});
            }
            return {
                description: 'fake order ' + data.id,
                items: orderItems,
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

const fakeDelay = 0;
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