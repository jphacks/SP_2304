"use server";


const TagFetch = async (content: string) => {
  const data = {
    sentence: content
  }

  const res = await fetch('http://127.0.0.1:8000/api/goolabs/morph', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })

  const data_ = await res.json();
  // console.log(data_);

  return data_
}

export default TagFetch
