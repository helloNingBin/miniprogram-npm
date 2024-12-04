import request from '../utils/request'

export const getBigCateList = () => {
  return request.get('apihub/minigram/getBigCateList')
}
export const getSmallCateList = (bigCateId) => {
  return request.get('apihub/minigram/getSmallCateList', { bigCateId: bigCateId })
}
