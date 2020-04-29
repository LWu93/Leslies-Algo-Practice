const waterContainer = (arr) => {
  //start at 0, expand outwards with two pointers
  //recalculate the volume at every window, store it in max
  //using a while loop, calculate where to shift the window

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  let area = 0;
  //8

  while (leftPointer < rightPointer) {

    let width = rightPointer - leftPointer
    area = Math.max(area, Math.min(arr[leftPointer], arr[rightPointer]) * width)

//you've checked an area
//want to move one of the pointers, WHERE THO
//in order to increase area, your lowest height needs ot increase
//take the Math.min of value at each pointers
//whichever one is less, you move it inwards

    if (arr[leftPointer] < arr[rightPointer]) {
      leftPointer++
    } else {
      rightPointer--
    }

  }

  return area;
}

// waterContainer([1,8,6,2,5,4,8,3,7]);
waterContainer([1,8,6,2,5,4,8,3,7]);
