import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)

  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observeElement) => {
      // isIntersecting 是否进入可视区
      if (isIntersecting) {
        stop()
        // 调用API函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    // 配置选项,相交的比例大于0就触发
    {
      threshold: 0
    }
  )
  // 返回数据(DOM,后台接口数据)
  return { target, result }
}
