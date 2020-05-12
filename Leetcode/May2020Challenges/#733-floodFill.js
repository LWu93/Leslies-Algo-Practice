const dfs = (image, sr, sc, newColor, setColor) => {
    //want to check the bounds of up, down left right at the coordinate
    //check setColor to see if it matches in order to switch to newColor
    if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1 || image[sr][sc] !== setColor) {
        return;
    }
        //check top first, check left, check right, check bot
    image[sr][sc] = newColor;
    //top, left, right, bottom
    dfs(image, sr -1, sc, newColor, setColor)
    dfs(image, sr, sc - 1, newColor, setColor)
    dfs(image, sr, sc + 1, newColor, setColor)
    dfs(image, sr + 1, sc, newColor, setColor)
}

var floodFill = function(image, sr, sc, newColor) {
    let setColor = image[sr][sc];
    if (setColor === newColor) return image;
    dfs(image, sr, sc, newColor, setColor)

    return image;
};
