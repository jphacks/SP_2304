"use server";

const TagFetch = async (content: string) => {
  const data = {
    sentence: content,
  };

  const res = await fetch("http://127.0.0.1:8000/api/goolabs/morph", {
    body: JSON.stringify(data),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const data_ = await res.json();
  // console.log(data_);

  return data_;
};

export default TagFetch;
