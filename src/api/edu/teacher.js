import request from '@/utils/request'

const api_name = '/admin/edu/teacher'
export default{
  getList() {
    return request({
      url: '/admin/edu/teacher',
      method: 'get'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  save(teacher) {
    return request({
      url: api_name,
      method: 'post',
      data: teacher
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}

