
const request = ({ url, data, formData = false, method = 'GET', complete, actions = {} }) => {
  let header = method === 'POST' ? {
    'content-type': !formData ? 'application/json' : 'application/x-www-form-urlencoded; charset=UTF-8'
  } : {}
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header,
      method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res.data)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {},
    })
  })
}

module.exports = request