import { Feature } from 'vx-front'
import './index.css'

import Main from './Main'
import Docs from './Docs'

const feature = Feature.init({ main: <Main />, docs: <Docs /> })
export default feature
