function jsx2str(tag, attr, ...content) {
  if (typeof tag === "function") {
    attr = attr || {}
    attr["children"] = content
    return tag(attr)
  }
  else {
    let attrArr = []
    for (let key in attr) {
       let attrName = ""
       switch(key) {
         case "className":
           attrName = "class"
           break
         case "htmlFor":
           attrName = "for"
           break
         default:
           attrName = key
       }
       attrArr.push(` ${attrName}="${attr[key]}"`)
    }

    if (content.length === 0) {
      return `<${tag}${attrArr.join("")}>`
    }
    else {
      return `<${tag}${attrArr.join("")}>${content.join("")}</${tag}>`
    }
  }
}

export default jsx2str
