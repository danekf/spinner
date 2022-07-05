const spinnerArray = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']

let time = 100;
for (let char of spinnerArray) {
  setTimeout( () => {
    process.stdout.write(char);
  },time);
  time += 200;
}

