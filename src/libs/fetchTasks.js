async function getItems(url) {
  try {
    const data = await fetch(url)
    const items = await data.json()
    return items
  } catch (error) {
    console.log(`error: ${error}`)
  }
}

async function getItemById(url, id) {
  let data
  try {
    data = await data.json()
    const item = await data.json()
    return item
  } catch (error) {
    if (data.status === 404) {
      return undefined
    }
  }
}

export { getItems, getItemById }
