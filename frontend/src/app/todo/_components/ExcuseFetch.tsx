import React from 'react'

const ExcuseFetch = async (content: string) => {
  console.log('-------------')

  const data = {
    sentence: content
  }
  const url = 'https://ramenzaifu.fly.dev/api/openai/excuse'

  const excuse = await fetch(url, {
    body: JSON.stringify(data),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(async (res) => {
      const data_ = await res.json();
      return  data_.content;
    })
    .catch(async (res) => {
      console.log(`Excuse generation failed due to the following error(s): ${res.error}`)
      return '良い言い訳が思いつかなかったようです...'
    })

  console.log('##########')
  return excuse
};


export default ExcuseFetch
