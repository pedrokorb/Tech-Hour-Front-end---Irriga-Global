export function getCelsiusValue (value) {
  if(value || value === 0) {
    return `${value.toFixed(1)}°C`
  }
  return '-'
}