function extract(id) {
    const regex = /\((?<text>.+?)\)/gm;
    const text = document.getElementById(id).textContent;
    const matches = Array.from(text.matchAll(regex)).map(match => match.groups.text).join("; ");

    return matches;
}