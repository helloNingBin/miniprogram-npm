import request from '../utils/request'

export const indexData = () => {
  return request.all(
    request.get('apihub/minigram/getBrannerList'),
    request.get('apihub/minigram/getEntranceList'),
    request.get('apihub/minigram/getProductList1'),
    request.get('apihub/minigram/getProductList2')
  )
}
