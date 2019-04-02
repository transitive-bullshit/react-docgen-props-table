import getter from 'lodash.get'
import { styles } from './styles'
import { fonts } from './fonts'
import * as themes from './themes'
import { mq, breakpoints } from './responsive'

export const theme = {
  colors: themes.light,
  styles,
  fonts
}

export const get = (value, defaultValue) => getter(theme, value, defaultValue)

export { mq, breakpoints }
