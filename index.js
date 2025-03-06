function formatText() {
    let getText = document.getElementById("GetLinkedInText").value;
    let bold = document.getElementById("BoldText");
    let italize = document.getElementById("ItalicText");
    let script = document.getElementById("scriptText");
    let boldScript = document.getElementById("boldScript");

    bold.value = `${getText}`;
    bold = bold.style.fontWeight = "bolder";
    italize.value = `${getText}`;
    italize = italize.style.fontStyle = "italic";
    script.value = `${getText}`;
    script = script.style.fontFamily = "'Pacifico', cursive";
    boldScript.value = `${getText}`;
    boldScript.style.fontFamily = "'Great Vibes', cursive";
  }