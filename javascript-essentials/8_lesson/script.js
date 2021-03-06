/**
 * Solution: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

 const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "lightbulb",
    "usb drive",
  ];
  console.log("Original array:", deskArray);
  
  // todo: Remove the last item:
  deskArray.pop();
  console.log("New array:", deskArray);
  
  // todo: Add last item as the first item on the array:
  deskArray.unshift(deskArray.pop());
  console.log("Last item is now first:", deskArray);
  
  // todo: Sort items by alphabetical order:
  deskArray.sort();
  console.log("Sorted array:", deskArray);
  
  // todo: Find "notebook":
  const foundItem = deskArray.find((item) => item === "notebook");
  console.log("Found item:", foundItem);
  
  // todo: Find and remove an item:
  let remove = "notebook";
  deskArray.splice(deskArray.indexOf(remove), 1);
  console.log(`Array with "${remove}" removed:`, deskArray);