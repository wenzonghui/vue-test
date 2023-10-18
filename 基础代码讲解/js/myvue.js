class Vue {
    constructor(options) {
        // 定义构造函数
        Object.keys(options.data).forEach((propertyName, index) => {
            console.log(typeof propertyName, propertyName, index);

            let firstChar = propertyName.charAt(0)
            if (firstChar != '_' && firstChar != '$') {
                Object.defineProperty(this, propertyName, {
                    get() {
                        return options.data[propertyName]
                    },
                    set(val) {
                        options.data[propertyName] = val
                    }
                })
            }
        })
    }
}