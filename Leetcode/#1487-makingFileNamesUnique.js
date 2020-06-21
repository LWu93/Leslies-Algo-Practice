var getFolderNames = function(names) {
    let map = new Map()

    for (let i = 0; i < names.length;i++) {
        let curr = names[i]
        if (!map.has(curr)) {
            map.set(curr, 0)
        } else if (map.has(curr)) {
            let nextCounter = map.get(curr) + 1
            let nextUnique = `${curr}(${nextCounter})`

            while (map.has(nextUnique)) {
                nextCounter++
                nextUnique = `${curr}(${nextCounter})`
            }
            map.set(nextUnique, 0)
        }
    }

    return [...map.keys()]
};
