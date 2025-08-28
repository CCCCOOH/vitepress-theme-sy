import { createContentLoader } from "vitepress";

export default createContentLoader('_posts/**/*.md', {
  transform(rawData) {
    // 根据需要对原始数据进行 map、sort 或 filter
    // 最终的结果是将发送给客户端的内容
    // 根据发布时间粗排序
    const result = rawData.sort((a, b) => {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    })
    // 根据文件名xxx.html生成文章标题信息
    result.forEach(item => {
      item.title = item.url.split('/').at(-1).split('.')[0];
    })
    // 返回处理数据
    return result;
  }
})