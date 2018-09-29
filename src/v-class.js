export default {
  name: 'class',
  inserted: resolve,
  update: resolve
}

function resolve(el, binding) {
  if (binding.value) {
    el.classList.add(binding.arg);
  } else {
    el.classList.remove(binding.arg);
  }
}

