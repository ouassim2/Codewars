/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/

function domainName(url) {
  const ext = url.match(/(?<=\/\/|www.).*(?=\.)/g)

  if (ext) {
    if (ext.join("").includes("www")) {
      return ext.join("").slice(4).split(".")[0]
    }
    return ext.join("").split(".")[0]
  } else {
    return url.split(".")[0]
  }
}
