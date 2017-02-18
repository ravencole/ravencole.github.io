export default (() => {
    let instance;

    function PubSubSingleton() {
        const TOPICS = {}

        return {
            subscribe(topic, listener) {
                if(!TOPICS.hasOwnProperty(topic))
                    TOPICS[topic] = []

                const INDEX = TOPICS[topic].push(listener) - 1

                return {
                    remove() {
                        delete TOPICS[topic][INDEX]
                    }
                }
            },
            publish(topic, info) {
                if (!TOPICS.hasOwnProperty(topic)) 
                    return 

                TOPICS[topic].forEach(cb => cb(info !== undefined ? info : {}))
            }
        }
    }

    return (() => {
        if (!instance) {
            instance = PubSubSingleton()
        }
        return instance
    })()
})()