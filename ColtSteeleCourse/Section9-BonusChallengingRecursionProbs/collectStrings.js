const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const collectStrings = (obj) => {
    let arr = []

    for (key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key])
        } else {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
    return arr;
}

collectStrings(obj) // ["foo", "bar", "baz"])
