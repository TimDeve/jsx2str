function jsx2src(tag, attr, ...content) {
  if (!content) {
    if (/<.+>\w/.test(tag)) {
      return tag
    }
    else {
      let strArr = []
      strArr.push(`<${tag}`)

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
         strArr.push(` ${attrName}="${attr[key]}"`)
      }

      strArr.push(">")
      return strArr.join("")
    }
  }
  else if (content) {
    let strArr = []
    strArr.push(`<${tag}`)

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
      strArr.push(` ${attrName}="${attr[key]}"`)
    }

    strArr.push(">")
    strArr.push(...content)
    strArr.push(`</${tag}>`)
    return strArr.join("")
  }
}

export default jsx2src
