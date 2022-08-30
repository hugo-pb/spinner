const spinner = (counter = 1, index = 0) => {
  if (counter === 10) {
    return;
  }
  const sumb = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  if (index > sumb.length - 1) {
    index = 0;
  }
  setTimeout(() => {
    process.stdout.write(sumb[index]);
    index++;
    counter++;
    spinner(counter, index);
  }, 500);
};
spinner();
