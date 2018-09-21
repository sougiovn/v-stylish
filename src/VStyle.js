const KEBAB_REGEX = /-/g;

export default {
  bind,
  inserted: resolve,
  update: resolve
}

function bind(el, binding) {
  el.dataset.styleAttribute = cammelCase(binding.arg);
  el.dataset.suffix = '';

  const modifiers = Object.keys(binding.modifiers);
  if (modifiers[0]) {
    el.dataset.suffix = modifiers[0];
  }
}

function resolve(el, binding) {
  let value = binding.value;
  if (value != null) {
    value = `${binding.value}${el.dataset.suffix}`;
  }

  el.style[el.dataset.styleAttribute] = value;
}

function cammelCase(attributeName) {
  if (KEBAB_REGEX.test(attributeName)) {
    return attributeName
      .split(KEBAB_REGEX)
      .map((substring, index) => {
        if (index > 0) {
          substring = `${substring[0].toUpperCase()}${substring.substr(1)}`
        }

        return substring;
      })
      .join('');
  }

  return attributeName;
}

