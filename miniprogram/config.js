import dev from './config.dev' 
import pro from './config.pro' 

let configs = {
  dev,pro
}
const ENV = 'dev'; // 修改为 'production' 等 
export default configs[ENV];
