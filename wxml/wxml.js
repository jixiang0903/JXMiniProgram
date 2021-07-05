// wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "你好，小程序你",
    firstname: "kobe",
    lastname: "bryant",
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 20,
    movies: ["星际穿越", "盗梦空间", "大话西游"],
    nums: [
      [10, 14, 11, 18],
      [20, 24, 31, 48],
      [110, 124, 211, 318],
    ],
    letters: ['a', 'b', 'c'],
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData ({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 10
    })
  }
})