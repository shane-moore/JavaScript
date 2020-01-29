const getSecret = (secret) => {
    return {
            get:() => secret
    }
};

const hasSecret = getSecret(1);
console.log(hasSecret.get());
