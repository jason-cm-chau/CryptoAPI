
export default async function handler(req, res) {
    let response = await fetch('https://api.coinstats.app/public/v1/news/trending?skip=0')
    let data = await response.json()
  
    res.status(200).json(data)
  }
  