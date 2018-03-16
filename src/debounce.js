
var timeout;
export function debounce(func, delay) {
  clearTimeout(timeout)
  timeout = setTimeout(()=> {
    func.call(this)
  }, delay);
}

export function clearTime(func, delay) {
  clearTimeout(timeout)
}
