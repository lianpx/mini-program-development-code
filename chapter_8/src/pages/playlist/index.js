const regeneratorRuntime = require('../../lib/runtime'); // eslint-disable-line
const dao = require('../../dao/index')

Page({
  data: {
    playlistDetail: null,
  },
  onLoad(options) {
    if (!options.playlistId) {
      wx.navigateBack()
      return
    }
    this.init(options.playlistId)
  },
  async init(playlistId) {
    wx.showLoading({mask: true});
    try {
      const playlistDetail = await dao.getPlaylistDetail(playlistId)
      this.setData({
        playlistDetail
      })
      wx.hideLoading()
    } catch (e) {
      wx.showToast({
        duration: 2000,
        title: '获取歌单详情错误'
      })
    }
  },
})
