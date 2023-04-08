$("form").on("submit", async function (e) {
  e.preventDefault();
  let gifVal = $("#get-gif").val();

  async function getGif(gifVal) {
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: gifVal,
        api_key: "EFjkxcnDDwd37CoZgm7Y4FtlmNBxxA06",
      },
    });
    let newGif = response.data.data[0].images.original.url;
    let addGif = $("<img>").attr("src", newGif);
    addGif.appendTo("#gif-add");
  }
  getGif(gifVal);
});

$("#remove-gifs").on("click", function () {
  $("img").remove();
});
