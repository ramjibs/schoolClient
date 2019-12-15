

export function retry(fn, retriesLeft = 3, interval = 10000) {

    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error) => {

                setTimeout(() => {
                    if (retriesLeft === 1) {
                        // reject('maximum retries exceeded');
                        reject(error);
                        return;
                    }
                    retry(fn, retriesLeft - 1, interval).then(resolve, reject);
                    }, interval)
            })
    })
}