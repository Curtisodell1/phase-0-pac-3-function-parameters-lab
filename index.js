function introduction(name){
    return(`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

const name = ("Curtis")
const language = ("JS")

function introductionWithLanguageOptional(name = "User", language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }