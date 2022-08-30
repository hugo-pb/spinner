const spinner = counter => {
  if (!counter) {
    counter = 1;
  }
  if (counter === 30) {
    return;
  }
  const sumb = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  for (s of sumb) {
    setTimeout(() => {
      process.stdout.write(s);
    }, 500);
  }
  counter++;
  spinner(counter);
};
spinner();
