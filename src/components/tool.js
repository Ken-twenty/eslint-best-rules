function fn() {
  if (window.test) {
    return 0;
  }
  return undefined;
}

fn();

/**
 * 123
 */
export default () => {
  console.log('testTool');
};
