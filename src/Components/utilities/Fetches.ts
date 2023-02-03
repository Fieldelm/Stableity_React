export async function fetchPostDataStatus(url: string, payload: object) : Promise<any>  {

    const body: string = JSON.stringify(payload)

    const response = await fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: 'POST',
      body: body
    })

    return response.status

  }