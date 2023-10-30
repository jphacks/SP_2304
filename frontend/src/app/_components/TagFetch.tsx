"use server";

const TagFetch = async (content: string) => {
  const data = {
    sentence: content,
  };

  const url = 'https://ramenzaifu.fly.dev/api/goolabs/morph'

  const data_ = await fetch(url, {
    body: JSON.stringify(data),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(async (res) => {
      const data_ = await res.json();
      return data_
    })
    .catch(async (res) => {
      const data_ = ['', '', ''];
      console.log(`Tag fetch failed with the following error(s): ${res.error}`)
      return data_
    })

  return data_
};

export default TagFetch;
