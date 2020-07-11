//Adding to a MaxBinaryHeap - you simply add the new value to the last position of the DS. You then want to call a HF, bubbleUp.

/*
Psudocode for insert(val) MBH

- Push the val that was inserted into your heap.
- Have a HF, bubbleUp that will help move your val in the heap if it doesn't satisfy its conditions.
- Create a var called idx which will keep track of its current idx (since its the last val, its arr.length - 1)
- Create a var parentIdx, that will find where its parent is located in the arr. parentIdx = Math.floor(idx-1/2)
- IF, it fits the rules of the MBH, you leave it there.
- ELSE, you want the val to continue looping (while loop) so it "bubbles up" until it fits the rules of the MBH.
  - When you swap the values of parent with child, you need to reset the var of idx and parentIdx and check again
- Loop ends and the val inserted is EITHER at the end or at the new idx place where it satisfies a MBH.
*/

/*
Psudocode for extractMax() MBH

- Swap the first value with the last one
- Pop off the last item and store it in a var, you will return it at the end.
- Have your new root "bubble down" or "heapify down" to the correct spot so its a valid MBH.
- find the idx of the left and right children of the new root node. Make sure its not out of bounds
- IF, both children are larger than the root val, swap with the largest child. ELSE, swap with the 1 child node that IS larger.
- The swapped child node is now the new parentIdx.
- Continue looping and swapping until neither child is larger than the curr parent node.
- return the popped off item in the beginning
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIdx = this.values.length - 1; //start the bubbleUp at the last ele
    const element = this.values[currIdx];

    while (currIdx > 0) {
      let parentIdx = Math.floor((currIdx - 1)/2);
      let parent = this.values[parentIdx];

      //exit loop if the last ele is less than parent
      if (element <= parent) break;

      //swap values with parent and child. reset currIdx
      this.values[parentIdx] = element;
      this.values[currIdx] = parent;
      currIdx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop;
    //Edge Case - when this.values has 1 element left in its arr, it continues to set the 0th idx back to the val we popped off.
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown(); //bubbleDown or heapifyDown
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx+1;
      let rightChildIdx = 2 * idx+2;
      //declare vars and see if the children are potentially out of bounds or not
      let leftChild, rightChild;
      let swap = null;
      //if leftIdx is in bounds and if leftChild is less than the element, set swap to leftChildIdx
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      //if rightChildIdx is in bounds and you have to check for 2 cases,
      //IF swap is null AND rightChild is less than the first element
      //Or if swap is already set to the leftChildIdx AND its greater than the leftChild
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx
        }
      }
      //if there's nothing to swap, break. Otherwise, do the swap.
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      //set idx to the new childIdx which is stored as swap
      idx = swap;
    }
  }
}
