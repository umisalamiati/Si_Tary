function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X6kTRqU1P5":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src = "musik.mp3";
audio.load();
audio.play();
audio.volume = 0.20;
}

