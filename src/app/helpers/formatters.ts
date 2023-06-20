/* eslint-disable no-useless-escape */
export function formatName(name: string) {
  if (!name) {
    return ''
  }

  name = name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, '')

  return name
    .trim()
    .split(' ')
    .map((word) => {
      word = word.toLowerCase()

      if (['de', 'da', 'do', 'das', 'dos', 'e'].includes(word)) {
        return word
      }
      return word[0].toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export function telMask(value: string) {
  return value?.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, '($1) $2-$3')
}

export function phoneValidation(value: string) {
  if (!value || value === '') return false

  const res = value.match(
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
  )

  if (!res) return false

  return true
}

export function phoneNumberFlatFormat(value: string) {
  if (!value || value === '') return ''

  return value.replace(/\D/g, '')
}
