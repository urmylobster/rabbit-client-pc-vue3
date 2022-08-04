import request from '@/utils/request'

export function findBrand (limit) {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

export const findNew = () => {
  return request('home/new', 'get')
}
