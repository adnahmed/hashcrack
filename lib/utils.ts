// Useful for Testing of Lazy Loading
// Add a fixed delay so you can see the loading state
export function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
