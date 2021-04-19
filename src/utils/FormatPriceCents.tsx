export const FormatPriceCents = num => {
  const dec = num.toString().split('.')[1]
  const len = dec && dec.length > 2 ? dec.length : 2
  const finalNumber = Number(num).toFixed(len)
  return finalNumber.replace('.', ',')
}
