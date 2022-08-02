import request from '@/utils/request'

export function findBrand (limit) {
  return request('/home/brand', 'get', { limit })
}
