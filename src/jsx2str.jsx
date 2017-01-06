function jsx2src(tag, attr, ...content) {
  if (content.length === 0) {
    if (typeof tag === "function") {
      return tag(attr)
    }
    else {
      let strAttr = []
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
         strAttr.push(` ${attrName}="${attr[key]}"`)
      }

      return strArr.push(`<${tag} ${strAttr.join("")}>`)
    }
  }
  else if (content.length !== 0) {
    let strAttr = []
    for (let key in attr) {
      let attrName = ""
      switch(key) {
        case "className":
          attrName = "class"
          break
        case "forHtml":
          attrName = "for"
          break
        default:
          attrName = key
      }
      strAttr.push(` ${attrName}="${attr[key]}"`)
    }

    return `<${tag} ${strAttr.join("")}>${content.join("")}</${tag}>`
  }
}

export default jsx2src
