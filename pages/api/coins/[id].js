
export default async function handler({query: {id}}, res) {
    let response = await fetch(`https://api.coinstats.app/public/v1/coins/${id}`)
    let data = await response.json()
    
    res.status(200).json(data)

}
  