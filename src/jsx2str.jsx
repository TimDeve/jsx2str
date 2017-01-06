function jsx2src(tag, attr, ...content) {
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

    if (content.length === 0) {
      return `<${tag} ${strAttr.join("")}>`
    }
    else {
      return `<${tag} ${strAttr.join("")}>${content.join("")}</${tag}>`
    }
  }
}

export default jsx2src
