// script.js (utf-8)
// 
// Edited by: RR-DSE
// Timestamp: 22-03-25 14:25:49

const LANG_DEFINITIONS = [
  {
    "caption": "English",
    "lr_param": "lang_en",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Russian",
    "lr_param": "lang_ru",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Lithuanian",
    "lr_param": "lang_lt",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Polish",
    "lr_param": "lang_pl",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "German",
    "lr_param": "lang_de",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "French",
    "lr_param": "lang_fr",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Italian",
    "lr_param": "lang_it",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Spanish",
    "lr_param": "lang_es",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Portuguese",
    "lr_param": "lang_pt",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Hungarian",
    "lr_param": "lang_hu",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Romanian",
    "lr_param": "lang_ro",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Arabic",
    "lr_param": "lang_ar",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Greek",
    "lr_param": "lang_el",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Ukrainian",
    "lr_param": "lang_ua",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Bulgarian",
    "lr_param": "lang_bg",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Finnish",
    "lr_param": "lang_fi",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Latvian",
    "lr_param": "lang_lv",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Estonian",
    "lr_param": "lang_et",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Dutch",
    "lr_param": "lang_nl",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Czech",
    "lr_param": "lang_cs",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Croatian",
    "lr_param": "lang_hr",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Slovakian",
    "lr_param": "lang_sk",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Slovenian",
    "lr_param": "lang_sl",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Maltese",
    "lr_param": "lang_mt",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Norwegian",
    "lr_param": "lang_no",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Swedish",
    "lr_param": "lang_sv",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Danish",
    "lr_param": "lang_da",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  },
  {
    "caption": "Turkish",
    "lr_param": "lang_tr",
    "cr_param": null,
    "extras": [
      "AND extra A",
      "AND extra B"
    ]
  }
]

let uIDCount = 0;
let uNameCount = 0;
let uLangCount = 0;
let uWindowIDCount = 0;

function newElement(sElement, sID, sClass, sText, oParent){
  const oElement = document.createElement(sElement);
  if(sID != null && sID != ""){
    oElement.id = sID;
  }
  if(sClass != null && sClass != ""){
    oElement.setAttribute("class", sClass);
  }
  if(sText != null && sText != ""){
    oElement.appendChild(document.createTextNode(sText));
  }
  oParent.appendChild(oElement);
  return oElement;
}

function getFirst(oParent, sTag, sClass){
  let bFound = true;
  for(let oElement of oParent.children){
    bFound  = true;
    if(sTag != null && sTag.toUpperCase() != oElement.tagName){
      bFound  = false;
    }
    if(sClass != null && (!oElement.hasAttribute("class") || (oElement.hasAttribute("class") && oElement.getAttribute("class").toLowerCase() != sClass.toLowerCase()))){
      bFound  = false;
    }
    if(bFound){
      return oElement;
    }
  }
  return null;
}

function getArraySum(aArg){
 let nCurr = 0;
 aArg.forEach(function(nValue){nCurr += nValue});
 return nCurr;
}

function getTokenPermutations(aArg){
  let auDispArray = [];
  let uCurrDisp = 0;
  let uCurrDispPos = 0;
  let uMaxDisp = 0;
  let bUpdate = false;
  let bValid = false;
  let sNewString = "";
  let uCurrIndex = 0;
  let aRes = [];
  for(let uTokenCount = aArg.length; uTokenCount > 0; uTokenCount--){
    auDispArray = new Array(uTokenCount).fill(0);
    uMaxDisp = aArg.length - uTokenCount;
    bValid = true;
    while(bValid){
      sNewString = "";
      uCurrIndex = 0;
      for(let uDisp of auDispArray){
        uCurrIndex = uCurrIndex + uDisp;
        sNewString += " " + aArg[uCurrIndex];
        uCurrIndex = uCurrIndex + 1;
      }
      aRes.push(sNewString.trim());
      uCurrDispPos = uTokenCount - 1;
      bUpdate = true;
      while(bUpdate)
      {
        auDispArray[uCurrDispPos] = auDispArray[uCurrDispPos] + 1;
        if(getArraySum(auDispArray) > uMaxDisp) {
          auDispArray[uCurrDispPos] = 0;
          if (uCurrDispPos == 0) {
            bValid = false;
            bUpdate = false;
          }
          else {
            uCurrDispPos = uCurrDispPos - 1;
          }
        }
        else {
          bUpdate = false;
        }
      }
    }
  }
  return aRes;
}

function onSearchOld(){
  let sFirstName = document.getElementById("first_name").value.trim().replace(/\s+/g, " ");
  let sLastName = document.getElementById("last_name").value.trim().replace(/\s+/g, " ");
  let asFirstNameTokens = sFirstName.split(" ");
  let asLastNameTokens = sLastName.split(" ");
  let asFirstNamePermutations = getTokenPermutations(asFirstNameTokens);
  let asLastNamePermutations = getTokenPermutations(asLastNameTokens);
  let sOutput = "";
  for(let sPermutation of asFirstNamePermutations){

    sOutput += sPermutation + "\n\n";
  }
  document.getElementById("output").innerHTML = sOutput;
}

function getNewID(){
  uIDCount = uIDCount + 1;
  return "id" + uIDCount.toString();
}

function getNewWindowID(){
  uWindowIDCount = uWindowIDCount + 1;
  return "window" + uWindowIDCount.toString();
}

function checkNameEntries(oParent){
  let bEmptyFound = false;
  let oInput = null;
  for(let oChild of oParent.children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "name"){
      oInput = getFirst(oChild, "input", "name");
      if(oInput.value == null || oInput.value == ""){
        if(bEmptyFound){
          oParent.removeChild(oChild);
        }
        else {
          bEmptyFound = true;
        }
      }
    }
  }
  if(!bEmptyFound){
    newNameEntry(oParent);
  }
  uNameCount = 0;
  for(let oChild of oParent.children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "name"){
      oInput = getFirst(oChild, "label", "name");
      uNameCount = uNameCount + 1;
      oInput.textContent = "Name " + uNameCount.toString() + ":";
    }
  }
}

function newNameEntry(oParent){
  const oDivEntry = newElement("div", null, "name", null, oParent);
  let sNewID = getNewID();
  const oLabelName = newElement("label", null, "name", "Name", oDivEntry);
  const oInputName = newElement("input", sNewID, "name", null, oDivEntry);
  oInputName.setAttribute("type", "text");
  oInputName.setAttribute("name", "name");
  oLabelName.setAttribute("for", sNewID);
  oInputName.addEventListener("input", function(){
    checkNameEntries(oParent);
  });
  return oDivEntry;
}

function checkLangEntries(oParent){
  let uNoneCount = 0;
  let oSelect = null;
  let uOptionIndex = 0;
  for(let oChild of oParent.children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "lang"){
      oSelect = getFirst(oChild, "select", "lang");
      uOptionIndex = parseInt(oSelect.options[oSelect.selectedIndex].value);
      if(uOptionIndex == 0){
        uNoneCount = uNoneCount + 1;
      }
    }
  }
  uLangCount = 0;
  for(let oChild of oParent.children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "lang"){
      uLangCount = uLangCount + 1;
    }
  }
  if(uLangCount == 0 || uNoneCount == 0){
    newLangEntry(oParent);
  }
  uLangCount = 0;
  for(let oChild of oParent.children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "lang"){
      let oInput = getFirst(oChild, "label", "lang");
      uLangCount = uLangCount + 1;
      oInput.textContent = "Language " + uLangCount.toString() + ":";
    }
  }
}

function newLangEntry(oParent){
  const oDivEntry = newElement("div", null, "lang", null, oParent);
  let sNewID = getNewID();
  const oLabelName = newElement("label", null, "lang", "Language", oDivEntry);
  const oSelect = newElement("select", sNewID, "lang", null, oDivEntry);
  let oOption = null;
  let uOption = 0;
  oOption = newElement("option", null, "option", "(None)", oSelect);
  oOption.value = uOption.toString();
  uOption = uOption + 1;
  for(let oLang of LANG_DEFINITIONS){
    oOption = newElement("option", null, "option", oLang.caption, oSelect);
    oOption.value = uOption.toString();
    uOption = uOption + 1;
  }
  oSelect.selectedIndex = 0;
  oLabelName.setAttribute("for", sNewID);
  oSelect.addEventListener("change", function(){
    let uOptionIndex = parseInt(oSelect.options[oSelect.selectedIndex].value);
    if(uOptionIndex == 0){
      oParent.removeChild(oDivEntry);
    }
    checkLangEntries(oParent);
  });
  return oDivEntry;
}

function getLink(sQuery, sLR, sCR){
  let sLink = "https://www.google.com/search?q=" + sQuery;
  if(sLR != null && sLR != "")
    sLink = sLink + "&lr=" + sLR;
  if(sCR != null && sCR != "")
    sLink = sLink + "&cr=" + sCR;
  sLink = encodeURI(sLink);
  return sLink;
}

function onSearch(){
  let asNames = [];
  let auLanguages = [];
  let sName = "";
  let sLink = "";
  for(let oChild of document.getElementById("section_names").children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "name"){
      oInput = getFirst(oChild, "input", "name");
      sName = oInput.value.trim().replace(/\s+/g, " ");
      if(sName != ""){
        asNames.push(sName);
      }
    }
  }
  for(let oChild of document.getElementById("section_languages").children){
    if(oChild.hasAttribute("class") && oChild.getAttribute("class") == "lang"){
      oSelect = getFirst(oChild, "select", "lang");
      uOptionIndex = parseInt(oSelect.options[oSelect.selectedIndex].value);
      if(uOptionIndex > 0){
        auLanguages.push(uOptionIndex - 1);
      }
    }
  }
  if(asNames.length == 0 || auLanguages.length == 0){
    alert("Attention: indicate at least one name and one language.");
  }
  else {
    for(let uCurrLanguage of auLanguages){
      for(let sCurrExtra of LANG_DEFINITIONS[uCurrLanguage].extras){
        for(let sCurrName of asNames){
          sLink = getLink(sCurrName + " " + sCurrExtra, LANG_DEFINITIONS[uCurrLanguage].lr_param, LANG_DEFINITIONS[uCurrLanguage].cr_param);
          window.open(sLink, getNewWindowID());
          sLink = getLink("\"" + sCurrName + "\"" + " " + sCurrExtra, LANG_DEFINITIONS[uCurrLanguage].lr_param, LANG_DEFINITIONS[uCurrLanguage].cr_param);
          window.open(sLink, getNewWindowID());
        }
      }
    }
  }
}

function onReset(){
  while(document.getElementById("section_names").firstChild){
    document.getElementById("section_names").removeChild(document.getElementById("section_names").lastChild);
  }
  while(document.getElementById("section_languages").firstChild){
    document.getElementById("section_languages").removeChild(document.getElementById("section_languages").lastChild);
  }
  checkNameEntries(document.getElementById("section_names"));
  checkLangEntries(document.getElementById("section_languages"));
}

document.getElementById("search").addEventListener("click", onSearch);
document.getElementById("reset").addEventListener("click", onReset);
checkNameEntries(document.getElementById("section_names"));
checkLangEntries(document.getElementById("section_languages"));
