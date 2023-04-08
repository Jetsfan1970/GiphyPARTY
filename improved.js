async function getGifFromApi(searchTerm) {
  try {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "EFjkxcnDDwd37CoZgm7Y4FtlmNBxxA06",
      },
    });
    return response.data.data[0].images.original.url;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function addImageToDom(imageUrl) {
  if (!imageUrl) {
    console.log("No image found");
    return;
  }
  const $img = $("<img>").attr("src", imageUrl);
  $("#gif-add").append($img);
}

$("form").on("submit", async function (e) {
  e.preventDefault();
  const searchTerm = $("#get-gif").val();
  const imageUrl = await getGifFromApi(searchTerm);
  addImageToDom(imageUrl);
});

$("#remove-gifs").on("click", function () {
  $("img").remove();
});
