const InfoPages = () => {
  const aa = (e: any) => {
    const formData = new FormData();
    formData.append("file", e[0]);
    formData.append("upload_preset", "unsigned_fosuaa");

    fetch(
      "https://api.cloudinary.com/v1_1/fosuaa-whole-green-foods/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Info Pages</h1>
      </div>

      <input type="file" onChange={(e) => aa(e.target.files)} />
    </>
  );
};

export default InfoPages;

InfoPages.auth = true;
