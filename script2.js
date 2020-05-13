const inputs = document.querySelectorAll('.controls input');
const cssRoot = document.documentElement;
cssRoot.style.setProperty('--base', `${inputs[2].value}`)

function handleChange(e) {
    console.log(e.target.value);
    const suffix = this.dataset.sizing || '';
    cssRoot.style.setProperty(`--${this.name}`, `${e.target.value}${suffix}`)
}

inputs.forEach(input => input.addEventListener('input', handleChange));

