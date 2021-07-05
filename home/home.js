// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ["衣服", "裤子", "鞋子"]
  },
  handleBtnClick() {
    console.log("按钮发生点击")
  },
  handleItemClick(event){
    console.log(event)
    // title - index
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  }
})